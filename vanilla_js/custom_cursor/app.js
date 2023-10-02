// получаем блоки внутренней и внешней части курсора
// нужно создать функционал,  который позволит таскать мышкой два дива - иннер и аутер курсоры
// добавляем слушатель события "mousemove" и создаем функцию, которая будет срабатывать при активации собития moveCursor
// то есть при движении мыши (событие mousemove) будет срабатывать моя функция moveCursor
// функция moveCursor должна передавать положиние мыши свойствам left, top дивов иннер, аутер курсор

// затем мы должны реализовать фунукионал при котором при наведении на ссылки курсор меняет свой вид
// сначала получаем массив всех ссылок череp Array.from(document.queruSelectorAll("a"))
// затем для КАЖДОЙ ссылки в массиве должны повесить функцию-слушатель, которая при наведении на нее ("mouseover") будет добавлять диву иннеркурсор класс grow, а когда мышь не будет  наведена
// ("mouseleave"), то этот класс(grow) должен remove.
// так же нужно сделать с дивом аутеркурсор - добавлять свойство active, когда на него навелись и убирать, когда не навелись   


let inner = document.querySelector('.inner-cursor')
let outer = document.querySelector('.outer-cursor')
     

document.addEventListener('mousemove' , moveCursor)

  
function moveCursor(e){
  let x = e.clientX;
  let y = e.clientY;
  
  inner.style.left = `${x}px`;
  inner.style.top = `${y}px`;
  outer.style.left = `${x}px`;
  outer.style.top = `${y}px`;
}

links = Array.from(document.querySelectorAll('a'))

links.forEach( (link) => {
 
  link.addEventListener('mouseover' , ()=> {
    inner.classList.add("grow")
    outer.classList.add("active")
  })
  
  link.addEventListener('mouseleave' , ()=> {
    inner.classList.remove("grow")
    outer.classList.remove("active")
  })
  
})

