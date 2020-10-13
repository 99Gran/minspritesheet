window.addEventListener('wheel', handleScroll);

let frame = 0

function handleScroll(event) {
    //event.deltaY;
    let productElm = document.querySelector('.koppdemo');
    productElm.style.cssText = "background-position-x: calc("+ Math.floor(frame) +" * -300px);";
    frame +=0.1;
    if(frame > 5) frame = 0;
}

let btn = document.querySelector('.button');
btn.addEventListener('mousedown', handleOrderClick);

function handleOrderClick(event) {
    console.log('Bestillingsknapp er trykket på');
    
    gtag('event', 'Order click', {
        'event_category': 'order test',
        'event_label': 'order event happend'
    });
}