const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {

        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute("id");
            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
            ) {
                document.querySelector(".menu-navbar a[href*=" + sectionId + "]").classList.add("active-menu");
            } else {
                document.querySelector(".menu-navbar a[href*=" + sectionId + "]").classList.remove(
                    "active-menu");
            }
        });
    }

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").classList.add("nav-scroll");
            document.getElementById("navbar").classList.add("shadow-lg");
            document.getElementById("list-menu").classList.add("list-menu-scroll");
        } else {
            document.getElementById("navbar").classList.remove("nav-scroll");
            document.getElementById("navbar").classList.remove("shadow-lg");
            document.getElementById("list-menu").classList.remove("list-menu-scroll");
        }
    }
