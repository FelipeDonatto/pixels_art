const colorPalette = document.getElementById('color-palette')

const reset = document.getElementById('clear-board')
const inputContainer = document.getElementById('inputContainer')


function changeSelected(event){
    const color = document.querySelector('.selected')
    if(event.target.id !== 'color-palette'){
        color.classList.remove('selected')
        event.target.classList.add('selected');
    }
}
  
colorPalette.addEventListener('click', changeSelected);
// similar ao do exercicio do course

// pixels.addEventListener('click', function(event){
//     const colortochange = document.querySelector('.selected')
//     let newid = colortochange.id
//     if(event.target.id !== 'pixel-board'){
//     event.target.id = newid
//     }
//     // demorei umas duas horas nessa mas acredito que consegui fazer da maneira mais eficiente
//     // feeling kinda great ngl
// })

// reset.addEventListener('click', function(event){
//     const pixelsToErase = document.querySelectorAll('.pixel')
//     for(i = 0; i<pixelsToErase.length; i++){
//         pixelsToErase[i].removeAttribute('id')
        
//     }
// })
function createInput(event){
    const input = document.createElement('input')
    const button = document.createElement('button')
    inputContainer.appendChild(input)
    inputContainer.appendChild(button)
    button.id = 'generate-board'    
    input.id = 'board-size'
    input.type = 'Number'
    input.min = '1'
    

    button.innerText = 'VQV'

}
createInput()

const pixels = document.getElementById('board-container')

function generateline(num){
    pixels.innerHTML = ''
    const divs = document.createElement('div')
    const px = 'px'
    divs.id = 'pixel-board'
    divs.style.width = 200 + px
    divs.style.height = 40 + px
    divs.style.textAlign = 'center'
    divs.style.margin = 'auto'
    pixels.appendChild(divs)
    for(let i = document.querySelectorAll('.pixel').length; i<num*num; i+=1){
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')  
        pixel.style.display = 'inline-block'
        divs.appendChild(pixel)
    }
}

function readInput(){
    const input = document.querySelector('#board-size').value
    if (input == ''){
        alert('Board inválido!')
    }else if (input < 5){
        generateline(5)
    }else if (input > 50){
        generateline(50)
    }else{
        generateline(input)
    }

}

function generateColors(){
    const newcolors = document.getElementById('color-palette')
    for(i = 0; i<4; i++){
    let iNum = i
    const color = document.createElement('div')
    color.id = 'color' + iNum
    color.className = 'color'
    newcolors.appendChild(color)
    if(i == 0){
        color.style.backgroundColor = 'black'
        color.classList.add('selected')
    }if(i == 1){
        color.style.backgroundColor = 'rgb('+ Math.random()*255+','+Math.random()*255+','+Math.random()*255+')'
    }if(i == 2){
        color.style.backgroundColor = 'rgb('+ Math.random()*255+','+Math.random()*255+','+Math.random()*255+')'
    }if(i == 3){
        color.style.backgroundColor = 'rgb('+ Math.random()*255+','+Math.random()*255+','+Math.random()*255+')'
    }

    }

}

pixels.addEventListener('click', function(event){
const colortochange = document.querySelector('.selected')
let newcolor = colortochange.style.backgroundColor
if(event.target.className == 'pixel'){
event.target.style.backgroundColor = newcolor
}
// console.log(newcolor)
// demorei umas duas horas nessa mas acredito que consegui fazer da maneira mais eficiente
// feeling kinda great ngl
})

reset.addEventListener('click', function(){
    const timestoerase = document.querySelectorAll('.pixel')
    for(i = 0; i<timestoerase.length; i++){
        let erased = timestoerase[i]
        erased.style.backgroundColor = 'white'
    }
})










window.onload = function(){
    generateline(5)
    generateColors()
}

const button = document.querySelector('#generate-board')

button.addEventListener('click', readInput)





// nao faço ideia pq falha no 5