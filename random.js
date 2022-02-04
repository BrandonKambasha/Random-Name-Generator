let array = [];

function go()
    {
        var name = document.getElementById('entry').value;
        array.push(name);
        document.getElementById("result").innerHTML=array.join("<br>");
        name = "";
    }

function submit()
    {
        const random = Math.floor(Math.random()*array.length);
        document.getElementById("winner").innerHTML=array[random];
    }    
