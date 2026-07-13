const text = [
    "Software Developer",
    "Data Science",
    "UI/UX Designer",
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {

const element = document.getElementById("typing");

if (!element) return;

const current = text[index];

if (!isDeleting) {

    element.innerHTML = current.substring(0, charIndex++);

    if (charIndex > current.length) {

        isDeleting = true;

        setTimeout(type, 1200);

        return;

    }


    }else{

        element.innerHTML = current.substring(0,charIndex--);

        if(charIndex < 0){

            isDeleting=false;

            index++;

            if(index>=text.length){

                index=0;

            }

        }

    }

    setTimeout(type,isDeleting?50:100);

}

type();

/*=========================
    SKILLS FILTER
=========================*/

const filterButtons = document.querySelectorAll(".filter-buttons button");
const skillItems = document.querySelectorAll(".skill-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        skillItems.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});

/*==============================
        COUNTER
==============================*/

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 80));

            const updateCounter = () => {

                current += increment;

                if(current >= target){

                    counter.innerText = target + "+";

                }else{

                    counter.innerText = current;

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

            observer.unobserve(counter);

        }

    });

},{

    threshold:0.6

});

counters.forEach(counter=>observer.observe(counter));


