let array = [];

function go()
    {
        var name = document.getElementById('entry').value;
        array.push(name);
        document.getElementById("result").innerHTML=array.join("<br>");
        document.getElementById("entry").value="";
    }

function submit()
    {
        const random = Math.floor(Math.random()*array.length);
        document.getElementById("winner").innerHTML="The Winner is: "+array[random];
    }    
