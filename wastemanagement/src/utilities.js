export const drawRect =  (detections, ctx) =>{
    detections.forEach(prediction =>{
    // get prediction rsults

    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    // set styling
    const color  = 'green';
    ctx.strokeStyle = color
    ctx.fillStyle = '18px Arial'
    ctx.fillStyle = color

    // Draw retangles and text
    ctx.beginPath()
    ctx.fillText(text, x, y)
    ctx.rect(x, y, width, height)
    ctx.stroke()
})
}