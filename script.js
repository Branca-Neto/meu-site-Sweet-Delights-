var slideIndex = 0;
showSlidesAuto();
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

function showSlidesAuto() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlidesAuto, 5000); // Change image every 2 seconds
}


  


  

// script.js
$(document).ready(function() {
    // Mostrar o carrinho ao clicar no botão do carrinho
    $('#cart-btn').on('click', function(e) {
        e.preventDefault();
        $('.cart-items-container').fadeIn();
    });

    // Fechar o carrinho ao clicar no ícone de fechar
    $('#close-cart').on('click', function() {
        $('.cart-items-container').fadeOut();
    });

    // Opcional: Fechar o carrinho ao clicar fora dele
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.cart-items-container, #cart-btn').length) {
            $('.cart-items-container').fadeOut();
        }
    });
});


