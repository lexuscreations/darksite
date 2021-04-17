$(document).ready(function() {

    $("#loading").css({ "display": "none" })
    $(".mainContainer").css({ "display": "block" })

    AOS.init()

    $("a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault()

            var hash = this.hash

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, () => {
                window.location.hash = hash;
            })
        }
    })

    $(".placeBox").on('click', function(event) {
        $(".placeBox").parent().removeClass("active")
        $(this).parent().addClass("active")
    })

    $(".customOwl.owl-carousel.owl-theme").owlCarousel({
        dots: false,
        items: 4,
        loop: true,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    $("button.contactFormSendBtn").click((e) => {
        const formData = new FormData(document.forms.myForm);
        if (formData.get('name') != "" && formData.get('email') != "" && formData.get('phone') != "" && formData.get('message') != "") {
            alert(
                `Name = ${formData.get('name')} , Email = ${formData.get('email')} , Phone = ${formData.get('phone')} , Message = ${formData.get('message')}`
            )
        } else return
        e.preventDefault()
    })

})