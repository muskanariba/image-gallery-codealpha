var fullimgbox = document.getElementById("fullimgbox")
var fullimg = document.getElementById("fullimg")
var galleryImages = document.querySelectorAll('.gallery img');



function openfullimg(pic){
    fullimgbox.style.display = "flex" ;
    fullimg.src = pic

    
}


function closefullimg(){
    fullimgbox.style.display = "none"
}
