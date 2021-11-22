let myname = prompt("Please enter your name");
alert("Welcome " + myname + "! Thank you for using my calculator");

let result=document.getElementById("inputtext");

let pressing=(number)=>{
    result.value=result.value+number;
};

let answer=()=>{
    try{
        result.value=eval(result.value)

    }
    catch(err){
        alert("Error! Please enter a valid input")
    }
}

function clr(){
    result.value=" ";
}

function del(){
    result.value=result.value.slice(0, -1);
}