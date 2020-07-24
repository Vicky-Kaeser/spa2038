 
function CovidPolicy()                                    
{ 
    var name = document.forms["SubmitForm"]["Name"];               
    var email = document.forms["SubmitForm"]["EMail"];

    
        
    
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        
    } 
                                 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        
    }

    return; 
}
