//Aqui comienza array Radiologia//

let radiologia = [{
        Hora: '11:00',
        Especialista: 'Ignacio Schulz',
        Paciente: 'Francisca Rojas',
        Rut: '9878782-1',
        Previsión: 'FONASA'
    },
    {
        Hora: '11:30',
        Especialista: 'Federico Subercaseaux',
        Paciente: 'Pamela Estrada',
        Rut: '15345241-3',
        Previsión: 'ISAPRE'
    },

    {
        Hora: '15:00',
        Especialista: 'Fernando Wurthz',
        Paciente: 'Armando Luna',
        Rut: '16445345-9',
        Previsión: 'ISAPRE'
    },

    {
        Hora: '15:30',
        Especialista: 'Ana María Godoy',
        Paciente: 'Manuel Godoy',
        Rut: '17666419-0',
        Previsión: 'FONASA'
    },

    {
        Hora: '16:00',
        Especialista: 'Patricia Suazo',
        Paciente: 'Ramon Ulloa',
        Rut: '14989389-K',
        Previsión: 'FONASA'
    },
];

//Aqui termina array Radiologia//

//Aqui definimos tabla a mostrar con datos de radiologia//

var texto =
    "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";
for (var i = 0; i < radiologia.length; i++) {
    texto += `<tr>
<td> ${radiologia[i].Hora}</td>
<td> ${radiologia[i].Especialista}</td>
<td> ${radiologia[i].Paciente}</td>
<td> ${radiologia[i].Rut}</td>
<td> ${radiologia[i].Previsión}</td>
</tr>`;
}
document.getElementById("tabla-radiologia").innerHTML = texto;


document.write('Primera atención: ' + radiologia[0].Paciente + ' - ' + radiologia[0].Previsión + ' | ' + 'Última atención: ' + radiologia[4].Paciente + ' - ' + radiologia[4].Previsión);

//Aqui termina tabla Radiologia//