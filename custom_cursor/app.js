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


let  innerCursor = document.querySelector('.inner-cursor')
let  outerCursor = document.querySelector('.outer-cursor')


document.addEventListener('mousemove' , moveCursor)

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`
    innerCursor.style.top  = `${y}px`
    outerCursor.style.left = `${x}px`
    outerCursor.style.top  = `${y}px`
}

let links = Array.from(document.querySelectorAll("a"));



links.forEach( (link) => {
    link.addEventListener("mouseover" , () => {
        innerCursor.classList.add("grow");
    });

    link.addEventListener("mouseleave" , () => {
        innerCursor.classList.remove("grow");
    });

    link.addEventListener("mouseover" , () => {
        outerCursor.classList.add("active");
    });

    link.addEventListener("mouseleave" , () => {
        outerCursor.classList.remove("active");
    });
});