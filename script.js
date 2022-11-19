//Mouse Circle
const mouseCircle = document.querySelector('.mouse-circle')
const mouseDot = document.querySelector('.mouse-dot')

const mouseCirclefn = (x, y) => {
    mouseCircle.style.cssText = `top:${y}px;left:${x}px; opacity:1`;
    mouseDot.style.cssText = `top:${y}px;left:${x}px; opacity:1`;
};
//End of Mouse Circle

//Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;
const z = 100;
//Animated Circles
const animateCircles = (e, x, y) => {
    if (x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `${z}px`;
        });
        mainImg.style.left = `${z}px`;
    } else if (x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-${z}px`;
        });
        mainImg.style.left = `-${z}px`;
    }

    if (y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `${z}px`;
        });
        mainImg.style.top = `${z}px`;
    } else if (y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-${z}px`;
        });
        mainImg.style.top = `-${z}px`;
    }

    mX = e.clientX;
    mY = e.clientY;
};
//End of Animated Circles
document.body.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCirclefn(x, y);
    animateCircles(e, x, y);
})

document.body.addEventListener('mouseleave', () => {
    mouseCircle.style.opacity = '0';
    mouseDot.style.opacity = '0';
})

//Mai Button
const mainBtns = document.querySelectorAll(".main-btn")

mainBtns.forEach(btn => {
    let ripple;
    btn.addEventListener("mouseenter", (e) => {
        const left = e.clientX - e.target.getBoundingClientRect().left;
        console.log(left);
        const top = e.clientY - e.target.getBoundingClientRect().top;
        console.log(top);

        ripple = document.createElement("div")
        ripple.classList.add("ripple");
        ripple.style.left = `${left}px`
        ripple.style.top = `${top}px`
        btn.prepend(ripple);

    })

    btn.addEventListener("mouseleave", () => {
        btn.removeChild(ripple);
    })
})


//End of Main Button
//About me text
const aboutMeText = document.querySelector(".about-me-text")
const aboutMeTextContent = "I am a Software Developer currently working as a Machine Learning Engineer at Saaragh Technologies,a Machine Learning Startup. I was previously a Software Developer Intern at Intel Corporation. I am constantly willing to learn and understand new technologies";
Array.from(aboutMeTextContent).forEach((char) => {

    const span = document.createElement("span");
    span.textContent = char;
    aboutMeText.appendChild(span);

    span.addEventListener("mouseenter", (e) => {
        e.target.style.animation = "aboutMeTextAnim 10s Infinite";
    })

});
//End of About me text
//Projects
const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
        project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight - project.offsetHeight + 20}px`;
    });

    project.addEventListener('mouseleave', () => {

        project.firstElementChild.style.top = "2rem";

    })
})

//Github link for projects
project.addEventListener('click', () => {
    //const imgWrapper = document.createElement('div');
    //imgWrapper.className = "project-img-wrapper";
    //container.appendChild(imgWrapper)
    console.log("clicked");
    window.open("www.google.com", "_blank");
})
//End of github link for projects
//End of Projects