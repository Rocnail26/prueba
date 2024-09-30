const $ = (node) => document.querySelector(node)
const sectionContacts = $("#section-contacts")
const header = $(".header")
const main = $(".main")
const navLogo = $(".nav_logo")
const navLinks = $(".nav_linkContainer")
const carousel = $(".carousel-inner")
const root = document.documentElement;
const mainColor = getComputedStyle(root).getPropertyValue('--primary-color');


const playVideo = (video) => {
    if(video.paused){
        video.style.display = "block"
        video.play()
        const containervideo =  video.parentElement
        containervideo.querySelector(".fa-solid").style = "block"
        stopVideo(containervideo)
}
}

const stopVideo = (containerVideo) => {
    containerVideo.addEventListener("click", (e) => {
        e.stopPropagation() 
       const video = containerVideo.querySelector(".video-container_video")
       const icon = containerVideo.querySelector(".fa-solid")
       console.log(icon)
        video.pause()
        video.style.display = "none"
        icon.style.display = "none"
    })
}

window.addEventListener("scroll", (e) => {
    const highSectionContacts =sectionContacts.clientHeight
    const rangeToHeaderWhite =  header.clientHeight + main.clientHeight
    
    if (window.scrollY > highSectionContacts) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100%'; 
        header.style.padding = "1rem"// Asegúrate de que el nav ocupe todo el ancho
    } else {
        header.style.position = 'static'; // Vuelve a la posición original cuando no se cumple la condición
    }
    
    if(window.scrollY > rangeToHeaderWhite){
        header.style.backgroundColor = mainColor
        navLogo.style.filter = "none"
         navLinks.style.color = "white"
    }else{
        header.style.backgroundColor = "white"
        navLogo.style.filter = "invert(18%) sepia(71%) saturate(2294%) hue-rotate(170deg) brightness(50%) contrast(170%)"
        navLinks.style.color = mainColor
    }

})

carousel.addEventListener("click", (e) => {

    if(e.target.classList.contains("fa-solid")){
      const video = e.target.closest(".carousel-item").querySelector(".video-container_video")
      playVideo(video)
    }

})


