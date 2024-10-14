<style>
    .filter_cards {
        width: 100%;
        display: grid;
        gap: 3rem;
        flex-wrap: wrap;
        grid-template-columns: repeat(3, 1fr);
        padding: 2rem 4rem;
    }

    .filter_card {
        /* border: 4px solid linear-gradient(#163cf4, #16b1f4) 20; */
        /* border-image: linear-gradient(#163cf4, #16b1f4) 20;
        border-width: 4px;
        border-style: solid;
        border-radius: 2rem !important; */
        min-height: 50vh;
        display: flex;
        width: 100%;

        border-radius: 2rem;
        border: 4px solid transparent;
        background: linear-gradient(45deg, #163cf4, #16b1f4) border-box;
        /* -webkit-mask:
        linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0); */
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        box-shadow: 0px 10px 20px #cacaca;
        position: relative;
        transition: all 0.3s ease-in-out;
    }

    .filter_card:hover {
        padding-bottom: 1rem;
        transform: scale(1.05);
    }

    .filter_card_content {
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding: 2rem 2rem;
        border-radius: 1.9rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .filter_card h3 {
        font-size: 1.4rem;
        text-align: center;
    }

    .filter_card ul {
        margin-top: 2rem;
        list-style: none;
        text-align: center;
        padding: 0 0 40px 0 !important;
    }

    .filter_card ul li {
        list-style: none;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .filter_card ul li a {
        text-decoration: underline;
        color: #111;
        font-weight: 500;

    }

    .filter_card ul li a:hover {
        color: #15ef;
    }

    .filter_card .filter_icon_box {
        position: absolute;
        bottom: -3rem;
        background-color: #15ef;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .filter_card .filter_icon_box img {
        width: 70%;
        height: 70%;
        object-fit: contain;
    }

    .filter_heading {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 30px;
    }

    .border_line {
        width: 220px;
        height: 5px;
        background-color: #163cf4;
        margin-top: 40px;
    }

    .filter_heading h2 {
        font-size: 3rem !important;
        text-align: center;

    }

    @media screen and (max-width: 997px) {
        .filter_cards {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 5rem;
            justify-items: center;
            padding: 2rem 1rem;
        }

        .filter_card_content {
            padding: 2rem 1.4rem;
        }

        .filter_card .filter_icon_box {
            width: 90px;
            height: 90px;
            bottom: -2rem;
        }

    }

    @media screen and (max-width: 667px) {
        .filter_cards {
            grid-template-columns: repeat(1, 1fr);
            padding: 2rem 1rem;

        }
    }
</style>

<section class="section bg-neutral-100 wf-section">
    <div class="container-default">
        <div class="filter_heading">
            <h2>Solving Hiring Problems for Niche Sectors.</h2>
            <p class="border_line"></p>

        </div>
        <div class="filter_cards">
            <div class="filter_card">
                <div class="filter_card_content">

                    <h3>
                        Information Technology
                    </h3>
                    <ul>
                        <li><a class="searchbyfilterss" href="#">Software Engineering</a></li>
                        <li><a class="searchbyfilterss" href="#">Cloud Computing & Devops</a></li>
                        <li><a class="searchbyfilterss" href="#">Data Management</a></li>
                        <li><a class="searchbyfilterss" href="#">Cyber Security & Infrastructure</a></li>
                        <li><a class="searchbyfilterss" href="#">Modern Tech (AI, ML, Blockchain, Gaming)</a></li>
                    </ul>
                    <div class="filter_icon_box">
                        <img src="<?=base_URL()?>/images/gritupp_filter_icon_3.png" alt="">
                    </div>
                </div>
            </div>
            <div class="filter_card">
                <div class="filter_card_content">

                    <h3>
                        Engineering
                    </h3>
                    <ul>
                        <li><a class="searchbyfilterss" href="#">Semiconductor, Electronics, & Instrumentation</a></li>
                        <li><a class="searchbyfilterss" href="#">Mechanical & Automation</a></li>
                        <li><a class="searchbyfilterss" href="#">Civil and Architecture</a></li>
                        <li><a class="searchbyfilterss" href="#">Biotech</a></li>
                        <li><a class="searchbyfilterss" href="#">Renewable Energy</a></li>
                    </ul>
                    <div class="filter_icon_box">
                        <img src="<?=base_URL()?>/images/gritupp_filter_icon_2.png" alt="">
                    </div>
                </div>
            </div>
            <div class="filter_card">
                <div class="filter_card_content">

                    <h3>
                        Business Management
                    </h3>
                    <ul> 
                        <li><a class="searchbyfilterss" href="#">Leadership Team</a></li>
                        <li><a class="searchbyfilterss" href="#">Business Development & Sales</a></li>
                        <li><a class="searchbyfilterss" href="#">Marketing</a></li>
                        <li><a class="searchbyfilterss" href="#">Human Resources & Administration</a></li>
                        <li><a class="searchbyfilterss" href="#">Accounting & Finance</a></li>
                        <li><a class="searchbyfilterss" href="#">Legal</a></li>
                        <li><a class="searchbyfilterss" href="#">Operation & Supply Chain</a></li>
                        
                    </ul>
                    <div class="filter_icon_box">
                        <img src="<?=base_URL()?>/images/gritupp_filter_icon_1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script>
    $(document).ready(function () {
        $('.searchbyfilterss').click(function (e) {
            e.preventDefault();
            var searchbyfilterss1 = $(this).html();
            page_num = 0;
            $(this).prop('disabled', true);
            $.ajax({
                url: 'assets/include/getPeginationData.php',
                data: {
                    searchMain: searchbyfilterss1,
                    page: page_num,
                    jobbrowse: page_num,
                },
                type: 'GET'
            }).done(function (resp) {
                $('#normal').html(resp);
                var scrollPosition;
                if (window.innerWidth >= 1200) {
                    // Desktop
                    scrollPosition = 1800;
                } else if (window.innerWidth >= 768) {
                    // Tablet
                    scrollPosition = 1200;
                } else {
                    // Mobile
                    scrollPosition = 600;
                }
                $('html, body').animate({ scrollTop: scrollPosition }, 'slow');
            }).always(function () {
            // Re-enable the link after the request is done
                $(this).prop('disabled', false);
            }.bind(this));
        });
    });
</script>