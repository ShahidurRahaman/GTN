let a,count=0;
function generate(){
    a=Math.floor(Math.random() * 101);
}
function check(){
    count++;
    let b=document.getElementById("input");
    b=parseInt(b.value , 10);
    if(b==a){
        document.getElementById("output-text").innerHTML="<p style='color: rgb(11, 241, 11);'>Hurray! You've Guessed The Secret Number</p>";
        document.getElementById("input").style.display="none";
        document.getElementById("pointbox").style.display="inline-block";
        document.getElementById("pointbox").innerHTML="Points: "+(100-5*(count-1));
    }
    else if(b<a){
        document.getElementById("output-text").innerHTML="<p style='color: rgb(248, 43, 43);'>Secret Number is greater than your guess</p>";
    }
    else{
        document.getElementById("output-text").innerHTML="<p style='color: rgb(248, 43, 43);'>Secret Number is smaller than your guess</p>";
    }
}
function newgame(){
    window.location.href="./index.html";
}
