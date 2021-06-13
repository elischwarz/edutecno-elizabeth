//Aqui comienza array dental//

let dental = [{
        Hora: '08:30',
        Especialista: 'Andrea Zuñiga',
        Paciente: 'Marcela Retamal',
        Rut: '11123425-6',
        Previsión: 'ISAPRE'
    },
    {
        Hora: '11:00',
        Especialista: 'María Pía Zañartu',
        Paciente: 'Angel Muñoz',
        Rut: '9878789-2',
        Previsión: 'ISAPRE'
    },

    {
        Hora: '11:30',
        Especialista: 'Scarlett Witting',
        Paciente: 'Mario Kast',
        Rut: '7998789-5',
        Previsión: 'FONASA'
    },

    {
        Hora: '13:00',
        Especialista: 'Francisco Von Teuber',
        Paciente: 'Karin Fernández',
        Rut: '18887662-k',
        Previsión: 'FONASA'
    },

    {
        Hora: '13:30',
        Especialista: 'Eduardo Viñuela',
        Paciente: 'Hugo Sánchez',
        Rut: '17665461-4',
        Previsión: 'FONASA'
    },
    {
        Hora: '14:00',
        Especialista: 'Raquel Villaseca',
        Paciente: 'Ana Sepúlveda',
        Rut: '14441281-0',
        Previsión: 'ISAPRE'
    },
];

//Aqui termina array dental//

//Aqui definimos tabla a mostrar con datos de dental//

var texto =
    "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";
for (var i = 0; i < dental.length; i++) {
    texto += `<tr>
<td> ${dental[i].Hora}</td>
<td> ${dental[i].Especialista}</td>
<td> ${dental[i].Paciente}</td>
<td> ${dental[i].Rut}</td>
<td> ${dental[i].Previsión}</td>
</tr>`;
}
document.getElementById("tabla-dental").innerHTML = texto;


document.write('Primera atención: ' + dental[0].Paciente + ' - ' + dental[0].Previsión + ' | ' + 'Última atención: ' + dental[4].Paciente + ' - ' + dental[4].Previsión);

//Aqui termina tabla dental//