$(document).ready(function() {
    $("#buscar").click(function() {
        var num = $("#numberhero").val();
        if (num < 1 || num > 731)
            alert('Ingresa un N° entre 1 y 731')
        else {

            $.ajax({
                Type: "GET",
                url: "https://superheroapi.com/api.php/10226328610220431/" + num + "/",
                success: function(response) {
                    console.log(response);

                    $('#card_name').text(response.name);

                    $('#card_image').replaceWith('<img id="card_image" class="card-img-top" src="' + response.image['url'] + '" heigth="150px" alt="Card image cap">');

                    $('#card_alianzas').text('Conección: ' + response.connections['group-affiliation']);
                    $('#card_coneccion').text('Alianzas: ' + response.connections['relatives']);
                    $('#card_ocupacion').text('Ocupación: ' + response.work['occupation']);
                    $('#card_aparicion').text('1ra Aparición: ' + response.biography['first-appearance']);
                    $('#card_altura').text('Altura: ' + response.appearance['height']);
                    $('#card_peso').text('Peso: ' + response.appearance['weight']);

                    var dataPoints = [];
                    var i = 0;
                    $.each(response.powerstats, (index, value) => {
                        console.log('powers ' + index + '-' + value);

                        dataPoints.push({
                            y: value,
                            label: index
                        });
                        i++;
                    });
                    console.log(dataPoints);

                    /*<!--GRAFICO-->*/
                    var chart = new CanvasJS.Chart("chartContainer", {
                        animationEnabled: true,
                        title: {
                            text: "Estadísticas de Poder"
                        },
                        data: [{
                            type: "pie",
                            startAngle: 250,
                            yValueFormatString: "##0.00\"%\"",
                            indexLabel: "{label} {y}",
                            dataPoints: dataPoints
                        }]
                    });
                    chart.render();

                    /*<!------------------------->*/
                    moverseA("card_imagen");

                },
                error: function() {
                    console.log("SuperHero no encontrado");


                }

            });
        }

    });
});