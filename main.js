/* 
=================================
        Table of Contents
=================================

=================================
        Universal Stuff
=================================

1. Global variables
2. Dynamic scroll indicator at bottom of screen
3. Smooth scrolling to sections on button and link click/tap

==================================
          Mobile Design 
==================================

4. Mobile design navigation menu
5. Mobile events section animations

==================================
          Desktop Design
==================================

6. Navigation bar color transition
7. Mission card description on hover
8. E-board picture and description carousel
9. Events tooltip show on click
10. Parallax scrolling effects

*/

// wait until the document is fully loaded to load the javascript code
$(document).ready(function() {

    /* 
    ---------------------
    1. Global variables
    ---------------------
    */
    
    // website sections
    const navbar = document.querySelector('nav');
    const homepage = document.querySelector('header');
    const about = document.querySelector('#about');
    const mission = document.querySelector('#mission');
    const eboard = document.querySelector('#e-board');
    const projects = document.querySelector('#projects');
    const contactUs = document.querySelector('#contact-us');

    // get dimensions of user's viewport
    const viewportHeight = document.documentElement.clientHeight;
    const viewportWidth = document.documentElement.clientWidth;

    // desktop media query
    let desktop = window.matchMedia('(min-width: 768px)');

    /* 
    -------------------------------------------------
    2. Dynamic scroll indicator at bottom of screen
    -------------------------------------------------
    */

    // scroll indicator at bottom of screen
    const scrollIndicatorText = document.querySelector('.scroll-indicator');
    const scrollIndicatorArrow = document.querySelector('.arrow');

    // separate options for home page so scroll indicator changes to white when 90% of the homepage is on screen
    const homeIndicatorOptions = {
        threshold: 0.90
    };

    const homeIndicator = new IntersectionObserver((entries, homeIndicator) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // change color of scroll indicator and link to about section
                scrollIndicatorText.style.color = 'white';
                scrollIndicatorArrow.style.borderColor = 'white';
                scrollIndicatorArrow.href = '#about';
            }
        });
    }, homeIndicatorOptions);

    homeIndicator.observe(homepage);

    /* separate options for all other sections so scroll indicator is observed when at least 1% of the corresponding section is
    on screen */
    const sectionOptions = {
        threshold: 0.01
    };

    const scrollIndicator = new IntersectionObserver((sections, scrollIndicator) => {
        sections.forEach(section => {
            // First, check if the user is on a desktop window size or mobile
            if (desktop.matches) {
            // user is on desktop
                if (section.isIntersecting) {
                    // Figure out what section is currently being observed
                    switch (section.target.id) {
                        case 'about':
                            // change color of scroll indicator and link to the next section
                            scrollIndicatorText.style.color = 'black';
                            scrollIndicatorArrow.style.borderColor = 'black';
                            scrollIndicatorArrow.href = '#mission';
                            break;
                        case 'mission':
                            scrollIndicatorText.style.color = 'black';
                            scrollIndicatorArrow.style.borderColor = 'black';
                            scrollIndicatorArrow.href = '#e-board';
                            break;
                        case 'e-board':
                            scrollIndicatorText.style.color = 'black';
                            scrollIndicatorArrow.style.borderColor = 'black';
                            scrollIndicatorArrow.href = '#events';
                            break;
                        case 'events':
                            scrollIndicatorText.style.color = 'white';
                            scrollIndicatorArrow.style.borderColor = 'white';
                            scrollIndicatorArrow.href = '#projects';
                            break;
                        case 'projects':
                            scrollIndicatorText.style.color = 'white';
                            scrollIndicatorText.style.opacity = '1';
                            scrollIndicatorArrow.style.borderColor = 'white';
                            scrollIndicatorArrow.style.opacity = '1';
                            scrollIndicatorArrow.href = '#contact-us';
                            break;
                        case 'contact-us':
                            scrollIndicatorText.style.opacity = '0';
                            scrollIndicatorArrow.style.opacity = '0';
                    }
                }
            }
            else {
                // user is on mobile
                if (section.isIntersecting) {
                    // Figure out what section is currently being observed
                    switch (section.target.id) {
                        case 'about':
                            // change color of scroll indicator and link to the next section
                            scrollIndicatorText.style.color = 'black';
                            scrollIndicatorArrow.style.borderColor = 'black';
                            scrollIndicatorArrow.href = '#mission';
                            break;
                        case 'mission':
                            scrollIndicatorText.style.color = 'black';
                            scrollIndicatorArrow.style.borderColor = 'black';
                            scrollIndicatorArrow.href = '#e-board';
                            break;
                        case 'e-board':
                            scrollIndicatorText.style.color = 'black';
                            scrollIndicatorArrow.style.borderColor = 'black';
                            scrollIndicatorArrow.href = '#events';
                            break;
                        case 'events':
                            scrollIndicatorText.style.color = 'black';
                            scrollIndicatorArrow.style.borderColor = 'black';
                            scrollIndicatorArrow.href = '#projects';
                            break;
                        case 'projects':
                            scrollIndicatorText.style.color = 'black';
                            scrollIndicatorText.style.opacity = '1';
                            scrollIndicatorArrow.style.borderColor = 'black';
                            scrollIndicatorArrow.style.opacity = '1';
                            scrollIndicatorArrow.href = '#contact-us';
                            break;
                        case 'contact-us':
                            scrollIndicatorText.style.opacity = '0';
                            scrollIndicatorArrow.style.opacity = '0';
                    }
                }
            }
        });
    }, sectionOptions);
    
    // call intersection observer for each section of the website to update scroll indicator at bottom of screen
    scrollIndicator.observe(about);
    scrollIndicator.observe(mission);
    scrollIndicator.observe(eboard);
    scrollIndicator.observe(events);
    scrollIndicator.observe(projects);
    scrollIndicator.observe(contactUs);

    /* 
    --------------------------------------------------------------
    3. Smooth scrolling to sections on button and link click/tap
    --------------------------------------------------------------
    */
    const scrollButton = $('.smoothScroll');

    scrollButton.click(function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        // how much time it takes to smooth scroll in milliseconds
        }, 1500);
    });

    /*
    ==================================
              Mobile Design 
    ==================================
    */

    /* 
    ----------------------------------
    4. Mobile design navigation menu
    ----------------------------------
    */

    const hamburgerMenuContainer = document.querySelector('.hamburger-menu-container');
    const navbarContainer = document.querySelector('.navbar-container');
    const hamburgerExitBttn = document.querySelector('.navigation-menu-exit-wrapper');
    const navbarLinks = document.querySelectorAll('.navbar-link');

    // open the hamburger navigation menu
    hamburgerMenuContainer.addEventListener('touchend', () => {
        navbarContainer.classList.add('navbar-container-active');
    });

    // exit the hamburger navigation menu after tapping exit button or clicking a navigation link
    hamburgerExitBttn.addEventListener('touchend', () => {
        navbarContainer.classList.remove('navbar-container-active');
    });
    navbarLinks.forEach(navbarLink => {
        navbarLink.addEventListener('touchend', () => {
            navbarContainer.classList.remove('navbar-container-active');
        });
    });

    /* 
    -------------------------------------
    5. Mobile events section animations
    -------------------------------------
    */

    // all the mobile event descriptions
    const eventDescs = document.querySelectorAll('.mobile-events-desc-container');
    const mobileCSSPI = document.querySelector('#mobile-csspi');
    const mobileWebDesign = document.querySelector('#mobile-web-design');
    const mobileSpeaker = document.querySelector('#mobile-speaker');
    const mobileRecruiter = document.querySelector('#mobile-recruiter');
    const mobileWorkshops = document.querySelector('#mobile-workshops');

    // mobile events background that displays when button is tapped and all the mobile events section buttons
    const mobileEventsBackground = document.querySelector('.events-mobile-background');
    const mobileEventsButtons = document.querySelectorAll('.mobile-events-button-container');

    // different colors to choose from for mobile events background when clicking on events
    const recruiterColor = 'rgba(103, 121, 255, 0.8)';
    const csspiColor = 'rgba(244, 143, 143, 0.8)';
    const speakerColor = 'rgba(40, 240, 140, 0.8)';
    const workshopsColor = 'rgba(255, 177, 77, 0.8)';
    const webDesignColor = 'rgba(167, 0, 255, 0.8)';

    // initialize variable now to set active container later
    let activeEventsItemContainer; 

    mobileEventsButtons.forEach(button => {
        // when the button is tapped
        button.addEventListener('touchend', () => {
            mobileEventsBackground.classList.remove('events-mobile-background-inactive');

            // figure out which color and event description to display on click depending on id of button
            switch (button.id) {
                case 'first-mobile-event':
                    mobileEventsBackground.style.backgroundColor = csspiColor;
                    mobileEventsBackground.classList.add('events-mobile-background-active');
                    mobileCSSPI.classList.add('mobile-events-desc-container-active');
                    break;
                case 'second-mobile-event':
                    mobileEventsBackground.style.backgroundColor = speakerColor;
                    mobileEventsBackground.classList.add('events-mobile-background-active');
                    mobileSpeaker.classList.add('mobile-events-desc-container-active');
                    break;
                case 'third-mobile-event':
                    mobileEventsBackground.style.backgroundColor = workshopsColor;
                    mobileEventsBackground.classList.add('events-mobile-background-active');
                    mobileWorkshops.classList.add('mobile-events-desc-container-active');
                    break;
                case 'fourth-mobile-event':
                    mobileEventsBackground.style.backgroundColor = recruiterColor;
                    mobileEventsBackground.classList.add('events-mobile-background-active');
                    mobileRecruiter.classList.add('mobile-events-desc-container-active');
                    break;
                case 'fifth-mobile-event':
                    mobileEventsBackground.style.backgroundColor = webDesignColor;
                    mobileEventsBackground.classList.add('events-mobile-background-active');
                    mobileWebDesign.classList.add('mobile-events-desc-container-active');
                    break;
            }
            // set active item container
            activeEventsItemContainer = document.querySelector('.mobile-events-desc-container-active');
        });
    });

    // hide event description again after tapping on the transparent background or the event description itself
    mobileEventsBackground.addEventListener('touchend', () => {
        // fade out background
        mobileEventsBackground.classList.remove('events-mobile-background-active');
        mobileEventsBackground.classList.add('events-mobile-background-inactive');
        // fade out active event item container
        activeEventsItemContainer.classList.remove('mobile-events-desc-container-active');
        activeEventsItemContainer.classList.add('mobile-events-desc-container-inactive');
    });
    eventDescs.forEach(eventDesc => {
        eventDesc.addEventListener('touchend', () => {
            // fade out background
            mobileEventsBackground.classList.remove('events-mobile-background-active');
            mobileEventsBackground.classList.add('events-mobile-background-inactive');
            // fade out active event item container
            activeEventsItemContainer.classList.remove('mobile-events-desc-container-active');
            activeEventsItemContainer.classList.add('mobile-events-desc-container-inactive');
        });
    });

    /*
    ==================================
              Desktop Design
    ==================================
    */
    
    /* 
    ------------------------------------
    6. Navigation bar color transition
    ------------------------------------
    */

    const homepageOptions = {
    // set the margin for when exactly the navigation bar changes color
    rootMargin: '-10px'
    };

    const navbarOnScroll = new IntersectionObserver((entries, navbarOnScroll) => {
        entries.forEach(entry => {
            // if the homepage is not on the viewport and the user is on desktop window size
            if (!entry.isIntersecting && desktop.matches) {
                navbar.classList.add('navbar-scrolled');
            } 
            else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }, homepageOptions);

    // desktop media query event listener so navigation bar animation only occurs on desktop window sizes
    desktop.addEventListener('resize', navbarOnScroll.observe(homepage));

    /* 
    --------------------------------------
    7. Mission card description on hover
    --------------------------------------
    */

    const missionCard = document.querySelectorAll('.mission-card');

    missionCard.forEach(card => {
        // select all elements to be animated inside specific mission index card
        const cardTitle = card.querySelector('.mission-card-title');
        const cardDesc = card.querySelector('.mission-card-description');
        const cardImg = card.querySelector('.mission-card-image');

        // when the card item is hovered over
        card.addEventListener('mouseover', function() {
            cardTitle.classList.add('mission-card-title-hover');
            cardDesc.classList.add('mission-card-description-hover');
            /* check if the first card is selected because it requires different alignment to
            match other cards */
            if (cardImg.classList.contains('first-mission-card-image')) {
                cardImg.classList.add('first-mission-card-image-hover');
            }
            else {
                cardImg.classList.add('mission-card-image-hover');
            }
        });

        // when the cursor leaves the card item
        card.addEventListener('mouseout', function() {
            cardTitle.classList.remove('mission-card-title-hover');
            cardDesc.classList.remove('mission-card-description-hover');
            cardImg.classList.remove('mission-card-image-hover');
            /* check if the first card is selected because it requires different alignment to
            match other cards */
            if (cardImg.classList.contains('first-mission-card-image')) {
                cardImg.classList.remove('first-mission-card-image-hover');
            }
            else {
                cardImg.classList.remove('mission-card-image-hover');
            }
        });
    });
    
    /* 
    ============================================
    8. E-board picture and description carousel
    ============================================
    */

    const eboardDescContainer = document.querySelector('.e-board-description-container');
    const eboardDescriptions = document.querySelectorAll('.e-board-description');
    const eboardCarousel = document.querySelector('.e-board-gallery');
    const eboardPhotos = document.querySelectorAll('.e-board-picture');
    const leftBttn = document.querySelector('#e-board-gallery-left-button');
    const rightBttn = document.querySelector('#e-board-gallery-right-button');

    // counter and size variables for array eboardPhotos
    let counter = 0;
    let photoSize = eboardPhotos[0].clientWidth;
    console.log(photoSize);
    let paragraphSize = eboardDescriptions[0].clientWidth;

    // event listeners to buttons
    leftBttn.addEventListener('click', ()=> {
        // stop the translation when clicking left button when user has reached the beginning
        if (counter >= 1) {
            // remove active class and add inactive class to the current image and paragraph
            eboardPhotos[counter].classList.add('e-board-picture-inactive');
            eboardPhotos[counter].classList.remove('e-board-picture-active');
            eboardDescriptions[counter].classList.add('e-board-description-inactive');
            eboardDescriptions[counter].classList.remove('e-board-description-active');

            // translate to the previous picture and paragraph
            counter--;
            eboardCarousel.style.transform = `translateX(${-photoSize * counter}px)`
            eboardDescContainer.style.transform = `translateX(${-paragraphSize * counter}px)`

            /* increment counter and add the active photo class and remove the inactive class from the
            element */
            eboardPhotos[counter].classList.add('e-board-picture-active');
            eboardPhotos[counter].classList.remove('e-board-picture-inactive');
            eboardDescriptions[counter].classList.add('e-board-description-active');
            eboardDescriptions[counter].classList.remove('e-board-description-inactive');
        }
    });

    rightBttn.addEventListener('click', ()=> {
        // stop the translation if clicking right button when user has reached the end
        if (counter <= eboardDescriptions.length - 2) {
            // remove active class and add inactive class to the previous image
            eboardPhotos[counter].classList.add('e-board-picture-inactive');
            eboardPhotos[counter].classList.remove('e-board-picture-active');
            eboardDescriptions[counter].classList.add('e-board-description-inactive');
            eboardDescriptions[counter].classList.remove('e-board-description-active');

            // translate to the next picture
            eboardCarousel.style.transform = `translateX(${-photoSize * (counter + 1)}px)`
            eboardDescContainer.style.transform = `translateX(${-paragraphSize * (counter + 1)}px)`

            /* increment counter and add the active photo class and remove the inactive class from the
            element */
            counter++;
            eboardPhotos[counter].classList.add('e-board-picture-active');
            eboardPhotos[counter].classList.remove('e-board-picture-inactive');
            eboardDescriptions[counter].classList.add('e-board-description-active');
            eboardDescriptions[counter].classList.remove('e-board-description-inactive');
        }
    });

    /*
    ================================
    9. Events tooltip show on click
    ================================
    */

    $('.events-item').click(function() {
        eventsItem = $(this);
        // this works because the event tooltip div is the only sibling of the event item title
        let tooltip = $(this).siblings();

        if (tooltip.hasClass('above-tooltip')) {
            // the event tooltip is supposed to show above the event item
            if (tooltip.hasClass('above-tooltip-click')) {
                // the event tooltip is already visible on screen and the event item has been clicked on
                eventsItem.css({'color':'var(--blue)'});
                tooltip.removeClass('above-tooltip-click');
            }
            else {
                // the event text has not been clicked on and tooltip is not on screen
                eventsItem.css({'color':'white'});
                tooltip.addClass('above-tooltip-click');
            }
        }
        else {
            // the tooltip is supposed to translate down below the text
            if (tooltip.hasClass('below-tooltip-click')) {
                // tooltip is already on screen after clicking event text
                eventsItem.css({'color':'var(--blue)'});
                tooltip.removeClass('below-tooltip-click');
            }
            else {
                // the event text has not been clicked on and tooltip is not on screen
                eventsItem.css({'color':'white'});
                tooltip.addClass('below-tooltip-click');
            }
        }
    });

    $(document).scroll(function() {

        // get current scrollbar location
        let scrollbarLocation = window.pageYOffset;

        /* 
        ===============================
        10. Parallax scrolling effects
        ===============================
        */

        /* 
        ========================
         About Section Parallax
        ========================
        */
        const aboutOffset = about.getBoundingClientRect();
        const aboutHeight = about.offsetHeight;
        const aboutTitle = document.querySelector('.about-title');
        const blueLine = document.querySelector('.about-blue-line');
        const aboutDesc = document.querySelector('.about-desc-wrapper');
        const typingComputer = document.querySelector('.about-computer');

        const parallaxOptions = {
        };

        const aboutObserver = new IntersectionObserver((entries, aboutObserver) => {
            entries.forEach(entry => {
                // make sure parallax effects only occur when the scroll position is near the page
                if (entry.isIntersecting) {
                    /*  - the math below basically simplifies to making sure the parallax is most obvious only when
                    the elements are on viewport 
                    - the sign of the number being multiplied is important:
                        - negative for translating up while scrolling
                        - positive for translating down while scrolling
                    */
                    aboutTitle.style.transform = 
                            `translateY(${scrollbarLocation / (aboutOffset.top + aboutHeight) * -150 + 150}px)`;
                    aboutDesc.style.transform = 
                            `translateY(${scrollbarLocation / (aboutOffset.top + aboutHeight) * -100 + 100}px)`;

                    if (desktop.matches) {
                        // do these animations only for desktop
                        // translate blue line in desktop
                        blueLine.style.transform = 
                            `translateY(${scrollbarLocation / (aboutOffset.top + aboutHeight) * -150 + 150}px)`;
                        blueLine.style.height = `${viewportHeight + scrollbarLocation * 0.1}vh`;
                        // scale the computer gif up if scroll position above section
                        if (aboutOffset.top >= 0) {
                            typingComputer.style.transform =
                                `translateX(${scrollbarLocation / (aboutOffset.top + aboutHeight) * 150 - 150}px)
                                scale(${scrollbarLocation / (aboutOffset.top + aboutHeight) * 0.5 + 0.5})`
                        }
                        /* make the computer gif smaller up until the user has scrolled past the section by 25% of their viewport
                        height */
                        else if (aboutOffset.top >= -0.75 * viewportHeight) {
                            typingComputer.style.transform =
                                `translateX(${scrollbarLocation / (aboutOffset.top + aboutHeight) * -150 + 150}px)
                                scale(${scrollbarLocation / (aboutOffset.top + aboutHeight) * -0.5 + 1.5})`;
                        }
                        else {
                            /*reset element styles so flow of the page isn't interrupted by elements getting translated to extreme
                            values */
                            typingComputer.style.transform =
                                `translateX(${-250}px)
                                scale(${0.5})`
                            aboutTitle.style.transform = 'translateY(-150px)';
                            blueLine.style.transform = 'translateY(-150px)';
                            blueLine.style.height = '100vh';
                            aboutDesc.style.transform = 'translateY(-100px)';
                        }
                    }
                    else {
                        // do these separate parallax effects only for mobile
                        typingComputer.style.transform = 
                            `translateY(${scrollbarLocation / (aboutOffset.top + aboutHeight) * -150 + 150}px)`;
                    }
                }
            });
        }, parallaxOptions);

        aboutObserver.observe(about);

        /* 
        ==========================
         Mission Section Parallax
        ==========================
        */
        const missionHeight = mission.offsetHeight;
        const missionOffset = mission.getBoundingClientRect();
        const missionTitle = document.querySelector('.mission-title');
        const cardColumn1 = document.querySelector('#mission-card-column-1');
        const cardColumn2 = document.querySelector('#mission-card-column-2');
        const cardColumn3 = document.querySelector('#mission-card-column-3');

        const missionObserver = new IntersectionObserver((entries, missionObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && desktop.matches) {
                    // these animations only run when user is on a desktop window size and mission section is on screen
                    // effects when scroll position is above the section
                    missionTitle.style.transform = 
                        `translateY(${scrollbarLocation / (missionOffset.top + missionHeight) * -175 + 350}px)`;
                    cardColumn1.style.transform = 
                        `translateY(${scrollbarLocation / (missionOffset.top + missionHeight) * -200 + 400}px)`;
                    cardColumn2.style.transform = 
                        `translateY(${scrollbarLocation / (missionOffset.top + missionHeight) * -150 + 300}px)`;
                    cardColumn3.style.transform = 
                        `translateY(${scrollbarLocation / (missionOffset.top + missionHeight) * -100 + 200}px)`;
                }
                else {
                    missionTitle.style.transform = 'translateY(0px)';
                }
            });
        }, parallaxOptions);

        missionObserver.observe(mission);

        /* 
        ==========================
         E-board Section Parallax
        ==========================
        */

        const eboardHeight = eboard.offsetHeight;
        const eboardOffset = eboard.getBoundingClientRect();
        const eboardTitle = document.querySelector('.e-board-title');
        const eboardDesc = document.querySelector('.e-board-description');
        const eboardGallery = document.querySelector('.e-board-gallery-container');

        const eboardObserver = new IntersectionObserver((entries, eboardObserver) => {
            entries.forEach(entry => {
                
            });
        }, parallaxOptions);



    });

});





    