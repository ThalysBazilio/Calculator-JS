
function insertChar(N){
    var number=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= number+N;
    
};

function empty(){
    var emp="";
    document.getElementById("display").innerHTML = emp;
};

function operetions(){
    var get=document.getElementById("display").innerHTML;
    if(get){
        document.getElementById("display").innerHTML=eval(get);
    }
}