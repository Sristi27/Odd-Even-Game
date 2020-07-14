var h = document.querySelector("#stripe");
var msg = document.getElementById("msg");
var rect = document.getElementsByClassName("rect");
var sq = document.getElementsByClassName("sq1");
//var sq2=document.getElementById("sq2");
var rest=document.getElementById("reset");
var selected=generate();
select(selected);
function select(selected)
{
  if(selected===0){
sq[0].textContent=o();
  sq[1].textContent=e();
}
else{
  sq[1].textContent=o();
  sq[0].textContent=e();
}
}

function o(){
    var c=Math.floor(Math.random()*1000);
    if (c%2==0){
        return c+1;}
    else{
        return c;
    }}

function e(){
   var c=Math.floor(Math.random()*1000);
    if (c%2!=0){
        return c+1;}
    else{
        return c;
    }
}

rest.addEventListener("click",function(){
  rest.textContent="RESET";
  msg.textContent="Good Luck!";
  h.style.background="white";
  msg.style.color="black";
  selected=generate();
  select(selected);
 });
function generate(){
   return Math.floor(Math.random()*2);
}

 rect[1].addEventListener("click",function(){
             var d=sq[1].textContent;
              if(parseInt(d%2)===0)
                {
                  msg.textContent="Wrong!";
                  h.style.background="#D65076";
               }
              else{
                msg.textContent="Correct";
                h.style.background="#7FCDCD";
                }
         //msg.style.color="black";
         rest.textContent="Play Again?";
           });
rect[0].addEventListener("click",function(){
             var d=sq[0].textContent;
              if(parseInt(d%2)===0)
                {
                  msg.textContent="Wrong!";
                  h.style.background="#D65076";
                 }
              else{
                msg.textContent="Correct";
                h.style.background="#7FCDCD ";
              }
            //msg.style.color="black";
            rest.textContent="Play Again?"
           });
