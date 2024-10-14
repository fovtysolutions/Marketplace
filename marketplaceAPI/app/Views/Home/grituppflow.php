<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<style>
    .flow_container {
        margin-top: 4rem;
        padding-top: 50px !important;
        padding-bottom: 50px !important;
    }

    .flow_grid {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .flow_grid .flow_col_1 {
        grid-column: span 2 / span 2;
        justify-items: start;
    }

    .flow_grid .flow_col_2 {
        grid-column: span 1 / span 1;
        justify-items: center;
        align-content: center;
    }

    .flow_grid .flow_col_2 h3 {
        font-size: 4.4vw;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        font-weight: 900;
        margin-left: 6rem;
    }

    .flow_grid .flow_col_2 h3 .flow {
        color: transparent;
        -webkit-text-stroke: #fff;
        -webkit-text-stroke-width: 2px;
        font-size: 6vw;
        line-height: 20px;
    }

    .toggleFlow {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
    }

    .toggleFlow li {
        cursor: pointer;
        color: #fff;
        font-size: 0.9rem;
        font-weight: 600;
        text-transform: uppercase;
        padding: 5px 25px;
        list-style: none;
        transition: all 0.4s ease-in-out;
    }

    .toggleFlow .active {
        background: linear-gradient(rgba(0, 27, 150, 0.8), rgba(21, 60, 245, 0));
        animation: activeShow 0.4s ease-in-out;
    }

    .flow_grid .flow_col_1 .flow_banner {
        width: 100%;
        height: 100%;
        /* margin-top: 2.5rem; */
        display: flex;
        justify-content: center;
        align-items: center;
        animation: activeShow 0.4s ease-in-out;
        position: relative;
    }

    .swiper-slide img {
        width: 100%;
        height: auto;
    }

    .swiper,
    .swiper-wrapper {
        position: static;
    }

    .swiper-pagination {
        bottom: 3rem !important;
    }

    @keyframes activeShow {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 1;
        }
    }

    @media screen and (max-width: 1024px) {
        .flow_grid {
            position: relative;
        }

        .flow_grid .flow_col_1 {
            grid-column: span 3 / span 3 !important;
        }

        .flow_grid .flow_col_2 {
            grid-column: span 3 / span 3;
        }

        .flow_grid .flow_col_2 h3 {
            font-size: 2rem;
            margin-left: 0rem;
            position: absolute;
            bottom: -3rem;
            right: 0;
        }

        .flow_grid .flow_col_2 h3 .flow {
            font-size: 2rem;
            -webkit-text-stroke-width: 1px;
            line-height: 20px;
        }

        .flow_grid .flow_col_1 .flow_banner {
            /* margin-top: 1rem; */
            padding-bottom: 5rem;
        }
    }

    @media screen and (mac-width: 447px) {
        .flow_container {
            margin-top: 4rem;
            padding-top: 10px !important;
            padding-bottom: 10px !important;
        }
    }
</style>

<div class="banner-container flow_container">
    <div class="container-default">
        <div class="flow_grid" data-w-id="d88f6214-546f-2fd3-48cc-c24231485999" style="
                  -webkit-transform: translate3d(0, 100px, 0)
                    scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0)
                    skew(0, 0);
                  -moz-transform: translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1)
                    rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  -ms-transform: translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1)
                    rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  transform: translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1)
                    rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  opacity: 1; color:#fff;
                ">

            <div class="flow_col_1">
                <ul class="toggleFlow" id="toggleFlow">
                    <li class="active">Candidate</li>
                    <li>Employer</li>
                </ul>
                <div class="flow_banner" id="candidate">
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide slide_1">
                                <img src="<?=base_URL()?>/images/candidate_flow/1.png" alt="">
                            </div>

                            <div class="swiper-slide slide_2">
                                <img src="<?=base_URL()?>/images/candidate_flow/2.png" alt="">
                            </div>

                            <div class="swiper-slide slide_3">
                                <img src="<?=base_URL()?>/images/candidate_flow/3.png" alt="">
                            </div>

                            <div class="swiper-slide slide_1">
                                <img src="<?=base_URL()?>/images/candidate_flow/4.png" alt="">
                            </div>

                            <div class="swiper-slide slide_2">
                                <img src="<?=base_URL()?>/images/candidate_flow/5.png" alt="">
                            </div>

                            <div class="swiper-slide slide_3">
                                <img src="<?=base_URL()?>/images/candidate_flow/6.png" alt="">
                            </div>

                            <div class="swiper-slide slide_2">
                                <img src="<?=base_URL()?>/images/candidate_flow/7.png" alt="">
                            </div>

                            <div class="swiper-slide slide_3">
                                <img src="<?=base_URL()?>/images/candidate_flow/8.png" alt="">
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>

                <div class="flow_banner" id="employer" style="display: none;">
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide slide_1">
                                <img src="<?=base_URL()?>/images/client_flow/1.png" alt="">
                            </div>

                            <div class="swiper-slide slide_2">
                                <img src="<?=base_URL()?>/images/client_flow/2.png" alt="">
                            </div>

                            <div class="swiper-slide slide_3">
                                <img src="<?=base_URL()?>/images/client_flow/3.png" alt="">
                            </div>

                            <div class="swiper-slide slide_1">
                                <img src="<?=base_URL()?>/images/client_flow/4.png" alt="">
                            </div>

                            <div class="swiper-slide slide_2">
                                <img src="<?=base_URL()?>/images/client_flow/5.png" alt="">
                            </div>

                            <div class="swiper-slide slide_3">
                                <img src="<?=base_URL()?>/images/client_flow/6.png" alt="">
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>

            <div class="flow_col_2">
                <h3>
                    <span>Gritupp</span>
                    <span class="flow">Flow</span>
                </h3>
            </div>

        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script>
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: window.innerWidth > 667 ? 3 : 2,
        spaceBetween: 30,
        autoplay: true,
        autoplaySpeed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    function triggerSwiper() {
        swiper.slideTo(0, 0, true); // Move to the first slide without animation
    }

    const toggleFlow = document.getElementById('toggleFlow');
    const toggleFlowList = toggleFlow.querySelectorAll('li');

    const candidate = document.getElementById('candidate');
    const employer = document.getElementById('employer');
    let listValue = 'Candidate';

    toggleFlowList.forEach((item) => {
        item.addEventListener('click', () => {
            // triggerSwiper();
            toggleFlowList.forEach((item) => {
                item.classList.remove('active');
            });
            item.classList.add('active');
            listValue = item.textContent;
            if (listValue === 'Candidate') {
                candidate.style.display = 'flex';
                employer.style.display = 'none';
            } else {
                candidate.style.display = 'none';
                employer.style.display = 'flex';
            }

        });
    });
</script>