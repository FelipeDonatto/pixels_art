const colorPalette = document.getElementById('color-palette')
const pixels = document.getElementById('pixel-board')


function changeSelected(event){
    const color = document.querySelector('.selected')
    color.classList.remove('selected')
    event.target.classList.add('selected');
}
  
colorPalette.addEventListener('click', changeSelected);
// similar ao do exercicio do course

pixels.addEventListener('click', function(event){
    const colortochange = document.querySelector('.selected')
    let newid = colortochange.id
    if(event.target.id !== 'pixel-board'){
    event.target.id = newid
    }
    // demorei umas duas horas nessa mas acredito que consegui fazer da maneira mais eficiente
    // feeling kinda great ngl
})