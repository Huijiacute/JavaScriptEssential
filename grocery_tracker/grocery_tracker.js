// 1. get user input grocery 1, 2, 3
// 2. calculate the total amount

const calculateGrocery =() => {
    const grocery_1 = parseFloat(document.getElementById('grocery_1').value)
    const grocery_2 = parseFloat(document.getElementById('grocery_2').value)
    const grocery_3 = parseFloat(document.getElementById('grocery_3').value)

    const totalAmount = grocery_1 + grocery_2 + grocery_3
    document.getElementById('totalAmount').innerText = `The total amount is: $${totalAmount}`
} 