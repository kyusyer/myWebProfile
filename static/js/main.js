
function switchPage(pageId) {
    // console.log(pageId)

    const sections = document.querySelectorAll("section")
    sections.forEach(sect => {
        sect.style.display = "none";
        
        if (sect.classList.contains(pageId)) {
            sect.style.display = "block";
        }
    })

}

document.addEventListener("DOMContentLoaded", function () {


    // switchPage("Home");
    navigatePage();
    let intervalId = setInterval(
        playShootingStar, 2000
    )
    


})

function navigatePage() {
    document.addEventListener("click", (event) => {

        let elTargetClick = event.target
        // console.log(elTargetClick.classList)
        if (elTargetClick.classList.contains("nav-menu")) {
            switchPage(elTargetClick.id)
        }

    })
}

function playShootingStar(){
    let randomNumb = Math.floor(Math.random()*1000+1);
    // console.log(randomNumb)
    const elHomeSect = document.querySelector(".home");
    if (elHomeSect.style.display !== "none"){
        const elShooting = document.querySelector(".shooting");
        elShooting.style.left = `${randomNumb}px`;
        elShooting.style.animationPlayState = "running";

    }

}