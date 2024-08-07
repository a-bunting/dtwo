$(document).ready(function() {

    $("#load__content").load("pages/main.php", function() {

    })

    $(".structure__button").click(function() {
        $(".loader").show();
        
        let pageToLoad = $(this).attr('data-pointer');
        
        $("#load__content").load("pages/"+pageToLoad, function() {

            $(".loader").addClass('loader__fadeOut');
            
            $("#hamburgerOpen").each(function() {
                $(this).prop("checked", false);
            })
            
            setTimeout(() => {
                $(".loader").removeClass('loader__fadeOut');
                $(".loader").hide();
            }, 500);
        })
    })

    let egg = 0;

    $(window).bind('keydown', function(event) {
        let key = String.fromCharCode(event.which).toLowerCase();
        console.log(key, egg);
        switch (String.fromCharCode(event.which).toLowerCase()) {
            case 'r':
                if(egg === 0) egg += (egg === 0 ? 1 : 0);
                if(egg === 3) egg += (egg === 3 ? 1 : 0);

                break;
            case 'e':
                egg += (egg === 1 ? 1 : 0);
                break;
            case 't':
                egg += (egg === 2 ? 1 : 0);
                break;
            case 'o':
                egg += (egg === 4 ? 1 : 0);
                if(egg === 5) {
                    $("#load__content").load("pages/eggs.php", function() {});
                    egg = 0;
                }
                break;
            default:
                egg = 0;
                break;
                
        }
    });
})

let hiddenElements = [];

function runNewPageScan() {
    $(".galleryImageSource").each(function() {
        let images = $(this).attr("data-images").split(' ');

        if(images.length > 1) {
            setInterval(() => {
                let currentImage = +$(this).attr("data-currentImage");
                let nextImage = currentImage + 1 === images.length ? +0 : +currentImage + 1;

                $(this).fadeOut(400, function() {
                    $(this).attr("src", `./images/${images[nextImage]}`);
                    $(this).fadeIn(400, function() {
                        $(this).attr("data-currentImage", nextImage);
                    })
                })

            }, 5000);
        }
    })

    $(".deleteOnClick").click(function() {
        $(this).fadeOut(function() {
            const ident = $(this).attr("data-ident");
            hiddenElements.push(ident);

            $(this).hide();
        });
    })

    $(".loadNewProject").click(function() {
        $(".loader").show();
        
        const projectToLoad = $(this).attr('data-projectId');
        
        $("#load__content").load("pages/uiux.php?project="+projectToLoad, function() {

            $(".loader").addClass('loader__fadeOut');
            
            setTimeout(() => {
                $(".loader").removeClass('loader__fadeOut');
                $(".loader").hide();
            }, 500);
        })
    })

    $(".deleteOnClick").each(function() {
        const ident = $(this).attr("data-ident");
        const hidden = hiddenElements.find((a) => a === ident );

        if(hidden) {
            $(this).hide();
        }
    })

}