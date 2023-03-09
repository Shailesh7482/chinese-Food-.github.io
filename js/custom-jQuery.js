
$(document).ready(function () {
    $(".mobile-nav ").click(function () {
       $(' .primary-menu').slideDown(1000);
    })
    $(".close-icon").click(function () {
        $(' .primary-menu').slideUp(1000);
     })
})


    window.addEventListener('scroll',function(){
        var navbar = document.querySelector('.header-area');
        if(window.pageYOffset > 300){
            navbar.classList.add('sticky');
        }
        else{
            navbar.classList.remove('sticky');
            navbar.classList.add('sticky-out');
        }
    });
