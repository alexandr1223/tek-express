$(function () {

    console.log(window.innerWidth)
    // if (window.innerWidth > 990) {
    //     new WOW().init();
    // } else {
    //     document.querySelector('.wow').style.visibility = 'visible'
    // }

    $('img.img-svg').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
        }, 'xml');
    }); 

    function starText() {
        const words = ["Exceeds OSHA and ADA requirements", "No Downtime ", "Super-Fast Installation"];
        let i = 0;
        let timer;

        function typingEffect() {
            let word = words[i].split("");
            var loopTyping = function() {
                if (word.length > 0) {
                    document.getElementById('star__smartText').innerHTML += word.shift();
                } else {
                    setTimeout(() => deletingEffect(), 2000)
                    return false;
                };
                timer = setTimeout(loopTyping, 100);
            };
            loopTyping();
        };

        function deletingEffect() {
            let word = words[i].split("");
            var loopDeleting = function() {
                if (word.length > 0) {
                    word.pop();
                    document.getElementById('star__smartText').innerHTML = word.join("");
                } else {
                    if (words.length > (i + 1)) {
                        i++;
                    } else {
                        i = 0;
                    };
                    typingEffect();
                    return false;
                };
                timer = setTimeout(loopDeleting, 50);
            };
            loopDeleting();
        };
        typingEffect();
    }
    if (document.getElementById('star__smartText')) {
        starText();
    }
    
    function customerText() {
        const words = ["Installs over most existing floor surfaces reducing ", "No Downtime" , "No Floor Mats", "No Maintenance – …No Hussle !"];
        let i = 0;
        let timer;

        function typingEffect() {
            let word = words[i].split("");
            var loopTyping = function() {
                if (word.length > 0) {
                    document.getElementById('customer__smartText').innerHTML += word.shift();
                } else {
                    setTimeout(() => deletingEffect(), 2000)
                    return false;
                };
                timer = setTimeout(loopTyping, 100);
            };
            loopTyping();
        };

        function deletingEffect() {
            let word = words[i].split("");
            var loopDeleting = function() {
                if (word.length > 0) {
                    word.pop();
                    document.getElementById('customer__smartText').innerHTML = word.join("");
                } else {
                    if (words.length > (i + 1)) {
                        i++;
                    } else {
                        i = 0;
                    };
                    typingEffect();
                    return false;
                };
                timer = setTimeout(loopDeleting, 50);
            };
            loopDeleting();
        };
        typingEffect();
    }
    if (document.getElementById('customer__smartText')) {
        customerText();
    }

    function instalationText() {
        const words = ["We are disconnect & Reconnect equipment", "Super-Fast Installation", "Very Compatible Prices", "100% Waterproof, with up to 10 Years Warranty… Seriously !"];
        let i = 0;
        let timer;

        function typingEffect() {
            let word = words[i].split("");
            var loopTyping = function() {
                if (word.length > 0) {
                    document.getElementById('instalation__smartText').innerHTML += word.shift();
                } else {
                    setTimeout(() => deletingEffect(), 2000)
                    return false;
                };
                timer = setTimeout(loopTyping, 100);
            };
            loopTyping();
        };

        function deletingEffect() {
            let word = words[i].split("");
            var loopDeleting = function() {
                if (word.length > 0) {
                    word.pop();
                    document.getElementById('instalation__smartText').innerHTML = word.join("");
                } else {
                    if (words.length > (i + 1)) {
                        i++;
                    } else {
                        i = 0;
                    };
                    typingEffect();
                    return false;
                };
                timer = setTimeout(loopDeleting, 50);
            };
            loopDeleting();
        };
        typingEffect();
    }
    if (document.getElementById('instalation__smartText')) {
        instalationText();
    }


    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if(height > 60){
            $('.header')[0].style.borderBottom = "1px solid #A5A5A5";
            if (document.querySelector('.header__logo')){
                if (document.querySelector('.first__logo')) {
                    document.querySelector('.first__logo').style.cssText = "opacity: 0; z-index: -1; visibility: hidden";
                }
                document.querySelector('.header__logo').style.cssText = "opacity: 1; z-index: 10; visibility: visible";
            }
            if (document.querySelector('.header__mobileLogo')) {
                document.querySelector('.header__mobileLogo').style.cssText = "opacity: 1; z-index: 10; visibility: visible";
            }
        } else{
            if (document.querySelector('.header__logo')){
                if (document.querySelector('.first__logo')) {
                    document.querySelector('.first__logo').style.cssText = "opacity: 1; z-index: 10; visibility: visible";
                }
                document.querySelector('.header__logo').style.cssText = "opacity: 0; z-index: -1; visibility: hidden";
            }
            if (document.querySelector('.header__mobileLogo')) {
                document.querySelector('.header__mobileLogo').style.cssText = "opacity: 0; z-index: -1; visibility: hidden";
            }
            $('.header')[0].style.borderBottom = "none";
        }
        
    });

    function sortMarketplace() {
        let fourElement = document.querySelector('.market-list__sortItem--four'),
        oneElement = document.querySelector('.market-list__sortItem--one'),
        block = document.querySelector('.market-list__block'),
        products = document.querySelectorAll('.market-list__product')

        if (block) {
            oneElement.addEventListener('click', () => {
                oneElement.classList.add('market-list__sortItem--active')
                fourElement.classList.remove('market-list__sortItem--active')
                block.classList.add('market-list__block--active')
                products.forEach(item => {
                    item.classList.add('market-list__product--row')
                })
            })
            fourElement.addEventListener('click', () => {
                oneElement.classList.remove('market-list__sortItem--active')
                fourElement.classList.add('market-list__sortItem--active')
                block.classList.remove('market-list__block--active')
                products.forEach(item => {
                    item.classList.remove('market-list__product--row')
                })
            })
        }
        
    }
    sortMarketplace();

    function addToCartModal() {
        document.querySelectorAll('.market-item__btn').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelector('.market-modal').classList.add('market-modal--active')
            })
        })
        document.querySelector('.market-modal__btn--further').addEventListener('click', () => {
            document.querySelector('.market-modal').classList.remove('market-modal--active')
        })
    }
    addToCartModal();

    $(document).ready(function(){
        $('.review__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 0,
            speed: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,
            focusOnSelect: true,
            prevArrow: "<img src='../images/svg/arrow.svg' class='prev' alt=''>",
            nextArrow: "<img src='../images/svg/arrow.svg' class='next' alt=''>",
            responsive: [
                {
                  breakpoint: 1440,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 990,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: false,
                    speed: 500
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    speed: 500
                  }
                }
            ]
        });
    });

    $(document).ready(function(){
        $('.market-item__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<img src='../images/svg/big-arrow.png' class='prev' alt=''>",
            nextArrow: "<img src='../images/svg/big-arrow.png' class='next' alt=''>",
            responsive: [
                {
                  breakpoint: 1440,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 990,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: false,
                    speed: 500
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    speed: 500
                  }
                }
            ]
        });
    });

    function switchLighter() {
        let darkBtn = document.querySelector('.switch__dark'),
            lightBtn = document.querySelector('.switch__light'),
            switchBlock = document.querySelector('.switch'),
            ceramic = document.querySelector('.switch__ceramic'),
            ecotek = document.querySelector('.switch__ecotek'),
            readmore = document.querySelector('.switch__readmore'),
            line = document.querySelector('.switch__line');

        if (darkBtn) {
            darkBtn.addEventListener('click', () => {
                lightBtn.style.display = 'block';
                darkBtn.style.display = 'none';
                switchBlock.classList.add('white-mode');
                ceramic.style.color = '#9F9F9F';
                ecotek.style.color = '#323232';
                readmore.style.color = "#323232";
                line.style.background = '#FE0182';
            })
    
            lightBtn.addEventListener('click', () => {
                lightBtn.style.display = 'none';
                darkBtn.style.display = 'block';
                switchBlock.classList.remove('white-mode');
                ceramic.style.color = '#323232';
                ecotek.style.color = '#636363';
                readmore.style.color = "#ffffff";
                line.style.background = '#323232';
            })
        }
    }
    switchLighter();

    function menuOpen() {
        document.querySelector('.header__burger').addEventListener('click', () => {
            document.querySelector('.header__nav').style.cssText = "left: 0px"
        })
        document.querySelector('.header__close').addEventListener('click', () => {
            document.querySelector('.header__nav').style.cssText = "left: -100%"
        })
    }
    menuOpen();

})