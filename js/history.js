




var opp  
if( localStorage.getItem('userData') == null)
{
    window.alert("Please, start your transformation"); 
}
else
{
    opp =JSON.parse(localStorage.getItem("userData"));
    console.log(opp);
}


function addOperation()
{
    var temp = `` ;
    for (var i=0 ; i<opp.length; i++)

    {
        temp += `
            <tr>
                <td>`+i+`</td>
                <td>`+opp[i].sender+`</td>
                <td>`+opp[i].receiver+`</td>                    
                <td>`+opp[i].amount+`</td>                    
            </tr>`
    }
    document.getElementById("tableBody").innerHTML = temp;
}

addOperation()
