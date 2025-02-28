



// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Typing Effect
    const texts = ["دقة", "تحمل", "اعتمادية", "تفكر", "خدمات", "امان",
        "استدامة", "صيانة",
    ];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;
    const typingSpeed = 100; // speed of typing
    const deletingSpeed = 50; // speed of deleting

    function type() {
        const textDisplay = document.getElementById('text');
        
        if (isDeleting) {
            currentText = texts[index].substring(0, charIndex--);
        } else {
            currentText = texts[index].substring(0, charIndex++);
        }

        textDisplay.textContent = currentText;

        if (!isDeleting && charIndex === texts[index].length) {
            setTimeout(() => isDeleting = true, 1250); // pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, speed);
    }

    setTimeout(type, typingSpeed);

    // Scroll Animation
    const animText = document.getElementById('animText');
    const container = document.querySelector('.containerr');
    let lastScrollTop = 0;

    container.addEventListener('scroll', () => {
        let scrollTop = container.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 0) {
            // down
            animText.classList.remove('animateBack');
            animText.classList.add('animate');
        } else if (scrollTop < lastScrollTop && scrollTop < container.scrollHeight) {
            // up
            animText.classList.remove('animate');
            animText.classList.add('animateBack');
        }

        lastScrollTop = scrollTop;
    });

    // // Smooth Scroll
    // const scrollToSecond = document.getElementById('scrollToSecond');
    // const scrollToFirst = document.getElementById('scrollToFirst');
    // const secondSection = document.getElementById('second-section');

    // scrollToSecond.addEventListener('click', () => {
    //     container.scrollTo({
    //         top: secondSection.offsetTop,
    //         behavior: 'smooth'
    //     });
    // });

    // scrollToFirst.addEventListener('click', () => {
    //     container.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // });

    // container.addEventListener('wheel', function(event) {
    //     event.preventDefault();
    //     this.scrollTop = 0;
    // });

    // No Scroll on Specific Page
    // if (window.location.pathname === '/index.html') {
    //     document.body.classList.add('no-scroll');
    // } else {
    //     document.body.classList.remove('no-scroll');
    // }

    // Mobile Menu Toggle
    const headerEmblem2 = document.querySelector('img.headerEmblem2');
    const phoneMenu = document.querySelector('.phone-menu');
    const closeMenuButton = document.querySelector('.close-menu');

    headerEmblem2.addEventListener('click', () => {
        phoneMenu.classList.add('show');
        document.body.classList.add('no-scroll');
    });

    closeMenuButton.addEventListener('click', () => {
        phoneMenu.classList.remove('show');
        document.body.classList.remove('no-scroll');
    });


    document.addEventListener("DOMContentLoaded", function() {
        console.log("DOM fully loaded and parsed");
        var menu = document.getElementById("phoneMenu");
        var overlay = document.getElementById("overlay");
        var closeMenu = document.querySelector(".close-menu");
    
        document.querySelector(".headerEmblem2").addEventListener("click", function() {
            menu.style.display = "block";
            overlay.style.display = "block";
            console.log("Menu opened");
        });
    
        closeMenu.addEventListener("click", function() {
            menu.style.display = "none";
            overlay.style.display = "none";
            console.log("Menu closed");
        });
    
        overlay.addEventListener("click", function() {
            menu.style.display = "none";
            overlay.style.display = "none";
            console.log("Overlay clicked, menu closed");
        });
    });
    

    // CTA Box Click Handling
    document.querySelectorAll('.categories-box').forEach(box => {
        box.addEventListener('click', () => {
            const channel = box.querySelector('p').textContent.toLowerCase();
            switch (channel) {
                case 'instagram':
                    window.open('https://www.instagram.com/yourusername', '_blank');
                    break;
                case 'linkedin':
                    window.open('https://www.linkedin.com/in/yourusername', '_blank');
                    break;
                case 'email':
                    window.location.href = 'mailto:your-email@example.com';
                    break;
                default:
                    break;
            }
        });
    });

    // Animation End Handling
    document.getElementById('animText').addEventListener('animationend', function() {
        if (this.classList.contains('animateBack')) {
            this.style.top = '30%';
            this.style.left = '50%';
            this.style.transform = 'translate(-50%, -50%)';
        }
    });
});
