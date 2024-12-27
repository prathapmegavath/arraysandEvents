function a(){
    alert("they parthu are u freee for this time to move out and juist hangout")
}

function h2tag(){
 alert("h2 parthu clicked")
}



let eleimage=document.querySelector("img");
function image(){
    eleimage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9REm8LxJ3YpfJ49nvGPjSpKVRgFzGp-Ripg&s"
}

let btn1=document.getElementById("mouseover");
btn1.onmouseover=function(){
  btn1.style.fontSize="10px" 
    btn1.style.backgroundColor="green"
    btn1.style.borderBlockColor="red"
    btn1.style.color="black"
}

let btn2=document.getElementById("click");
btn2.onclick=function(){
  btn2.style.fontSize="10px" 
    btn2.style.backgroundColor="blue"
    btn2.style.borderBlockColor="red"
    btn2style.color="green"
}

let btn3=document.getElementById("dblclick");
btn3.ondblclick=function(){
  btn3.style.fontSize="10px" 
    btn3.style.backgroundColor="purple"
    btn3.style.borderBlockColor="pink"
    btn3.style.color="yellow"
}

//let input=document.querySelector("input");
 ////input.onkeypress=function(){
//document.body.style.backgroundColor="red"
 //}  

// let input=document.querySelector("input");
 //input.onkeyup=function(){
  //  document.body.style.backgroundColor="green"
//}
 let input=document.querySelector("input");
 input.onkeydown=function(){
    document.body.style.backgroundColor="yellow"
 }

 let ptags=document.querySelectorAll("p");
 for(i=0;i<ptags.length;i++){
    ptags[i].style.backgroundColor="green"
 }