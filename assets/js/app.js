const cl=console.log;
const box=document.getElementById('box');
const btnEVENT=document.getElementById('btnEVENT');
const boxChange=document.getElementById('boxChange');
const mainskills=document.getElementById('mainskills');

const angularimg='https://cdn.iconscout.com/icon/premium/png-256-thumb/angular-icon-svg-download-png-7694073.png?f=webp&w=128'
const Javascript='https://thumbs.dreamstime.com/b/javascript-icon-logo-javascript-often-abbreviated-as-js-programming-language-conforms-to-ecmascript-specification-204759326.jpg'
// box.style.backgroundColor='purple'
// box.style.height='200px'
// box.style.width='200px'

boxChange.style.backgroundColor='gold'
boxChange.style.height='200px'
boxChange.style.width='200px'


let onmousehan =()=>{
    box.style.backgroundColor='red';
    box.style.borderRadius='50%';
}

let onenterhant=()=>{
    boxChange.style.backgroundColor='purple';
    boxChange.style.borderRadius='50%';
}

let onimghandle=(eva)=>{
    eva.target.setAttribute('src',angularimg)
}

//btnEVENT.addEventListener('mouseout',onmousehan)
boxChange.addEventListener('mouseenter',onenterhant)
mainskills.addEventListener('mouseleave',onimghandle)
