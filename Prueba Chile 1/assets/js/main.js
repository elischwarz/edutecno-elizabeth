$(documento).ready(function(){

    $("a").click(function(event){
        event.preventDefault()

        var gato = this.hash;

        $("html").animate({

            scrolltop: $(gato).offset().top
        },
        800
        );
    });
});

$('[data-toggle="tooltip"]').tooltip()

$('[data-toggle="popover"]').popover()