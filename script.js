function islandLake(element) {
    element.src = "media/island lake 2.png";
}
function islandLake2(element) {
    element.src = "media/island lake 1.png";
}
function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}
function hover(element) {
    element.style.textShadow= "1px 1px 8px #b956c3";
}
function hoverOut(element) {
    element.style.textShadow= "none";
}
function changeName(element) {
    element.innerText = "ريــنــا حــنــضــل";
    element.style.fontFamily = "'Kufam', sans-serif";
    element.style.fontWeight = "100";
    element.style.fontSize = "2.3rem";
}