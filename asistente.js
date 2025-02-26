/* Variables, constantes y arrays */

let nombreEmpleado = "";

const registroEntradas = [];
const registroDescansos = [];
const registroVueltaDescanso = [];
const registroSalidas = [];
const registroHorasExtras = [];

const empleados = [
    { nombre: "Julia", puesto: "RRHH", antiguedad: "6 meses", horasExtras: 6, presente: registroEntradas },
    { nombre: "Pedro", puesto: "CEO", antiguedad: "28 meses", horasExtras: 65, presente: registroEntradas },
    { nombre: "Leonardo", puesto: "Desarrollador junior", antiguedad: "14 meses", horasExtras: 0, presente: registroEntradas }
];

const nombresPermitidos = ["Julia", "Pedro", "Leonardo"];

/* Función de bienvenida, sólo para empleados cargados en el sistema */

function saludarEmpleado() {
    let nombreEmpleadoValido = false;
    while (!nombreEmpleadoValido) {
        nombreEmpleado = prompt('Por favor, ingrese su nombre:');
        if (validarLista(nombreEmpleado, nombresPermitidos)) {
            alert(`Hola, ${nombreEmpleado}! Bienvenido al asistente para trabajadores.`);
            mostrarMenu();
            nombreEmpleadoValido = true;
        }
    }
}

function validarLista(input, listaPermitida) {
    if (listaPermitida.includes(input)) {
        return true;
    } else {
        alert('Nombre no reconocido. Por favor, ingrese un nombre válido');
        return false;
    }
}

/* Funciones del menú */

function registrarEntrada() {
    const fechaHora = prompt('Ingrese la fecha y hora de entrada (DD-MM-AAAA HH:mm):');
    console.log(`Fecha y hora de entrada ingresada: ${fechaHora}`);
    registroEntradas.push(fechaHora);
    console.log(`Registro de Entradas: ${registroEntradas}`);
}

function registrarDescanso() {
    const fechaHora = prompt('Ingrese la fecha y hora de inicio del descanso (DD-MM-AAAA HH:mm):');
    console.log(`Fecha y hora de inicio del descanso ingresada: ${fechaHora}`);
    registroDescansos.push(fechaHora);
    console.log(`Registro de Descansos: ${registroDescansos}`);
}

function registrarVueltaDescanso() {
    const fechaHora = prompt('Ingrese la fecha y hora de vuelta del descanso (DD-MM-AAAA HH:mm):');
    console.log(`Fecha y hora de vuelta del descanso ingresada: ${fechaHora}`);
    registroVueltaDescanso.push(fechaHora);
    console.log(`Registro de Vuelta de Descansos: ${registroVueltaDescanso}`);
}

function registrarSalida() {
    const fechaHora = prompt('Ingrese la fecha y hora de salida (DD-MM-AAAA HH:mm):');
    console.log(`Fecha y hora de salida ingresada: ${fechaHora}`);
    registroSalidas.push(fechaHora);
    console.log(`Registro de Salidas: ${registroSalidas}`);
}

function registrarHorasExtras() {
    const horasExtras = prompt('Ingrese las horas extras trabajadas:');
    console.log(`Horas extras ingresadas: ${horasExtras}`);
    registroHorasExtras.push(horasExtras);
    console.log(`Registro de Horas Extras: ${registroHorasExtras}`);
}

function verProximosFeriados() {
    alert('Próximos feriados: 1 de Enero, 1 de Mayo, 25 de Mayo, 9 de Julio, 20 de Junio y 25 de Diciembre.');
}

function solicitarComida() {
    let solicitudValida = false;
    while (!solicitudValida) {
        const comida = prompt('¿Desea almuerzo o cena?');
        if (comida === 'almuerzo' || comida === 'cena') {
            alert(`Su solicitud de ${comida} ha sido recibida con éxito.`);
            solicitudValida = true;
        } else {
            alert('Por favor, decida por almuerzo o cena');
        }
    }
}

function solicitarRenuncia() {
    const confirmacion = confirm('¿Está seguro que desea solicitar la renuncia?');
    if (confirmacion) {
        alert('Su solicitud de renuncia ha sido recibida. Lamentamos verlo partir.');
    } else {
        alert('Solicitud de renuncia cancelada.');
    }
}

function mostrarMenu() {
    let opciones;
    do {
        opciones = prompt(`Seleccione una opción:
        1. Registro de entrada
        2. Registro de descanso
        3. Registro de vuelta del descanso
        4. Registro de salida
        5. Registro de horas extras
        6. Ver próximos feriados
        7. Solicitar almuerzo/cena
        8. Solicitar la renuncia
        0. Salir`);

        console.log(`Opción seleccionada: ${opciones}`);
        switch(opciones) {
            case '1':
                registrarEntrada();
                break;
            case '2':
                registrarDescanso();
                break;
            case '3':
                registrarVueltaDescanso();
                break;
            case '4':
                registrarSalida();
                break;
            case '5':
                registrarHorasExtras();
                break;
            case '6':
                verProximosFeriados();
                break;
            case '7':
                solicitarComida();
                break;
            case '8':
                solicitarRenuncia();
                break;
            case '0':
                alert('Gracias por utilizar el asistente. ¡Hasta pronto!');
                break;
            default:
                alert('Opción no válida, por favor intente de nuevo.');
        }
    } while(opciones !== '0');
}

saludarEmpleado();
