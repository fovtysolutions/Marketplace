
    <style>
        .hiddenDiv {
            opacity: 0;
            transition: all 1.5s ease-in-out;
        }

        .visible {
            opacity: 1;
        }

        .content {
            /* max-height: 100vh; */
            text-align: center;
            padding-bottom: 2rem;
        }

        .content .title {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
        }

        .content h2 {
            text-align: center;
            font-size: 3rem;
            margin-top: 4rem;
            margin-bottom: 2rem;
        }

        .content .section_image {
            width: 100%;
            height: 100%;
            animation: moveImage 2s ease-in-out;
        }

        @keyframes moveImage {
            0% {
                transform: translateY(100%);
            }

            100% {
                transform: translateY(0%);
            }
        }

        .content .section_image {
            width: 100%;
            height: 100%;
        }

        .border_line {
            width: 220px;
            height: 5px;
            background-color: #163cf4;
            margin-top: 10px;
            margin-bottom: 2rem;
        }

        .p_s_section {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-items: center;
            align-content: center;

        }

        .p_s_section img {
            margin-top: -1rem;
            opacity: 0;
            animation: fadeIn 1s forwards;
        }

        .p_s_section .section_image_1 {
            width: 100%;
            animation-delay: 0s;
        }

        .p_s_section .section_image_2 {
            width: 97%;
            margin-top: -1.6rem !important;
            animation-delay: 0.5s;
        }

        .p_s_section .section_image_3 {
            width: 94%;
            animation-delay: 1s;
        }

        .p_s_section .section_image_4 {
            width: 91%;
            animation-delay: 1.5s;
        }

        .p_s_section .section_image_5 {
            width: 88%;
            animation-delay: 2s;
        }

        .p_s_section .section_image_6 {
            width: 85%;
            animation-delay: 2.5s;
        }


        @keyframes fadeIn {
            to {
                opacity: 1;
            }
        }

        @media screen and (max-width: 997px) {
            .p_s_section img {
                margin-top: 0;
            }

            .p_s_section .section_image_1 {
                width: 95%;
            }

            .p_s_section .section_image_2 {
                width: 92%;
                margin-top: 0 !important;
            }

            .p_s_section .section_image_3 {
                width: 89%;
            }

            .p_s_section .section_image_4 {
                width: 86%;
            }

            .p_s_section .section_image_5 {
                width: 83%;
            }

            .p_s_section .section_image_6 {
                width: 80%;
            }
        }
    </style>

    <div id="target" class="content hiddenDiv">
        <div class="title">
            <h2>Gritupp's guide for solution to your hiring problems</h2>
            <p class="border_line"></p>
        </div>

        <div class="p_s_section" id="p_s_section" style="display: none;">
            <img src="<?=base_URL()?>/images/p-s-section/1.svg" alt="" class="section_image_1">
            <img src="<?=base_URL()?>/images/p-s-section/2.svg" alt="" class="section_image_2">
            <img src="<?=base_URL()?>/images/p-s-section/3.svg" alt="" class="section_image_3">
            <img src="<?=base_URL()?>/images/p-s-section/4.svg" alt="" class="section_image_4">
            <img src="<?=base_URL()?>/images/p-s-section/5.svg" alt="" class="section_image_5">
            <img src="<?=base_URL()?>/images/p-s-section/6.svg" alt="" class="section_image_6">
        </div>
    </div>

    <script>
        $(document).ready(function() {
            $(window).on('scroll', function() {
                var target = $('#target');
                var targetOffset = target.offset().top;
                var scrollTop = $(window).scrollTop();
                var windowHeight = $(window).height();

                if (scrollTop + windowHeight > targetOffset) {
                    target.addClass('section_image');
                    target.addClass('visible');
                } else {
                    target.remove('visible');
                    target.remove('section_image');

                }
            });
        });
    </script>
    <script>
        // console.log(window.pageYOffset)
        const section = document.getElementById('p_s_section');
        window.addEventListener('scroll', function() {
            // console.log(window.pageYOffset){}
            if (window.pageYOffset > 3200) {
                section.style.display = "grid";
            }
        })
    </script>
