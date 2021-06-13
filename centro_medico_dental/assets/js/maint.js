//Aqui comienza array Traumatologia//

let traumatologia = [{
        Hora: '08:00',
        Especialista: 'María Paz Altuzarra',
        Paciente: 'Paula Sánchez',
        Rut: '15554774-5',
        Previsión: 'FONASA'
    },
    {
        Hora: '10:00',
        Especialista: 'Raúl Araya',
        Paciente: 'Angélica Navas',
        Rut: '15444147-9',
        Previsión: 'ISAPRE'
    },

    {
        Hora: '10:30',
        Especialista: 'María Arragiada',
        Paciente: 'Ana Klap',
        Rut: '17879423-9',
        Previsión: 'ISAPRE'
    },

    {
        Hora: '11:00',
        Especialista: 'Alejandro Badilla',
        Paciente: 'Felipe Mardones',
        Rut: '1547423-6',
        Previsión: 'ISAPRE'
    },

    {
        Hora: '11:30',
        Especialista: 'Cecilia Budnik',
        Paciente: 'Diego Marre',
        Rut: '16554741-K',
        Previsión: 'FONASA'
    },
    {
        Hora: '12:00',
        Especialista: 'Arturo Cavagnaro',
        Paciente: 'Cecilia Méndez',
        Rut: '9747535-8',
        Previsión: 'ISAPRE'
    },
    {
        Hora: '12:30',
        Especialista: 'Andrés Kanacri',
        Paciente: 'Marcial Suazo',
        Rut: '11254785-5',
        Previsión: 'ISAPRE'
    },
];

//Aqui termina array traumatologia//

//Aqui definimos tabla a mostrar con datos de traumatologia//

var texto =
    "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";
for (var i = 0; i < traumatologia.length; i++) {
    texto += `<tr>
<td> ${traumatologia[i].Hora}</td>
<td> ${traumatologia[i].Especialista}</td>
<td> ${traumatologia[i].Paciente}</td>
<td> ${traumatologia[i].Rut}</td>
<td> ${traumatologia[i].Previsión}</td>
</tr>`;
}
document.getElementById("tabla-traumatologia").innerHTML = texto;


document.write('Primera atención: ' + traumatologia[0].Paciente + ' - ' + traumatologia[0].Previsión + ' | ' + 'Última atención: ' + traumatologia[4].Paciente + ' - ' + traumatologia[4].Previsión);

//Aqui termina tabla traumatologia//