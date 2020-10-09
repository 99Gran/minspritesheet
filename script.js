window.addEventListener('wheel', handleScroll);

function handleScroll(event) {
    //event.deltaY;
    let productElm = document.querySelector('.koppdemo');
    productElm.style.cssText = "border: 5px solid black;";
}