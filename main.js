var inputAmount = document.getElementById('amount');   
var inputInterest = document.getElementById('interest');
var inputYears = document.getElementById('years');
var amountResult = document.getElementById('amount-result');
var totalPayment = document.getElementById('total-payment'); 
var totalInterest = document.getElementById('total-interest');


document.getElementById('loan-form').addEventListener('submit', submitFunction);



function submitFunction(e){
    if(inputAmount.value<=0||inputInterest.value<=0||inputYears.value<=0){
    document.getElementById('loading').style.display='block';
    setTimeout(() => {
        
        document.getElementById('loading').style.display='none';
        document.getElementById('alertBoxs').style.display='block';
        setTimeout(() => {
            document.getElementById('alertBoxs').style.display='none';
        }, 3000);
    }, 2000); 


    }else{
    document.getElementById('loading').style.display='block';
    setTimeout(() => {
        document.getElementById('loading').style.display='none';
        document.getElementById('result').style.display='block';
    }, 2000);
    
    
    totalInterest.value=(inputAmount.value/100*inputInterest.value);
    totalPayment.value=inputAmount.value -(- totalInterest.value);
    amountResult.value=(totalPayment.value/inputYears.value/12);
    }
    e.preventDefault();
}