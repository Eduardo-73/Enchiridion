$(function () {
    $('.btnMenu').on('click', function () {
        $('.mainMenu').stop().slideToggle();
    });

    // Mostrar/Ocultar submenú
    $('.subMenu').on('click', function () {
        $(this).next('.subMenuItems').stop().slideToggle();
    });

    $(window).on('resize', function () {
        if ($(window).width() >= 1024) {
            $('.mainMenu').show().css({ "display": "" });
        } else {
            $('.mainMenu').hide();
        }
    });

    // Anclar cabecera al hacer scroll
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 450) {
            $("header").css({
                "position": "fixed",
                "width": "100%",
                "top": "0",
                "background": "black",
                "z-index": "1002"
            });
            if ($(window).width() <= 1024) {
                $("header#contCabecera div#buscadorContainer").css({
                    "display": "none"
                });
            }
        } else {
            $("header").css({
                "position": "relative",
            });
            if ($(window).width() <= 1024) {
                $("header#contCabecera div#buscadorContainer").css({
                    "display": "flex"
                });
            }
        }
    });
    // Botón Volver Arriba
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 150) {
            $('#volverarriba').stop().fadeIn();
        } else {
            $('#volverarriba').stop().fadeOut();
        }
    });
    $('#volverarriba').on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    //Botones Prod
    $("article.itemSec button").on("mouseenter", function () {
        $(this).stop().css({ "background-color": "#CE2D3F" });
    });

    $(".itemSec button").on("mouseleave", function () {
        $(this).stop().css({ "background-color": "black" });
    });
    // Al pasar el ratón por el enlace
    /*
    $(".contenedor").on("mouseenter", function () {
        $(this).find("a").stop(true, true).fadeIn(500);
    });

    $(".contenedor").on("mouseleave", function () {
        $(this).find("a").stop(true, true).fadeOut(500);
    });
    */
    $(".totalPedido a").on("mouseenter", function () {
        $(this).stop(true, true).css({ "background-color": "#CE2D3F" });
    });

    $(".totalPedido a").on("mouseleave", function () {
        $(this).stop(true, true).css({ "background-color": "black" });
    });

    $(".btnComprar button").on("mouseenter", function () {
        $(this).stop(true, true).css({ "background-color": "#CE2D3F" });
    });

    $(".btnComprar button").on("mouseleave", function () {
        $(this).stop(true, true).css({ "background-color": "black" });
    });

    $("#inicio").on("mouseenter", function () {
        $(this).stop(true, true).css({ "background-color": "#CE2D3F" });
    });

    $("#inicio").on("mouseleave", function () {
        $(this).stop(true, true).css({ "background-color": "black" });
    });

    $('article.itemSec picture')
        .on("mouseenter", function () {
            $(this).find('img').css({ "transform": "scale(1.1)" });
        })
        .on("mouseleave", function () {
            $(this).find('img').css({ "transform": "scale(1)" });
        });

    $('footer#contPie p a')
        .on("mouseenter", function () {
            $(this).css({
                "text-decoration": "underline",
                "font-weight": "bold"
            });
        })
        .on("mouseleave", function () {
            $(this).css({
                "text-decoration": "none",
                "font-weight": "normal"
            });
        });

    $('nav.menu ul li a')
        .on("mouseenter", function () {
            $(this).css({
                "text-decoration": "underline",
                "font-weight": "bold"
            });
        })
        .on("mouseleave", function () {
            $(this).css({
                "text-decoration": "none",
                "font-weight": "normal"
            });
        });

    $("input").on("blur", function () {
        let input = $(this);
        let label = input.siblings("label");
        let span = input.siblings("span");

        if (input.val().trim() === "") {
            input.addClass("inputError");
            label.addClass("errorLabel");
            span.addClass("errorSpan");
        } else {
            input.removeClass("inputError");
            label.removeClass("errorLabel");
            span.removeClass("errorSpan");
        }
    });

    /*Parte del spinner*/
    $("div.spinner div.flechas button:nth-child(1)").on("click", function () {
        let contenedor = $(this).closest(".spinner");
        let cantidad = parseInt(contenedor.find("div.contNum strong").text());
        let suma = cantidad + 1;
        contenedor.find("div.contNum strong").text(suma);
    });

    $("div.spinner div.flechas button:nth-child(2)").on("click", function () {
        let contenedor = $(this).closest(".spinner");
        let cantidad = parseInt(contenedor.find("div.contNum strong").text());
        if (cantidad > 1) {
            let resta = cantidad - 1;
            contenedor.find("div.contNum strong").text(resta);
        }
    });

    $("div.spinnerProd div.flechasProd button:nth-child(1)").on("click", function () {
        let contenedor = $(this).closest(".spinnerProd");
        let cantidad = parseInt(contenedor.find("div.contNumProd strong").text());
        let suma = cantidad + 1;
        contenedor.find("div.contNumProd strong").text(suma);
    });

    $("div.spinnerProd div.flechasProd button:nth-child(2)").on("click", function () {
        let contenedor = $(this).closest(".spinnerProd");
        let cantidad = parseInt(contenedor.find("div.contNumProd strong").text());
        if (cantidad > 1) {
            let resta = cantidad - 1;
            contenedor.find("div.contNumProd strong").text(resta);
        }
    });

    $(".cookie button").on("click", function () {
        $(".cookie").fadeOut();
    });

    /*SPINNER*/
    var SliderModule = (function () {
        var pb = {};
        pb.elslider = $('#slider');
        pb.items = {
            panels: pb.elslider.find('.slider-wrapper > li'),
        };

        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;
        var imagenParada = false;

        pb.init = function (settings) {
            this.settings = settings || { duration: 5000 };
            var loscontroles = '';
            SliderInit();
            for (let i = 0; i < lengthSlider; i++) {
                if (i === 0) {
                    loscontroles += "<li class='active'></li>";
                } else {
                    loscontroles += "<li></li>";
                }
            }

            $('#control-buttons').html(loscontroles);

            $('#control-buttons li').on("click", function () {
                if (currentSlider !== $(this).index()) {
                    cambiarPanel($(this).index())
                }
            });

            pb.elslider.on("mouseenter", function () {
                imagenParada = true;
                clearInterval(SliderInterval);
            });

            pb.elslider.on("mouseleave", function () {
                imagenParada = false;
                SliderInit();
            });

            $('#imagen-anterior').on("click", function () {
                cambiarPanel(currentSlider - 1);
            });

            $('#imagen-siguiente').on("click", function () {
                cambiarPanel(currentSlider + 1);
            });

            $("#control-buttons li ,#miniatura-imagenes li").mouseenter(function () {
                $("#miniatura-container").css("display", "flex");
                var imagenPoner = $("ul.slider-wrapper li img").eq($(this).index()).attr("src");
                $("#miniatura-container").html("<img src='" + imagenPoner + "' alt='Miniatura'>");
            });

            $("#control-buttons,#miniatura-imagenes li").mouseleave(function () {
                $("#miniatura-container").css("display", "none");

            });

            $("#miniatura-imagenes ul li").click(function () {

                var imagenSeleccionada = $(this).index();
                if (currentSlider !== imagenSeleccionada) {
                    cambiarPanel(imagenSeleccionada);
                }
            });
        };

        var SliderInit = function () {
            // SliderInterval = setInterval(pb.startSlider, 3000);
            if (!imagenParada) {
                SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
            }
        };

        pb.startSlider = function () {
            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');

            if (nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }
            controles.removeClass('active');
            controles.eq(nextSlider).addClass('active');

            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(nextSlider).fadeIn('slow');
            currentSlider = nextSlider;
            nextSlider += 1;
        };

        var cambiarPanel = function (indice) {
            clearInterval(SliderInterval);
            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');
            if (indice >= lengthSlider) {
                indice = 0;
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }
            controles.removeClass('active');
            controles.eq(indice).addClass('active');
            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(indice).fadeIn('slow');
            currentSlider = indice;
            nextSlider = indice + 1;
            SliderInit();
        }

        return pb;
    }());
    // SliderModule.init({ duration: 2000 });
    SliderModule.init();
});