window.addEventListener('DOMContentLoaded', function () {
    'use strict';




//выбор клуба 
const clubSelect = () => {
    const clubSelect = document.querySelector('.club-select'),
        clubSelectUl = document.querySelector('.club-select ul');
    clubSelect.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('p')) {
            if (clubSelectUl.style.display === 'none' || clubSelectUl.style.display === '') {
                clubSelectUl.style.display = 'block';
            } else {
                clubSelectUl.style.display = 'none';
            }
        }
    });
    };
    
    clubSelect();

//главный сладер с улугами

const mainSlider = () => {
    const slide = document.querySelectorAll('.main-slider .slide');
    let interval,
        timeOutFirst,
        timeOutSecond,
        currentSlide = 0; //номер слайдра
    slide.forEach((el, index) => {
        el.style.transition = `opacity .3s`;
        if (index === 0)
            el.style.opacity = `1`;
        else
            el.style.opacity = `0`;
    });

    const prevSlide = (elem, index) => {
        elem[index].style.opacity = `0`;
        timeOutFirst = setTimeout(() => {
            clearTimeout(timeOutFirst);
            elem[index].style.display = `none`;
        }, 300);

    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].style.display = `flex`;
        timeOutSecond = setTimeout(() => {
            clearTimeout(timeOutSecond);
            elem[index].style.opacity = `1`;
        }, 300);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide);
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    startSlide();
    };
    
    mainSlider();







    

// кнопка записаться на бесплатный визит и кнопка перезвонить в шапке наверху

    const popUp = (popUpBtn = false, popUp, clickClose = false) => {
        if (popUpBtn === false) {
            popUp.style.display = 'block';
        } else {
            popUpBtn.addEventListener('click', (event) => {
                popUp.style.display = 'block';
            });
        }

        popUp.addEventListener('click', (event) => {
            let target = event.target;
            if (target.matches('.overlay') || target.matches('.close_icon') || target.matches('.close-btn')) {
                popUp.style.display = 'none';
                if (clickClose) {
                    clickClose();
                }
            }
        });

    };

    popUp(document.querySelector('.open-popup'), document.getElementById('free_visit_form'));  //записаться на бесплатный визит
     popUp(document.querySelector('.call .callback-btn'), document.getElementById('callback_form'));  //перезвонить

//подарок промокод
    const gift = () => {

        try {
            const giftPopup = document.getElementById('gift'),
                giftPopupBtn = document.querySelector('.fixed-gift');

            /*Open popup*/
            giftPopupBtn.addEventListener('click', () => {
                giftPopup.style.display = 'block';
                giftPopupBtn.style.display = 'none';
            });

            /*Close popup*/
            giftPopup.addEventListener('click', (event) => {
                let target = event.target;

                if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
                    giftPopup.style.display = 'none';
                } else {
                    target = target.closest('.form-wrapper');
                    if (!target) {
                        giftPopup.style.display = 'none';
                    }
                }

            });
        } catch (e) {

        }

    };
    gift();

//плавная прокрутка при нажатии на элементы меню
    
const smoothScroll = () => {
    const menuList = document.querySelectorAll('li>a[href*="#"]');
    const arrow = document.querySelector("a>img");

    menuList.forEach((eachElements) => {
        eachElements.addEventListener("click", (event) => {
            event.preventDefault();
            const gotId = eachElements.getAttribute("href");
            document.querySelector("" + gotId).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    });

    arrow.addEventListener("click", () => {
        event.preventDefault();
        arrow.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
    };
    smoothScroll();

//появление стрелки

    const arrowTop = document.getElementById('totop');

    document.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 545) {
            arrowTop.style.display = 'block';
        }
        if (scrollTop < 545) {
            arrowTop.style.display = 'none';
        }
    });

    



const toggleMenu = () => {

    const menuBtn = document.querySelector('.menu-button'),
        topMenu = document.querySelector('.top-menu'),
        //fixedGift = document.querySelector('.fixed-gift'),
        popupMenu = document.querySelector('.popup-menu');

    /*Fix Menu */
    window.addEventListener('scroll', () => {
        if (document.documentElement.clientWidth < 768 && document.documentElement.scrollTop > topMenu.scrollTop) {
            topMenu.style.position = "fixed";
            topMenu.style.top = "0px";
            
        }
    });

    /*Adaptive*/
    const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < 768) {
            menuBtn.style.display = 'block';
        } else {
            menuBtn.style.display = 'none';
        }
    };

    checkResponse();

    window.addEventListener('resize', checkResponse);

    /*Toggle Menu*/
    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.menu-button')) {
            popupMenu.style.display = 'flex';
        } else if (target.tagName === 'A' || target.closest('.close-menu-btn')) {
            popupMenu.style.display = 'none';
        }
    });


};









});