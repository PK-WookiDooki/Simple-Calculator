function clearfunction(){
    document.getElementById('result').value = ""; 
}

function deletefunction(){
    var toDel = document.getElementById('result').value;
    document.getElementById('result').value = toDel.slice(0,-1);
}
function display(value){
    document.getElementById("result").value += value;
}

function calculate(){
    var input = document.getElementById('result').value;
    var cal = eval(input);
    document.getElementById('result').value = Math.abs(cal);
}

