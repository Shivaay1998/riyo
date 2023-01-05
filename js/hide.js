const btn = document.getElementsByClassName("btn");
const show = document.getElementsByClassName('inside_div');
const btn1 = document.getElementById('box1')
const btn2 = document.getElementById('box2')
const btn3 = document.getElementById('box3')
const btn4 = document.getElementById('box4')
const btn5 = document.getElementById('box5')
const show1 = document.getElementById('show1')
const show2 = document.getElementById('show2')
const show3 = document.getElementById('show3')
const show4 = document.getElementById('show4')
const show5 = document.getElementById('show5')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')

btn1.addEventListener('click',()=>{
        show1.classList.toggle('active')
        show2.classList.remove('active')
        show3.classList.remove('active')
        show4.classList.remove('active')
        show5.classList.remove('active')
})
btn2.addEventListener('click',()=>{
        show1.classList.remove('active')
        show2.classList.toggle('active')
        show3.classList.remove('active')
        show4.classList.remove('active')
        show5.classList.remove('active')
})
btn3.addEventListener('click',()=>{
        show1.classList.remove('active')
        show2.classList.remove('active')
        show3.classList.toggle('active')
        show4.classList.remove('active')
        show5.classList.remove('active')
})
btn4.addEventListener('click',()=>{
        show1.classList.remove('active')
        show2.classList.remove('active')
        show3.classList.remove('active')
        show4.classList.toggle('active')
        show5.classList.remove('active')
})
btn5.addEventListener('click',()=>{
        show1.classList.remove('active')
        show2.classList.remove('active')
        show3.classList.remove('active')
        show4.classList.remove('active')
        show5.classList.toggle('active')
})

two.addEventListener("click",()=>{
        console.log("hello");
} )