var iteml=document.querySelector('.contact-list');
var itemc=document.querySelectorAll('.contact-item');

var pagenumber=Math.trunc(itemc.length/10);
var ourContent="";
var uniqueOne=document.querySelector("#uniqueOne");

var button1=document.querySelectorAll("button");

iteml.innerHTML="";
for(let i=0;i<10;i++){

    ourContent+=`<li class="contact-item cf" > ${itemc[i].innerHTML} </li>`
    

}

iteml.innerHTML=ourContent;


function makeOurButtons(){



    for(let i=0;i<pagenumber;i++){

        uniqueOne.innerHTML+=`<button id="${i}"> ${i}</button>`;
       
      
    }
}
makeOurButtons()

first=0;
last=0;


for(let i=0;i<pagenumber;i++){
    v=i.toString();
 
    

    document.getElementById(v).addEventListener('click',function(){
        iteml.innerHTML="0";
        first=10*i;
        
        last=10+first;
     

       ourContent="";
        for(first;first<last;first++){
            ourContent+=`<li class="contact-item cf" > ${itemc[first].innerHTML} </li>`;
            iteml.innerHTML=ourContent;
            
        }

    
    })
    
   
  
}

