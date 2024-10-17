import React from "react";
import '../css/style.css';
import { IoDiamond } from "react-icons/io5";

const ListViewItem = ({ item }) => {
    const rating = parseFloat(item.rating);
    return (
        <div className="listview-item">
            <img src={item.image !== 'imageurl' ? item.image : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAqFBMVEX////BEhwAAAC+AADv7+/r6+vR0dGTk5M9PT3YhIbkr7CXl5f8/Py7AAD5+fn19fVdXV3e3t7KysqoqKjk5OSgoKBvb2+ysrLX19fAwMB0dHSEhIR+fn6NjY25ublPT0+/AAtnZ2cRERFFRUUdHR3v0tPz3d7rxcbABxTnubrblpf36OjBKCvgoqPZjY7MX2DSd3jDMzXPamvKS07EOz0qKirIU1Q0NDQnVqPeAAALCElEQVR4nO1ca3uiPBAdV8BuidzlLkit1l3b7XW7//+fvZmgVSZRa73xPk/Pp0oBh0zmzJxJEOAb3/jGN77RVjCLg7FLm7ELzNYClyPQ7Fbbymzd9YrI96PEczWrvbYyOzAiM3Qqjl5kBK0dVma7yaBKPfxb83PTa62pVuANyshafHIz09OtrRdcDLoxcCKA+Z+359c7BlruG1obB5XZcZTmFkzvu6PZqP8EEFeR20b/W0HSK12Yv/c7iP4DgJl5evssZVo8KH2An7WhHFPQ0jb633aLtLJh/mFo94lBkiZB24LK0rnvDWDvo6Wlnf4vgGzoae0ylfver4YA190PQzuzjg1B6MfapY1rwA6KfMxgPpqtLO10fwJEWbv8z3TPLBOAl7UhxVG9A0gHXouCilOpn6YM7kYNQzujN4DAaROpWkGRjXWYvxFLO/0/AH7uBW2x1FpSabdDcc9JNWwPqWIaTW2Y9CVDO6NHC4ywCOxL2yiwoFL7nfp+SarDYTuSKqZRpwfwIPsew/9+DkEatYJUMY06bC2NNoFJtcjbQKpM4+VzIVHp2lSdAIQtIFWRRrNmGiX+7/IaO4zcS5vKq9LsSgP7ebbJ0k73N8Dg4pUq44qk5IrkaeOQIiZgY6V6yamKiiRMLbgjhjYHuPuOSuWypMqpdDiOJSod3TdN7V9fWqkwjavRAcCfJkN1X6bE/Typ6hdVKpxKc0ejVDqbTdfUVG37hUnVwqrUA+ux6fsuV6VApmqfV6p571JBtYFKR69ozi9SU99b4CKpXsRSm1Pp2AabDt9EPAbhrS5WqhdSKlyRiDSqMAkxb8b/jJMqSweXCCqk0jy0qCKZvc0XJ1w3gwqVSuxEFyBVnkaHV7IiwdBZPAqpWfp1Uj27UhHNHU6lv4nvH1enTO6bo/2MpBoZ55Z/WJWGGlUkM07xK9CnEO2f4sxBtVAkSipdgc4M0f4xztr+3UilzdNI4TJ7noPLlco5g8p2k7S0JEXSnZLz/hD/Y/snP6f/hSKRq9Illa5gk0dBpVKdkVSZ5vphLmXM0avsVppUOwBBdb6kiorknw72m1yFUFBSFUrlfPIfFYnc3Ok+qc6dkqR6z5UK9lTPMVWZ7UZpaMOkOaKrNNrEb1KpcqVyrvYPr0p7qEgIlfYfNpyuINUhJ9XT+58rEh+bO2SsKJWuMGmcV7d/Qv8MSdVSK5LRZOMVVKkIUj19pWppok/OXram0SZmMkek5qmVCg+nmkppVbotQijvvlkQc6Vy2qBCKh1rwOgwbfY9guYyUakmJ61UPtKoPPW2Yd6RlIoVnjSpIpXmlSWF87OaSld4kInCOGn7RyiSAOxXmSJ3XPhIlMrDadt/WJU6pjRCmHZ2QSJV0f6JT0Wq2NypNJiSWXdPq1IVaKXKi4TTKRVMo9jc2YdKP8CeZVLlSuUkpIpLjpWiKn3+nAdppcqL2Tg9Dami70ubl/GkjfsZ3yNokfjzVO0fQaWKqnQHla4wJ484mwI7hVLBuE9T2YkbqlIVqJDF9s8JkuqCSq1PKJKNt1A0B8yjKxWsSkVzh/bJ97mJglS1YyuVOo3aqu/aB/Q5HwG8IysVxqn0ylO27/aBLTcGWdY7plIRayRDudB42/dGitLGDaMjJlXcveHoMCdVaXePcFpA1VM/olJBReIo+uR7+h7BunIJHppH8z8qklTu3G1VJJsgKRV2xKQqlpsDALrEuL/vAWSpyB1j9o6zpfYjjdJlu6/djspvXFOpfOMIPTVBpY6sSPak0hUoqb4ei1RFGnXBet9XkWwCXbjuXwM7RlIVikRBpRubO7txR7zzhu2fw0lVKBJdai52tgv87VAUjsXBPXVLXzR3DqfStZtSFpkcYaEaFUkoV6WzwzxFK9V3C4y0OIhUeTjlpQYWVSSH+B6hbv8c4H9m88rEVy7WHAbFLouDlIrok1c8WIkA2tnc2Y0HecnNCL/ufyvwkEpVi4qHQlIqnFR7va+S6qbmzuPuS3djQhqwuFD9VVKtFQk2d5r3/HIabYKS6svX2z+4n3zsSRtK9lUkmzCn7R9eqWS8Uv2CoVyNYnOHbtJ4Po6hoNoWEn/J/5abZE5A28md0ZeqUiUUpPoVpcIViXgti04nabn565iTbYt9Tqr799SZ5kZhKCuS+2Nqc2kfA+Okuq9SWVIprSWOQKUr0EqVkyoM91QqqEhEGj2OItkESalgUvXjPfxfKxKb7iPqHIlKV6AjwZNKspdSYfVyM6MrHtdxz6ToJRAMm4eM+i5BEf69QdyWeQLuUL7Uk5TKr/2S6lKRUCp9hcEPGX8hI0cy/CJ9uH4oZJHi0rGKVPdRKqK5E0hZhFOpytIxmOQIrxXA/dc4NABfcWkok2q9UP3JoFoqEkUPSWXplWQED0VoGvojgp7i0pTHv6xUWGp+sqfKwymsZCrt8ouTskqHpp+L7yn9gZmlZQRFPUC9LE8rpyz/cks9ceivb8SxYfjpVQDJuMqH5qCeKY64FDOLRKqPDLxPKhWx3KwDG21ebk5u8Ovyj4/i24v1m9TPYsh3NxaTYYUXEv9i989n/M9sz3cUmyCf1iZ5bWm6/Oh9+JxYum5Qw1Jz7YiCVC1nsDuo6qqUwYQuOa4rEq85pgpLF0HmSHv4ZEupUsFlWO8TSoWHE75LAHS5+Xr9JO9WYWnmeUlSRL5wubYMmvGgOQVk76uSKhuau0hVUGlPUiT998ZlSktvbm/EUI/FqSs2vcXXO7dZKjdm56DvfE3dwjQqNXc6902Br7R0iSvxBWydZNFJWyyVSJUrlWKHUmG6YY4T6VKqSLZa+m8xFMkapd56Wy1VKBUr29pTFxtgccmRhiM5T2lpmadhWDnOKlq8cmWs27DUJDekW4Ve59hT3xL/SKVlQLfiy4rE28lSC7iD8cLScKul9N26Xbt/xLKTorkjVaVKPlWQJ4ed3NbxxrZaKimV+bbdP6K548iisSM1d+qklDY/qi1d1io39vpTDaWzJFLdllS5IuldxbIiuZbOLFSWSuO0hCP+ra1bmslf/k5mHP/WzFS/USkae6rlZvnkojH1oC49qyKKfH8wGPTSGLTSNOJA14PAqGuSf42nyqVbwlSVVJVKhdlBlHFFQqlU1SePmpZKpWevPnQ1Ho+X0b+MN/KQa1BsES7SRKFUhCLxpChUNndqS53lR1pJ8ykbkiO51bi0Utx0ThP4HViYVCVDtThyMolKUYPLqAdxvPxI1ckPXxs3Pt8MrOalV4qbSiz+ql6oxmUnx4U52b0xUzZ3DIej/Ah2r3QaKD09u735sHPsB/RSFfcCPCpEhtT+EYokkhXJAY093fU43D2ad/RF4D4PqtwkQYWKhM+7CSHg7sP1OUFWf0cvMqku0igjjT1u6llBf6qg3v2znlTFfnJTUiQXB6ZHu/JXwqFu7kiKpAXASnV9oVq8S2BIiqQNGP0SpLoMKjuOKrm50wqMOKniyz/1TMXs5AQw3fJjAZcD/vZXNFwMKguKPJeq0ragj7/9sQh/y/WdSGoQtQU8U2lZVCcqiwvnRHq9uS0YPYE2XExUPqZVD6wWRj6CF/J6vhxTPk8rfMG5jYPaFavUi3nKNLGnnFdd/fMmz0+g/zrF7XRLQsUUhW0O+/pny/AHBYeZFws+FT9qEpYfbY52wR6GKzXFeDr189JJuERrGWLTyX1DXytR8HdLU+eqdShTs+CGrmppZuuxF/kDs9cqmAO/4KqhqaTw93Vx9aBdiF1d8Ru6zLJtrWWwrRb/1u83vvF/xn9tOy7u6OybmwAAAABJRU5ErkJggg=="} alt="Item" className="listview-image" />
            <div className="listview-details">
                <h4 className="listview-title">{item.title}</h4>
                <p className="listview-price">${item.price}</p>
                <p className="listview-order">Order: {item.order}</p>
                <p className="listview-origin">Origin: {item.origin}</p>
            </div>
            <div className="listview-info">
                <p className="listview-description">{item.description}</p>
                <p className="listview-rating">
                    {rating > 3.2 ? (
                        <>
                            <IoDiamond />
                            <IoDiamond />
                            <IoDiamond />
                        </>
                    ) : rating > 1.6 ? (
                        <>
                            <IoDiamond />
                            <IoDiamond />
                        </>
                    ) : (
                        <IoDiamond />
                    )}
                </p>
                <div className="listview-buttons">
                    <button className="listview-button">Contact Us Now</button>
                    <button className="listview-button">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ListViewItem;
