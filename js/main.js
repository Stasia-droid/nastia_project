let acc = document.getElementsByClassName("accordion")
let i 
         
for (i = 0; i < acc.length; i++) { 
        acc[i].addEventListener("click", function() { 
        this.classList.toggle("active") 
        let panel = this.nextElementSibling 
        if (panel.style.maxHeight){ 
            panel.style.maxHeight = null 
        } else { 
            panel.style.maxHeight = panel.scrollHeight + "px"
        }  
    }) 
}
$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots:false,
        adaptiveHeight:true,
        slidesToShow: 3,
        slidesToScroll:1,
        easing:'ease',
        infinite:true,
        autoplay:true,
        pauseOnFocus:true,
        pauseOnHover:true,
        waitForAnimate:false,
        centerMode:true,
        variableWidth:true,
    })
})