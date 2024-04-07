let paises = ['India', 'Italia', 'China', 'Egipto', 'Francia', 'Noruega', 'Brasil', 'Bolivia', 'Perú', 'Australia']
let aleatorio = parseInt(Math.random() * 10)
let palabra = paises[aleatorio]
let preguntas
let respuesta
alert('Hola, para este juego debes escribirlo sin faltas ortográficas y la primera letra debe ser en mayuscula, suerte!!!')
for(let i = 0; i <= 2; i++){
    switch (palabra)
    {
        case 'India':
            preguntas = ['😀 País donde se encuentra el famoso Taj Mahal.',
                            '😮 Uno de los principales ríos que atraviesa este país es el Ganges.',
                            '🤯 Su capital es Nueva Delhi.']
            respuesta = prompt(preguntas[i])
            break

        case 'Italia':
            preguntas = ['😀 País conocido por tener forma de bota.',
                         '😮Tiene una famosa torre inclinada en su ciudad de Pisa.',
                        '🤯La capital de este país es Roma.']
             respuesta = prompt(preguntas[i])
             break

        case 'China':
            preguntas = ['😀 País donde se encuentra la Gran Muralla',
                        '😮 Su capital es Beijing.',
                        '🤯 Era el país más poblado del mundo.']
            respuesta = prompt(preguntas[i])
            break   
            
        case 'Egipto':
            preguntas = ['😀 País conocido por ser la cuna de la civilización antigua.',
                        '😮 El río Nilo fluye a través de este país.',
                        '🤯 Tiene una famosa esfinge y pirámides en su territorio.']
            respuesta = prompt(preguntas[i])
            break 

        case 'Francia':
            preguntas = ['😀 País donde se encuentra la Torre Eiffel.',
                        '😮 Su capital es París.',
                        '🤯 Famoso por su cocina gourmet y moda.']
            respuesta = prompt(preguntas[i])
            break 

        case 'Noruega':
            preguntas = ['😀 País conocido por sus impresionantes fiordos.',
                        '😮 Tiene una famosa aurora boreal en sus cielos.',
                        '🤯 Su capital es Oslo.']
            respuesta = prompt(preguntas[i])
            break 

        case 'Brasil':
            preguntas = ['😀 País donde se encuentra la estatua del Cristo Redentor.',
                        '😮 Tiene una famosa celebración de carnaval en su ciudad de Río de Janeiro.',
                        '🤯 La mayor parte de su territorio está en América del Sur.']
            respuesta = prompt(preguntas[i])
            break 

        case 'Bolivia':
            preguntas = ['😀 Tiene el salar mas grande el mundo',
                        '😮 En uno de sus departamentos tiene varios teleféricos',
                        '🤯 En ese pais se encuentra el stadium mas alto del mundo a nivel del mar']
            respuesta = prompt(preguntas[i])
            break 

        case 'Perú':
            preguntas = ['😀 País donde se encuentra la ciudad perdida de Machu Picchu.',
                        '😮 Famoso por sus líneas de Nazca.',
                        '🤯 Tiene una de las siete maravillas del mundo moderno.']
            respuesta = prompt(preguntas[i])
            break 

        case 'Australia':
            preguntas = ['😀 País conocido por ser el hogar de la Gran Barrera de Coral.',
                        '😮 Tiene una famosa ópera en su ciudad de Sídney.',
                        '🤯 El koala y el canguro son animales emblemáticos de este país.']
            respuesta = prompt(preguntas[i])
            break 
    }

    if(palabra == respuesta){
        alert(`Hey Adivinaste la palabra ${palabra} 😉. Recarga la página para volver a jugar`)
        i = 2
    }
}
if(palabra != respuesta){
    alert('😭 No te desanimes, recarga la pagina y vuelve a intentar')
}
