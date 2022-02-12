document.getElementById('deposit-button').addEventListener('click',function(){
    // deposit Input Value
    const depositInputField = document.getElementById('deposit-input');
    const depositInputText = depositInputField.value;
    const depositAmount = parseFloat(depositInputText);
    // deposit number adder
    const depositNumber = document.getElementById('deposit-number');
    const depositNumberText = depositNumber.innerText;
    const depositNumberAmount = parseFloat(depositNumberText);
    depositNumber.innerText = depositNumberAmount + depositAmount;
    // update balance
    const balance = document.getElementById('balance-number');
    const balanceAmountText = balance.innerText;
    const balanceAmount = parseFloat(balanceAmountText);
    balance.innerText = balanceAmount + depositAmount;  
    // clear input field
    depositInputField.value = '';
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const withdrawAmount = parseFloat(withdrawInputText);
    // Withdraw number added
    const withdrawNumber = document.getElementById('withdraw-number');
    const withdrawNumberText = withdrawNumber.innerText;
    const withdrawTotalAmount = parseFloat(withdrawNumberText);
    withdrawNumber.innerText = withdrawTotalAmount + withdrawAmount;
    // update main Balance
    const balance = document.getElementById('balance-number');
    const withdrawNewBalance = balance.innerText;
    const newWithdrawBalance = parseFloat(withdrawNewBalance);
    balance.innerText = newWithdrawBalance - withdrawAmount;
    // clear input Field
    withdrawInputField.value = '';
})

