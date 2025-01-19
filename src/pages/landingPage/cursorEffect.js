const cursor = document.getElementById('landing_cursor');

document.body.onpointermove = e => {
    const {clientX, clientY} = e;

    //console.log(`X: ${clientX}, Y: ${clientY}`);
    cursor.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 1500, fill: "forwards"})
}