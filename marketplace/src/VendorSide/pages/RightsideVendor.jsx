import React, { useEffect, useState } from "react";
import '../css/style.css';
import CarouselItem from "../hooks/CarouselItem";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoGrid } from "react-icons/io5";
import ListViewItem from "../hooks/ListItem";
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

const RightSideVendor = ({ data }) => {
    const navigate = useNavigate();
    const [isVisibleGrid, setGridView] = useState(true);
    const [isVisibleListView, setListView] = useState(false);
    const [currentPage, setCurrentPage] = useState(0); // Start from page 0
    const [category, setcategory] = useState('');
    const itemsPerPage = 5; // Change this value to adjust items per page

    const items = data.length > 0 ? data : [];
    const itemLength = items.length;
    const categories = [... new Set(data.map(item => item.category))];

    // Calculate which items to display
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(itemLength / itemsPerPage);
    const googleads = totalPages * 1;
    const vendorads = Math.ceil(currentItems.length / 10);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const showGridView = () => {
        setGridView(true);
        setListView(false);
    };

    const showListView = () => {
        setGridView(false);
        setListView(true);
        setCurrentPage(0); // Reset to first page when switching views
    };

    const changeCategory = (category) => {
        navigate(`/vendor/home/${category}`);
    };

    return (
        <div className='rightsideven'>
            <div className='navigationven'>
                Home / {categories.length > 1 ? 'Misc' : categories[0]}
            </div>
            <div className='gridviewven'>
                <h5 className="pagetitleven">All Products ({itemLength} Products)</h5>
                <div className="boundaryven" />
                <div className="catandview">
                    <div className="catsuggestbox">
                        <p className="CatSuggestven" onClick={() => changeCategory('Construction')}>Construction</p> |
                        <p className="CatSuggestven" onClick={() => changeCategory('Personal Care & Beauty')}>Personal Care & Beauty</p> |
                        <p className="CatSuggestven" onClick={() => changeCategory('Agriculture')}>Agriculture</p> |
                        <p className="CatSuggestven" onClick={() => changeCategory('Apparels')}>Apparels</p>
                    </div>
                    <div className="view-controls">
                        <span className="icon" onClick={showListView}>
                            <GiHamburgerMenu />
                        </span>
                        <span className="icon" onClick={showGridView}>
                            <IoGrid />
                        </span>
                    </div>
                </div>
                <div className="boundaryven" />
                {isVisibleGrid && (
                    <div className="carouselven">
                        <Carousel
                            responsive={{
                                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
                                tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
                                mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
                            }}
                            infinite={true}
                            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                            autoPlaySpeed={2000}
                            autoPlay={true}
                            dotListClass="custom-dot-list-style"
                        // showDots={true}
                        >
                            {items.map(item => (
                                <div key={item.id}>
                                    <CarouselItem items={item} />
                                </div>
                            ))}
                        </Carousel>
                        <div className="adpanel">
                            <img className="adpanelvenr" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4NDQ0PDw0NDg0NDQ0ODQ4NDhsYDQ0NFxEWFxURHxUYHTAlJBolGxUVITEiMSkrLi4uFx81PTMsNygtLisBCgoKDg0OFRAQFSslICMyMis3LTQtKy8yLysvKy0tLTc3LS0tLSsvLi8vLS0vLi0tLy0tLS0tLS0tLS0tLS0tLf/AABEIAHABwgMBEQACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQMEAgX/xAAvEAACAgECBQEHBQADAAAAAAAAAgEDEQQSBRMhMVFBFCIyYXGBkQYVI6GxQlLw/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQG/8QAKhEBAAICAQMCBQUBAQAAAAAAAAECAxEEEiExE0EUUWFxoTJCgZHBsVL/2gAMAwEAAhEDEQA/APrHintAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQIBQAACAUAAAgFAAAIBQAACAUAAAgFAAAIBQAEAoAABAKAAAQCgAAEAoAABAKAAAQCgAAEAoAABAKBAAFAgACgAIAAoACAAAFAAQABQAEAAUCAAKAAgACgQABQAEAAUABAAACgAIAAoACAAKBAAFAAAAACAAKBAAFAAQABQIAAAAAFAgACgAIAAoEAAUABAAFAgACgAIAAoEAAAAACgQABQAEAAUCAAKAAAQCgQABQIAAoACAAKAAgAABQAEAAUABAAFAgACgAIAAoEAAUABAAFAAQAAAoACAAKAAgACgAAAAAAEgQIBQAACAUAAAgFAAAIBQAACAUAAAqJLTCrEs09IhYzMz9CYiZnUQiZiI3MttTorqcTZVYkT2llmIn7mmTDkx/rrMM6ZseT9FolaNBfYsslNjpH/JUmYFMGS8dVazMfYvnx0nVrRE/dilbM0KqtLTOIWIy0z4wUiJmdRHdpNoiNzPZpqdHbTjmVPXntvWYiS+TDkx/rrMKUy0yfotEsTJoAaUaey2dtaO7eEWZn+i9KWvOqxMqXvWkbtOnrUaS2qYiyt0me0Msxn6E3xXpOrVmEUy0vG62iWj8N1Cpvmi2EiMy0pOIjyXnj5Yr1TSdfZWORim3TF4392en0d1sTNdVjxE4mUSZiJ8dClMWS8brWZ/ha+XHTta0R/LxdU9bSrqyNHdWjEx9pK2pas6tGpWrato3Wdw8FVgD21TQqvKtCNMwrTHutMd4iS01tERbXaVYtWZmsT3gSpmhmhWlUiJeYjosT2zIitpiZiPBNqxMRM+XgqsAAIBQAACAUAAAgFAAAAAAAAEiEAAAAAAAAAAAAAAAAAAd3B9Il90VO0rLq8VzHbmYysT8jo4uKuXJ0WnW/H3c/Jy2xY+usb15+zv0vAYeNMrMyW3Nczx6JSnTOPOf9OnHwYt6dbTq07/qHNk5019SYjcRr+5eLOHaa2rm6d7tqXV12LbjMw0xENGPr2Kzx8OSnXime0xE7+q0cjNS/RliO8TMa+j1+z1+1aunc+2ih7EnMbpmIXET07e8T8JT18mPc6rG/+I+Lv6OPJqN2mI/6z1Og01WlpsZrpuvq3Iq42Q3menbrBXJgw0w0vMz1Wja2PPmyZr0iI6az/Lx+ndXXTc02NKQ9T1rZEZmpp7MRwstMeSZtOtxrfyW5uK2THEVjep3r5vqSkJw/Vy+q9pVtkVzMTtWzPpLevnxg69RXi5d5erfj7/y49zblYunH068+PH8Mf1BrLqNTVXS7JXVXVylScK0ecevgpzc2TFmrXHOoiI1DThYceXFa2SNzMzt36hIqv4hbXERcumreMd0Zo95o+fSJOm8RTJnvT9UViftM+XNSZvjwUt+nqmPvrw+Xw+979HrltZrFrRbEZ5zK2ZnERM+cQceG98nHzRedxEbjfzdealcefDNI1Mzrt8ny+G1VPciWs6o87dyd4aei/bJx4K0tkit5mIn/AL7OzPa9aTakbmHVxjhiaSK0l5fUTlnxH8a19l+5tyuNXBFazO7fjTHjcm2eZtEar+dvPBk1Ly6UWTWsxDXPu2qqx6y3fyRxa5rzNcdtR7z4/KeVbDWItkjfyjz+HZxHXxFVNFVz6m6u6LOfPXD+irnv1k3z54ilMVLza0Tvf1+jDBgmb3yXpFazGtfT6uui99G026vVM9rJONKr7s5jpu9INqXtx5m+fJu3/ne/79oY3pXkRFMGPUf+ta/r3ly8O4hp00i1PbqK35z2N7PGG7YjrPpj/DHByMNcEUta0TvfZtnwZbZ5vWtZjWu7i47pJqtWea1y3VrZXY/xyk9smHLxdF4nq6omNxM+XRxMsXpMdOpidTH1a6XQ6ddPXfqGuxc7JWtOMxCziWnP0kvjw4a4q5Msz3nUa+jPJny2y2x4ojtG523/AGOuu7Ucyx5o09S25SI5jq3aOv0k0+CpS+TrtPTWN/Wds/jbWpToiOq06+kaeuMxV7BpOVLzXNtkrzMb475icfMtyuj4XF0b1ufP8o4vX8Tl69b1Hh5/T0J7Pr+ZLRXy6t2z4sZbtkpwun0s3X41H+rc3q9XD0edz/j1+xV2XaaKneKdRW1mXxzEhcZj+4LfA0vfH0TPTaN9/MaV+OvSmTriOqs67eO667gVaxSyzakPqK6XS1ll9rNjfG3/AAZuFSsVmNxuYjU69589jFzbz1ROp1EzuN+3t3X9k076r2at7s17muZsY2xEYVfn1jqT8Hhtm9Kkz28+Pwj4zLXD6t4jv48/lz8a4QlFSWpzF3PKNXayy8TjMNEr6dDLlcWuOkXruPbU6/xrxeVbJeaW1PvuN/6+KcDvUAAAgFAAQCgAAAAAAAAIAAAAAAAAAAAAAAAAAUDp4Zt59UvZylV4eXxnG3r6evQ2wa9Ss2tqI77+zHPv07RWu5ntr7u3iPGnfV+0VzK7Pdqif+nXvHzzP5N83MtbP6tO2vH2YYOHWuD0r+/n7stbxiy5IrhKqU372Wlcbn8yVy8u+SvTEREee3zXxcSmO3VMzM+O/wAml/H7nRl21K9iQllypi108TJa/OyWrMajc9pnXeYUpwcdbRO51HeI32hx6rWvalKNC7aElExHWYz6/wBGGTNa9aVn9vZvjw1pa1o/d3YVttZZlYaImJlW+FsT2n5GdZ1MTrbW0biY26uIcSs1G2G2rWnwVVxitPsbZ+RfLqJ7RHiI8McPHpi3Md5n3ny6dPx+1ERZrptmqMVPamXrj06mtOdkrWImInXiZjvDG/Bpa0zEzG/MRPaXNRxS6u9r4fNj537oyrxPpMeO34MqcnJTJOSJ7z+Wt+NjtjjHMdo/DTW8Xsur5UJVTVLbmSlMQ7eZLZeXbJXoiIiPlCuLiVx265mZn5zLn0GrbT2RYsLLLE7d8ZiJmMZ+plhyziv1xHdrmxRlpNJns96viVt1aJZMPNbNK2NH8mJ7rnwWyci+SkVv317+6uPj0x2m1O2/b2acN4q+mWxVSp1txuixcxOPuXwcq2GLViImJ+aufi1zTWZmYmPk0t40zTW0UaZGrsWyJSvEzMenfsWtzLTNZilY1O/CleHERaJvadxrvLaz9Qs0zLabSM095mrMzP5Lzz7TO5x1/pSvArWNRkt/bDTcZZK1ranT3ImdnNrzKZnOMmdOZatYratZiPG48NL8StrTaLWiZ+UuXX62zUPvsmM4hYhYwqrHaIjwY5s18tuqzbDhrir01dGi4vZTXy9lVqQ29ItTPLfzBri5dsdOjUTHnvHiWWXiVyW69zE+O0+Ya/v103NbMVzzK4rsrlf43SI9Yz85/Jf47J6k3mI7xqY9phT4HH6cUiZ7TuJ94ljxDir6hErlKkStplFrXERmMY/95M83KtlrFJiIiPk0w8WuK02iZmZ+bDTa16q7q1hdt6qr5jrEROen5KUzWpS9Y/c0vhre1LT+1unGLl9n2ysTplZU6fFE94n7GkcvJHp6/b2hnPExz17/AHeVv4szSkrTp6tlq2/xV43WROczIvyptrVKxqd9o90U4sRvdrTuNd59nheK2rqW1EbYsaZlox7kxMYlceCI5V4yzljzK08ak4oxT4hNdr+cqrFNFKLMtimvGWn1mSuXP1xFYrER9ITiwenMzNpmfrLiMG4AAAAAAABQAAAAAAABIECAUASBAgFAAQABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBQAEAAUAAAAAAAAAAAQCgQCgCQIEAoACAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAUAAAgACgAIAAoAABAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBQIBQAAAAAAAAAABAAAAAAAAAAAAAAUABAKAAAAAAAAAAQCgAAAAAAAAAAAAAAAAAAAAgAAAAoAAAAAAAAAAAAAIAAoACAAKBAAFAAAAAAAAAAAAAAAAAAAASBAAAAAAAAAAAAAAAAAIAAoAAAAAAAAAAAAQCgQCgCQIEAoACAAKAAAAAAAAAAAAAAAAAAAAASBAAAAAAAAAAAAASBAAAAAAAAAAAAAAJAgAAH//2Q==" alt="ad" />
                        </div>
                        <div className="adpanel">
                            <img className="adpanelvenr" src="data:image/jpeg;base64,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" alt="ad" />
                        </div>
                    </div>
                )}
            </div>
            {isVisibleListView && (
                <div className='listviewven'>
                    {currentItems.map(item => (
                        <ListViewItem key={item.id} item={item} />
                    ))}
                    <ReactPaginate
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        previousClassName={"previous"}
                        nextClassName={"next"}
                        disabledClassName={"disabled"}
                    />
                    <div className="adpanel">
                        <img className="adpanelvenr" src="data:image/jpeg;base64,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" alt="ad" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default RightSideVendor;
