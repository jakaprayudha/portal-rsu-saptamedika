function initApp() {

    /* =========================
       MOBILE MENU
    ========================= */

    const menu = document.getElementById("menu");

    const toggle = document.getElementById("mobileToggle");


    if (menu && toggle) {

        toggle.addEventListener("click", () => {

            menu.classList.toggle("open");

        });


        document.querySelectorAll(".menu a").forEach((link) => {

            link.addEventListener("click", () => {

                menu.classList.remove("open");

            });

        });

    }


    /* =========================
       ACTIVE MENU SCROLL
    ========================= */

    const sections = [
        ...document.querySelectorAll("main section[id]")
    ];

    const navLinks = [
        ...document.querySelectorAll(".menu a")
    ];


    window.addEventListener("scroll", () => {

        let current = "home";

        sections.forEach((section) => {

            if (
                window.scrollY >= section.offsetTop - 130
            ) {

                current = section.id;

            }

        });


        navLinks.forEach((link) => {

            link.classList.toggle(

                "active",

                link.getAttribute("href") === "#" + current

            );

        });

    });


    /* =========================
       SCROLL ANIMATION
    ========================= */

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    document
        .querySelectorAll(".reveal")
        .forEach((el) => observer.observe(el));


    /* =========================
       APPOINTMENT FORM
    ========================= */

    const appointmentForm =
        document.getElementById("appointmentForm");


    if (appointmentForm) {

        appointmentForm.addEventListener(
            "submit",
            (e) => {

                e.preventDefault();


                const toast =
                    document.getElementById("toast");


                if (toast) {

                    toast.classList.add("show");


                    setTimeout(() => {

                        toast.classList.remove("show");

                    }, 3500);

                }


                e.target.reset();

            }
        );

    }

}


/* =========================================
   JALANKAN SETELAH HEADER & FOOTER MASUK
========================================= */

document.addEventListener(
    "componentsLoaded",
    initApp
);