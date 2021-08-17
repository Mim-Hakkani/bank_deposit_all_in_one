
/*

  functional way to devepoped the bank deposit 

*/


 const deposti     = document.getElementById('depo-submit');
 const withdraw    = document.getElementById('withdraw-submit');

 //for deposit 

 deposti.addEventListener('click',function(){

   balancechange('depo');

 });

//for withdraw

 withdraw.addEventListener('click',function(){
  
   balancechange('withdraw');

});


function balancechange(type){

   //input value play with domm

         const catch_input_id = document.getElementById(type +'-input');
         const take_value=catch_input_id.value;
         const text_convert = parseFloat(take_value);

   //catch the depot and withdraw main 

      const amount = document.getElementById(type +'-main');
      const amountText = amount.innerText;
      const amountTotal = parseFloat(amountText);


   //balance update setion

    const balance = document.getElementById('b-id');
    const balance_text =balance.innerText;
    const balance_total =parseFloat(balance_text);
    


      //set the condition of error handling 

      if(take_value>0){


         //update amount of depo and withdraw

               const update = text_convert + amountTotal

         //set the value in main text
   
               amount.innerText = update;

         //update main balance 
         if(type == 'withdraw'){
            balance.innerText = balance_total-text_convert;
         }

         else{
            balance.innerText = text_convert + balance_total
         }
         
         catch_input_id.value =''; 

      }
   
      else{
         alert('pls insert the positive value');
      }



     
   
}





