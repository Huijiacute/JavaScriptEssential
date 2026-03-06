let count = 0;
const increaseCount = () => {
    count++
    displayCount();
    checkCountValue();
}

const displayCount = () => {
    document.getElementById('countDisplay').innerHTML = count;
}

// count = 10 -> Your Instagram post gained 10 followers! Congratulations!
// count === 20 -> Your Instagram post gained 20 followers! Keep it up!
const checkCountValue = () => {
    if (count === 10) {
        alert('Your Instagram post gained 10 followers! Congratulations!')
    } else if (count === 20) {
        alert('Your Instagram post gained 20 followers! Keep it up!')
    }
}