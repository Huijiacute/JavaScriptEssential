let length = parseFloat(document.getElementById('length'))
let width = parseFloat(document.getElementById('width'))

let calculateArea = (length, width) => {let area = length * width}

document.getElementById('result').innerText = `The are of the rectangle is: ${area}`