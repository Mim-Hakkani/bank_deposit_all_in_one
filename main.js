document.getElementById('submit').addEventListener('click',function(){

    const mail = document.getElementById('user-mail').value;
    const pass = document.getElementById('user-pass').value;
    if(mail == 'mim@gmail.com' && pass == "1234")
    {
        window.location.href ="bank.html";
    }
    else
    {
       //if show the alert message
           //alert('You are enter the wrong password');

       // if show the style in message
           
                if(mail == 'mim@gmail.com' && pass!='1234')
                {
                    document.getElementById('para').style.display ='block'
                }

                if(mail != 'mim@gmail.com' && pass=='1234')
                {
                    document.getElementById('para2').style.display ='block'
                }

            

    }
    
    // after click fresh the input value
    document.getElementById('user-mail').value = '';
    document.getElementById('user-pass').value = '';

})