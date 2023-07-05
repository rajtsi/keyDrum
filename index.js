//alert("a botton had been clicked");

// function cra()
//    {var audiosound=new Audio("sounds/crash.mp3");
//         audiosound.play();}





// for(i=0;i<7;i++)
// { document.querySelectorAll("button")[i]
document.addEventListener("keydown",function(event)
{

   switch (event.key) {
    case "w": var audiosound=new Audio("sounds/tom-1.mp3");
               audiosound.play();
        
        break;
        case "a": var audiosound=new Audio("sounds/tom-2.mp3");
        audiosound.play();
 
 break;
 case "s": var audiosound=new Audio("sounds/tom-3.mp3");
               audiosound.play();
        
        break;
        case "d": var audiosound=new Audio("sounds/tom-4.mp3");
               audiosound.play();
        
        break;
        case "j": var audiosound=new Audio("sounds/snare.mp3");
               audiosound.play();
        
        break;
        case "k": var audiosound=new Audio("sounds/kick-bass.mp3");
               audiosound.play();
        
        break;
        case "l": var audiosound=new Audio("sounds/crash.mp3");
               audiosound.play();
        
        break;    
   
    default:
        break;
   }

}

);
