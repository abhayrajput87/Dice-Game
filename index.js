 function dicegame() {
var x= Math.floor((Math.random())*6+1);
var y=Math.floor((Math.random())*6+1);
    switch(x){
        case 1:
        document.querySelectorAll("img")[0].setAttribute("src","dice1.png");
        break;
        case 2:
        document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
        break;
        case 3:
        document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
        break;                  
        case 4:
        document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
        break;
        case 5:
        document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
        break;
        case 6:
        document.querySelectorAll("img")[0].setAttribute("src","dice6.png");
        break; 
    }
    switch(y){
        case 1:
        document.querySelectorAll("img")[1].setAttribute("src","dice1.png");
        break;
        case 2:
        document.querySelectorAll("img")[1].setAttribute("src","dice2.png");
        break;
        case 3:
        document.querySelectorAll("img")[1].setAttribute("src","dice3.png");
        break;                  
        case 4:
        document.querySelectorAll("img")[1].setAttribute("src","dice4.png");
        break;
        case 5:
        document.querySelectorAll("img")[1].setAttribute("src","dice5.png");
        break;
        case 6:
        document.querySelectorAll("img")[1].setAttribute("src","dice6.png");
        break; 
    }
    if(x>=y){
        if(x>y)
      document.getElementById("winner").innerHTML="PLAYER 1 wins👑⭐";
      else
      document.getElementById("winner").innerHTML="Draw😂";
    }
   
    else{

document.getElementById("winner").innerHTML="Player 2 wins👑⭐";
    }
}