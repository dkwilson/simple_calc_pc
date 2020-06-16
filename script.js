// select elements

const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

btns.forEach(btn => {
    btn.addEventListener('click', () => {

        let number = btn.getAttribute('data-num');
        screen.value += number;
    });
});

equalBtn.addEventListener('click', () => {
    if(screen.value === ''){
        screen.style.fontSize = 'smaller'
        screen.style.color = 'red';
        screen.value = `Please Enter a Value`
    } else {
        let value = eval(screen.value);
        screen.value = value;
    }
})

clearBtn.addEventListener('click', () => {
    screen.value = "";
})