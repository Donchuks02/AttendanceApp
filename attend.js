// set initial count
let count = 0;

// select value and buttons

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')


// console.log(btns);

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0
        }
        if (count > 0) {
            value.style.color = '#2a2f4f'
        } else if (count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = 'black'
        }
        value.textContent = count;
    })
})



// select value and buttons


let count1 = 0
const value1 = document.querySelector('#value1')
const btns1 = document.querySelectorAll('.btn1')


// console.log(btns);

btns1.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles1 = e.currentTarget.classList
        if (styles1.contains('decrease1')) {
            count1--;
        } else if (styles1.contains('increase1')) {
            count1++;
        } else {
            count1 = 0
        }
        if (count1 > 0) {
            value1.style.color = '#2a2f4f'
        } else if (count1 < 0) {
            value1.style.color = 'red'
        } else {
            value1.style.color = 'black'
        }
        value1.textContent = count1;
    })
})


// checkout section

const checkout = document.querySelector('.checkout')
const value_male = document.getElementById('value-male')
const value_female = document.getElementById('value-female')
const total = document.getElementById('Total')

checkout.addEventListener('click', function() {
    value_male.textContent = count
    value_female.textContent = count1
    total.textContent = count + count1
})