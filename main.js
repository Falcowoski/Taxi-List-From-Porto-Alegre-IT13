// Leonardo de Camargo Falcoski | Leonardo.Falcoski@gmail.com | Dell IT 2021

// Prompt Module
const prompt = require('./node_modules/prompt-sync')()

// Data Module
const data = require('./data.js').arr

// Taxi Points List
function list(array) {
    for (let index = 0; index <= 9; index++) {
        let nome = array[index]['nome']
        let log = array[index]['logradouro']
        let number = array[index]['number']
        let tel = array[index]['tel']
        let code = array[index]['code']

        console.log(`============ PONTO ${index + 1} ============`)
        console.log(`NOME DO PONTO: ${nome} \nENDEREÇO: ${[log]} \nNÚMERO: ${number} \nTELEFONE: ${tel} \nCÓDIGO: ${code}`)
    }
}

// Haversine Formula
var lat = undefined
var long = undefined

function haversine() {
    var radians = Array.prototype.map.call(arguments, function(deg) { return deg/180.0 * Math.PI; });
    var lat1 = radians[0], lon1 = radians[1], lat2 = radians[2], lon2 = radians[3];
    var R = 6372.8; // km
    var dLat = lat2 - lat1;
    var dLon = lon2 - lon1;
    var a = Math.sin(dLat / 2) * Math.sin(dLat /2) + Math.sin(dLon / 2) * Math.sin(dLon /2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var d = R * c
    return d
}

// Menu Functions
function message(msg, timems) {
    var time = timems == undefined ? 2000 : timems
    console.log("\nMessage:", msg)
    sleep(time)
}

function sleep(ms) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}

function wait() {
    var p = prompt("Pressione Enter para retornar...")
}

//Menu 
do {
    console.clear()
    console.log("=============== MENU ===============\n")
    console.log("1 - Listar todos os pontos de taxi") 
    console.log("2 - Informar minha localização")
    console.log("3 - Encontrar pontos próximos")
    console.log("4 - Buscar pontos por logradouro")
    console.log("9 - Sair\n")
    console.log("====================================\n")
    var option = Number(prompt("Opção: "))

    switch(option) {
        case 0: // test mode
            lat = -30.04380072
            long = -51.22332745
            break
        case 1:
            message("Hi!")
            break
        case 2:
        
            break    
        case 3:
            
            break
        case 4:
            
            break
        case 9:
            console.clear()
            break
        default:
            message('Ops! não foi possível entender o seu pedido. Tente novamente!')
    }

} while (option != 9)

