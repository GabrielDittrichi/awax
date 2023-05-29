window.onload = function() {
    document.querySelector(".menu-opener").addEventListener("click", function(){
        if (document.querySelector("nav").style.display == 'flex') {
            document.querySelector("nav").style.display = 'none';
        } else {
            document.querySelector("nav").style.display = 'flex';
        }
    });
    window.addEventListener('resize', function(){
        if (window.innerWidth > 800){
            document.querySelector("nav").style.display = 'flex';
        } else {
            document.querySelector("nav").style.display = 'none';
        }
    });
};