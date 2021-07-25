// Leonardo de Camargo Falcoski | Leonardo.Falcoski@gmail.com | Dell IT 2021

// Prompt Module
const prompt = require('prompt-sync')()

// Data Module
const data = require('./data.js').arr

// Taxi Points List
var indexAux = 0

function list(array, start, end) { // data, 0, 9

    for (let index = start; index <= end; index++) {
        if (array[index] == null) {
            end = 0
            message("Ops! não há mais pontos disponíveis!")
        } else {
            indexAux = index
            let nome = array[index]['nome']
            let log = array[index]['logradouro']
            let number = array[index]['number']
            let tel = array[index]['telefone']
            let code = array[index]['code']
    
            console.log(`============ PONTO ${index + 1} ============`)
            console.log(`NOME DO PONTO: ${nome} \nENDEREÇO: ${[log]} \nNÚMERO: ${number} \nTELEFONE: ${tel} \nCÓDIGO: ${code}\n`)
        }
    }

    let avaliablePoints = (array.length - 1) - indexAux

    if (avaliablePoints >= 1) { 
        console.log(`Ainda há ${avaliablePoints} pontos disponíveis. O quê você deseja fazer?\n`)
        console.log("1 - Pular 1 página\n2 - Pular 5 páginas\n3 - Pular 10 páginas\n4 - Sair\n")
    
        let option = Number(prompt("Opção: "))
    
        switch (option) {
            case 1:
                //console.log("indexAux:", indexAux) // 1st expect output: 9
                list(data, indexAux + 1, indexAux + 10)
                break;
            case 2:
                //console.log("indexAux:", indexAux) // 
                list(data, indexAux + 1, indexAux + 50)
                break;
            case 3:
                //console.log("indexAux:", indexAux) //
                list(data, indexAux + 1, indexAux + 100)
                break;
            case 4:
                message("Retornando ao menu principal...", 1000)
                break;
            default:
                message("Ops! Não foi possível entender o seu pedido. Tente novamente!", 1000) 
                break;
        }
    } else wait()

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
    console.log("\nSistema:", msg)
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
    let p = prompt("Pressione Enter para retornar...")
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
            list(data, 0, 9)
            break
        case 2:
            console.log("Exemplo: -5.002544875")
            lat = Number(prompt("Digite sua latitude em formato geodésico decimal: "))
            long = Number(prompt("Digite sua longitutde em formato geodésico decimal: "))
            if (isNaN(lat && long) != true ) {
                message("Localização armazenada com sucesso!", 800)
            } else {
                message("Ops! Valor inválido. Tente novamente!")
                lat = undefined
                long = undefined
            }
            break    
        case 3:
            
            break
        case 4:
            
            break
        case 9:
            console.clear()
            break
        default:
            message('Ops! Não foi possível entender o seu pedido. Tente novamente!')
    }

} while (option != 9)

