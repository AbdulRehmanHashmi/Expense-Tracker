var amount = document.getElementById('amount')
var calculations = document.getElementById('calculations')
var description = document.getElementById('description')
var date = document.getElementById('date')
var table = document.getElementById('table')

var income = 0
var expense = 0
var remaining;

function transaction() {
    console.log('amount--->', amount.value );
    console.log('calculations--->' , calculations.value); 
    if (calculations.value === 'income') {
        income += parseInt(amount.value)
        console.log('income--->' , income);
    } else {
        expense += parseInt(amount.value)
        console.log('expense--->' , expense);
    }
remaining = income - expense
table.innerHTML+=`
    <tr>
    <td>${calculations.value}</td>
    <td>${amount.value}</td>
    <td>${description.value}</td>
    <td>${date.value}</td>
    <td>${remaining}</td>
    </tr>
`
amount.value=""
description.value=""
date.value=""
console.log('total--->' , total);
}
