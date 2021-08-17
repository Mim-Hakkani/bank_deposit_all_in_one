
/* just simple way to implement of banking deposit */

document.getElementById('depo-submit').addEventListener('click',function(){
   
  
   
    const depoinput = document.getElementById('depo-input');
    const depoinputtext = depoinput.value;
    const depoinputint = parseFloat(depoinputtext);

    const deposit2 =  parseFloat(document.getElementById('depo-main').innerText);
    const balance =  parseFloat(document.getElementById('b-id').innerText);
    

   
        if(depoinputtext>0)
        {
            const update_depo = deposit2 + depoinputint ;
            document.getElementById('depo-main').innerText = update_depo;

            const total_balance = balance +depoinputint;
            document.getElementById('b-id').innerText =total_balance;

        }


    depoinput.value = '';
     
  

});

//for withdraw 

document.getElementById('withdraw-submit').addEventListener('click',function(){
   
  
   
    const withdraw_input = document.getElementById('withdraw-input');
    const withdraw_inputtext = withdraw_input.value;
    const withdraw_inputint = parseFloat(withdraw_inputtext);

    const withdraw_sit2 =  parseFloat(document.getElementById('withdraw-main').innerText);
    const balance =  parseFloat(document.getElementById('b-id').innerText);
    

    if(withdraw_inputint<balance){
    
        const update_draw = withdraw_sit2 + withdraw_inputint ;
        document.getElementById('withdraw-main').innerText = update_draw;

        const total_balance = balance - withdraw_inputint;
        document.getElementById('b-id').innerText =total_balance; }

  


        withdraw_input.value = '';
     
  

});


