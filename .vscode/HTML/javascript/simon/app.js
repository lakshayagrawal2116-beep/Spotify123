let game_seq=[];
let user_seq=[];
let start=false;
let level=0;
let max=0;
let cnt=0;
let h2=document.querySelector("h2");
btns=["red","yellow","green","purple"];
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game started");
        start=true;
        levelup();
    }
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}
function levelup(){
    user_seq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randix=Math.floor(Math.random()*4);
    let randcolor=btns[randix];
    let randbtn=document.querySelector(`.${randcolor}`);
    game_seq.push(randcolor);
    console.log(game_seq);
    btnflash(randbtn);
   
}
function reset(){
    start=false;
    game_seq=[];
    user_seq=[];
    level=0;
}
function checkans(index){
    // console.log(level);
    
    if(game_seq[index]==user_seq[index]){
        if(user_seq.length==game_seq.length){
            setTimeout(levelup,1000);
            cnt++;
             if(max<cnt){
        max=cnt;
    }
     let maxline =document.querySelector("#maxscore");
     maxline.innerText=`Max Score:${max}`;
        }
        
    }
    else{
        cnt=0;
        h2.innerHTML=`gameover! <b> your score is ${level-1}<b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="black";
        },150);
        reset();
    }
}
function btnpress(){
   let btn=this;
   console.log(this);
   btnflash(btn);
   let usercolor=btn.getAttribute("id");
   user_seq.push(usercolor);
   
   checkans(user_seq.length-1);


}
let allbtn=document.querySelectorAll(".btn");
for( i of allbtn){
    i.addEventListener("click",btnpress);
}