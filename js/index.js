

var containerNames = ['khaled', 'jacob' ,'Larry','Hoda','Ali','Karim','Hamada','Ahmed','Abdo','Hamam']
var operations ;

if (localStorage.getItem("userData") == null)
{
    operations = [] ;
}
else
{
    operations =JSON.parse(localStorage.getItem("userData"));        
}
 

inputs = document.getElementsByClassName("form-control");
function transferMoney()
{
    var senderInp = document.getElementById("senderInp").value;
    var receiverInp = document.getElementById("receiverInp").value;
    var amountInp = document.getElementById("amountInp").value;
    
    if (containerNames.includes(senderInp) &&  containerNames.includes(receiverInp) && amountInp <= 10000)
        {
            window.alert("Ok");
                        
            var info = {
                sender : senderInp,
                receiver : receiverInp,
                amount : amountInp
            }
            
            operations.push(info);
            localStorage.setItem("userData",JSON.stringify(operations));
            clearForm();      
        }
        else
        {
            window.alert("please enter valid data of All Customers")
        }  

}

function clearForm()
{
    for(var i=0 ; i<inputs.length ; i++)
    {
        inputs[i].value = "";
    }
}
