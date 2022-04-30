const billValue = document.querySelector('.bill-input');
const peopleValue = document.querySelector('.people-input');
const percentage = document.querySelectorAll('.percentage-value');
const tipAmount = document.querySelector('.tip-person');
const totalAmount = document.querySelector('.total-person');
const custom = document.querySelector('.custom');
const billContainer = document.querySelector('.bill-container');
const allError = document.querySelectorAll('.errorMessage');
const formInput = document.querySelectorAll('.form-input');
const resetBtn = document.querySelector('.reset-btn')


Array.from(percentage, item => {
    item.addEventListener('click', () =>{
        if(billValue.value.length >=1 && peopleValue.value.length >=1) {
            calcAllValues(item.innerText, 100);
        } else {
            displayError();
        }
    })
})


custom.addEventListener('keyup', () => {
    if(billValue.value.length >=1 && peopleValue.value.length >=1) {
        if(custom.value.length >=1){
            calcAllValues(custom.value, 1)
        } else {
            calcAllValues('1', 1)
        }
    } else {
        displayError();
    }
})


const calcAllValues = (id, idNum) => {
    let billValNum = parseFloat(billValue.value);
    let totalPeopleVal = parseFloat(peopleValue.value);

    if(id.includes('%')){
    let percent = parseFloat(id.replace('%', ''));
    let tipTotal = (billValNum * percent) / totalPeopleVal;
    let finalTipTotal = (tipTotal / idNum).toFixed(2);
    let finalTotalAmount = billValNum / totalPeopleVal;
    let finalTotalSum = (finalTotalAmount + parseFloat(finalTipTotal)).toFixed(2);
    tipAmount.innerText = finalTipTotal;
    totalAmount.innerText = finalTotalSum;

    } else if(!id.includes('%')) {
    let customVal = parseFloat(id);
    let tipTotal = (billValNum + customVal) / totalPeopleVal;
    let finalTipTotal = (tipTotal / idNum).toFixed(2);
    let finalTotalAmount = billValNum / totalPeopleVal;
    let finalTotalSum = (finalTotalAmount + parseFloat(finalTipTotal)).toFixed(2);
    tipAmount.innerText = finalTipTotal;
    totalAmount.innerText = finalTotalSum;

    }
}


const displayError = () => {
    if(billValue.value === ''){
        billValue.parentElement.classList.add('displayMessage');
    }

    if(peopleValue.value === ''){
        peopleValue.parentElement.classList.add('displayMessage');
    }
}


formInput.forEach(item => {
    item.addEventListener('keyup', ()=> {
        item.parentElement.classList.remove('displayMessage');
    })
})


resetBtn.addEventListener('click', ()=> {
    location.reload();
})