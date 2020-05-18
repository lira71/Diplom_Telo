window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //появление стрелки

   const arrowTop = () => {
       const toTop = document.getElementById('totop');
       toTop.style.display = 'none';

       window.addEventListener('scroll', function () {
           if (pageYOffset > document.documentElement.clientHeight) {
               toTop.style.display = 'block'
           } else {
               toTop.style.display = 'none';
           }
       });
    };
    arrowTop();

    //бургер
const toggleMenu = () => {

    const menuBtn = document.querySelector('.menu-button'),
        topMenu = document.querySelector('.top-menu'),
        fixedGift = document.querySelector('.fixed-gift'),
        popupMenu = document.querySelector('.popup-menu');


    window.addEventListener('scroll', () => {
        if (document.documentElement.clientWidth < 768 && document.documentElement.scrollTop > topMenu.scrollTop) {
            topMenu.style.position = 'fixed';
            topMenu.style.top = '0px';
            try {
                fixedGift.style.right = '55px';
            } catch (e) {

            }
        } else {
            topMenu.style.position = '';
            try {
                fixedGift.style.right = '20px';
            } catch (e) {

            }
        }
    });


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


    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.menu-button')) {
            popupMenu.style.display = 'flex';
        } else if (target.tagName === 'A' || target.closest('.close-menu-btn')) {
            popupMenu.style.display = 'none';
        }
    });


};

    toggleMenu();
    
    //подарок
 const gift = () => {

     try {
         const giftPopup = document.getElementById('gift'),
             giftPopupBtn = document.querySelector('.fixed-gift');


         giftPopupBtn.addEventListener('click', () => {
             giftPopup.style.display = 'block';
             giftPopupBtn.style.display = 'none';
         });


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
    
    // плавная прокрутка
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

    //калькулятор с промокодом
    const calc = () => {
        const calcBlock = document.getElementById('card_order'),
            priceTotal = document.getElementById('price-total'),
            labelMozaika = document.getElementById('card_leto_mozaika'),
            labelSchelkovo = document.getElementById('card_leto_schelkovo'),
            time = document.querySelector('.time'),
            promoMessage = document.querySelector('.price-message input[type="text"]'),
            promoCode = "ТЕЛО2020";

        const priceMozaika = {
            1: 1999,
            6: 9900,
            9: 13900,
            12: 19900
        };

        const priceSchelkovo = {
            1: 2999,
            6: 14990,
            9: 21990,
            12: 24990
        };

        const calcSum = (obj) => {
            time.addEventListener('click', (event) => {
                let target = event.target;
                target = target.closest('input');

                if (target) {
                    for (let key in obj) {
                        if (target.value == key) {
                            priceTotal.textContent = obj[key];

                        }
                    }
                }
            });
        };

        if (labelMozaika || labelSchelkovo) {

            calcBlock.addEventListener('click', (event) => {
                let target = event.target;
                target = target.closest('input');

                if (labelMozaika.checked) calcSum(priceMozaika);
                if (labelSchelkovo.checked) calcSum(priceSchelkovo);

            });

            calcBlock.addEventListener('change', (event) => {
                let target = event.target;
                target = target.closest('input[type="checkbox"]') ||
                    target.closest('input[placeholder="Ваше имя..."]') ||
                    target.closest('input[placeholder="Ваш номер телефона..."]');
                const totalPrice = priceTotal.textContent;
                if (promoMessage.value === promoCode && !target) {
                    priceTotal.textContent = Math.ceil(totalPrice * 0.7);
                }

            });
        } else {
            return;
        }
    };
    calc();

//модальные окна
    const toggleAll = () => {

        const handlerMenu = (elem) => {
            elem.style.display = 'block';
        };

        const toggleClub = () => {
            const clubSelect = document.querySelector('.club-select');
            const clubList = document.querySelector('.clubs-list');
            const clubUl = clubList.querySelector('ul');

            document.body.addEventListener('click', (event) => {
                let target = event.target;

                if (target.closest('.club-select')) {
                    handlerMenu(clubUl);
                } else if (clubUl.style.display === 'block' && !target.classList.contains("club-list")) {
                    clubUl.style.display = 'none';
                }
            });

        };
        toggleClub();

        const togglePopUp = () => {

            const freeVisitForm = document.getElementById('free_visit_form');

            document.body.addEventListener('click', (event) => {
                let target = event.target;

                if (target.closest('.free-visit')) {
                    handlerMenu(freeVisitForm);
                } else {
                    target = target.closest('.form-content')
                    if (!target) {
                        freeVisitForm.style.display = 'none';
                    }
                }
            });
        };
        togglePopUp();

        const toggleMenu = () => {
            const popupMenu = document.querySelector('.popup-menu');

            document.body.addEventListener('click', (event) => {
                let target = event.target;

                if (target.closest('.menu-button')) {
                    popupMenu.style.display = 'flex';
                } else {
                    target = target.closest('.form-content');
                    popupMenu.style.display = 'none';
                    if (!target) {
                        popupMenu.style.display = 'none';
                    }
                }
            });
        };
        toggleMenu();

    };
    toggleAll();

//перезвоните мне
    const toggleCallbackForm = () => {

        const callbackBtn = document.querySelector('.head .callback-btn'),
            callbackForm = document.querySelector('#callback_form');

        callbackBtn.addEventListener('click', () => {
            callbackForm.style.display = 'block';
        });

        callbackForm.addEventListener('click', (event) => {
            if (event.target.matches('.close_icon') || event.target.matches('.overlay')) {
                callbackForm.style.display = 'none';
            }
        });
    };
    toggleCallbackForm();
//отправка формы 
    const sendForm = () => {

        const errorMessage = "Что-то пошло не так",
            policyMessage = "Подтвердите обработку персональных данных",
            clubMessage = "Какой Клуб Вы выбираете?";


        const idThanks = document.getElementById("thanks");
        const statusText = document.createElement('div');
        statusText.style.cssText = 'font-size: 2rem; color: red';
        const popUp = document.querySelectorAll('.popup');
        let priceTotal = document.getElementById('price-total');
        const footerLetoMozaika = document.getElementById('footer_leto_mozaika');
        const footerLetoSchelkovo = document.getElementById('footer_leto_schelkovo');

        const form1 = document.getElementById('form1');
        const form2 = document.getElementById('form2');
        const form3 = document.getElementById('banner-form');
        const form4 = document.getElementById('card_order');
        const form5 = document.getElementById('footer_form');

        let arrforms = [form1, form2, form3, form4, form5];

        arrforms.forEach((item) => {

            item.addEventListener('submit', (event) => {
                event.preventDefault();
                item.appendChild(statusText);

                const checkBox = item.querySelector('input[type=checkbox]');

                if (checkBox && !checkBox.checked) {
                    item.appendChild(statusText);
                    statusText.textContent = policyMessage;
                    return false;
                }

                if (item === form5) {
                    if (!footerLetoMozaika.checked && !footerLetoSchelkovo.checked) {
                        statusText.textContent = clubMessage;
                        return false;
                    }
                }

                const formData = new FormData(item);
                let body = {};

                formData.forEach((val, key) => {
                    body[key] = val;
                });


                postData(body)
                    .then((response) => {
                        if (response.status !== 200) throw new Error('status network not 200');
                        idThanks.style.display = 'block';
                    })
                    .then(() => {
                        item.reset();
                        if (priceTotal) priceTotal.textContent = '2999';
                        statusText.style.display = 'none';

                        if (item !== form3 && item !== form4 && item !== form5) {
                            item.style.display = 'none';
                        }

                        idThanks.addEventListener('click', (event) => {
                            let target = event.target;
                            idThanks.style.display = 'none';

                            if (!target.matches('.form-content')) {
                                popUp.forEach((item) => {
                                    item.style.display = 'none';
                                });
                            } else {
                                target = target.matches('.close-btn');
                                if (target) {
                                    idThanks.style.display = 'none';
                                    popUp.forEach((item) => {
                                        item.style.display = 'none';
                                    });
                                }
                            }
                        });
                    })
                    .catch(error => {
                        statusText.textContent = errorMessage;
                        console.error(error);
                    });
            });

            item.addEventListener('input', (event) => {
                const target = event.target,
                    inputPhone = document.querySelectorAll('input[type=tel]'),
                    inputText = document.querySelectorAll('input[placeholder="Ваше имя..."]');

                const validateForm = (input, inputType, pattern) => {
                    if (target.matches(inputType)) {
                        input.forEach((item) => {
                            item.addEventListener('change', () => {
                                if (item.value != item.value.match(pattern)) {
                                    item.value = '';
                                    item.style.border = '2px solid red';
                                } else {
                                    item.style.border = 'none';
                                }
                            });
                        });
                    }
                };

                validateForm(inputPhone, 'input[type=tel]', /^\+?[78]\d{10}$/);
                validateForm(inputText, 'input[placeholder="Ваше имя..."]', /^[а-яА-ЯёЁ0-9\s]+$/);
            });


        });

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };

    };
    sendForm();

//главный слайдер наверху
const mainSlider = () => {
    const slide = document.querySelectorAll('.main-slider .slide');
    let interval,
        timeOutFirst,
        timeOutSecond,
        currentSlide = 0;
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
    
//слайдер карусель
    
   class SliderCarousel{
    
     constructor({
         main,
         wrap,
         next,
         prev,
         infinity = false,
         position = 0,
         slidesToShow = 5, 
         responsive = []
     }) {
         if (!main || !wrap) {
             console.warn('slider-carousel: Необходимо 2 свойства, "main" "wrap"!')
         }
         this.main = document.querySelector(main);
         this.wrap = document.querySelector(wrap);
         this.slides = document.querySelector(wrap).children;
         this.next = document.querySelector(next);
         this.prev = document.querySelector(prev);
         this.slidesToShow = slidesToShow;
         this.options = {
             position, 
             infinity,
             widthSlide: Math.floor(100 / this.slidesToShow), 
             maxPosition: this.slides.length - this.slidesToShow
         };
         this.responsive = responsive;
     }

     init() {

         this.addGloClass(); 
         this.addStyle(); 

         if (this.prev && this.next) {
             this.controlSlider();
         } else {
             this.addArrow();
             this.controlSlider();
         }

         if (this.responsive) {
             this.responseInit();
         }
     }

     addGloClass() {
         this.main.classList.add('glo-slider');
         this.wrap.classList.add('glo-slider__wrap');
         for (const item of this.slides) {
             item.classList.add('glo-slider__item');
         }
     }

     addStyle() {
         let style = document.getElementById('sliderCarousel-style'); 
         if (!style) {
             style = document.createElement('style');
             style.id = 'sliderCarousel-style'; 
         }

         style.textContent = `
            .glo-slider {
                overflow: hidden !important;
                padding: 0 !important;
                position: relative !important;
            }
            .glo-slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .glo-slider__item {
                justify-content: center !important;
                align-items: center !important;
                flex: 0 0 ${this.options.widthSlide}% !important;
            }
        `;
         document.head.appendChild(style); 
     }

     controlSlider() {
         this.prev.addEventListener('click', this.prevSlider.bind(this)); 
         this.next.addEventListener('click', this.nextSlider.bind(this)); 
     }

     prevSlider() {
         if (this.options.infinity || this.options.position > 0) {
             --this.options.position;
             if (this.options.position < 0) {
                 this.options.position = this.options.maxPosition;
             }
             this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
         }
     }

     nextSlider() {
         if (this.options.infinity || this.options.position < this.options.maxPosition) {
             ++this.options.position;
             if (this.options.position > this.options.maxPosition) {
                 this.options.position = 0;
             }
             this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
         }
     }

     addArrow() {
         this.prev = document.createElement('div');
         this.next = document.createElement('div');

         this.prev.className = 'slider-arrow prev';
         const spanPrev = document.createElement('span');
         this.prev.appendChild(spanPrev);

         this.next.className = 'slider-arrow next';
         const spanNext = document.createElement('span');
         this.next.appendChild(spanNext);

         this.main.appendChild(this.prev);
         this.main.appendChild(this.next);
     }

     responseInit() {
         const slidesToShowDefault = this.slidesToShow;
         const allResponse = this.responsive.map(item => item.breakpoint);
         const maxResponse = Math.max(...allResponse);

         const checkResponse = () => {
             const widthWindow = document.documentElement.clientWidth;
             if (widthWindow < maxResponse) {
                 for (let i = 0; i < allResponse.length; i++) {
                     if (widthWindow < allResponse[i]) {
                         this.slidesToShow = this.responsive[i].slidesToShow;
                         this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                         this.addStyle()
                     }
                 }
             } else {
                 this.slidesToShow = slidesToShowDefault;
                 this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                 this.addStyle()
             }
         };

         checkResponse();

         window.addEventListener('resize', checkResponse);

     }

     }

const carousel = new SliderCarousel({
    main: '#services .wrapper',
    wrap: '.services-slider',
    slidesToShow: 5,
    infinity: true,
    responsive: [{
            breakpoint: 1240,
            slidesToShow: 4
        },
        {
            breakpoint: 1024,
            slidesToShow: 3
        },
        {
            breakpoint: 768,
            slidesToShow: 2
        },
        {
            breakpoint: 576,
            slidesToShow: 1
        }
    ]
});

carousel.init();

//фото
    
    const gallerySlider = () => {

        const slider = document.querySelector('.gallery-slider'),
            slide = slider.querySelectorAll('.slide');

        const tabDots = document.createElement('ul');
        tabDots.classList.add('slider-dots');
        slider.appendChild(tabDots);

        let dot;

        for (let i = 0; i < slide.length; i++) {
            let newDot = document.createElement('li');
            newDot.classList.add('dot');
            tabDots.appendChild(newDot);
            if (i === 0) {
                newDot.classList.add('active');
            }
        }

        dot = document.querySelectorAll('.dot');

        const arrowPrev = document.createElement('div');
        const spanPrev = document.createElement('span');
        arrowPrev.classList.add('slider-arrow');
        arrowPrev.classList.add('prev');
        slider.appendChild(arrowPrev);
        arrowPrev.appendChild(spanPrev);

        const arrowNext = document.createElement('div');
        const spanNext = document.createElement('span');
        arrowNext.classList.add('slider-arrow');
        arrowNext.classList.add('next');
        slider.appendChild(arrowNext);
        arrowNext.appendChild(spanNext);

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'active');
            prevSlide(dot, currentSlide, 'active');

            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            nextSlide(slide, currentSlide, 'active');
            nextSlide(dot, currentSlide, 'active');

        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.slider-arrow span, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'active');
            prevSlide(dot, currentSlide, 'active');

            if (target.matches('.slider-arrow.next span')) {
                currentSlide++;
            } else if (target.matches('.slider-arrow.prev span')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'active');
            nextSlide(dot, currentSlide, 'active');

        });
        slider.addEventListener('mouseover', (event) => {
            let target = event.target;
            if (target.matches('.slider-arrow span') || target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            let target = event.target;
            if (target.matches('.slider-arrow span') || target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(3000);

    };
    gallerySlider();

});