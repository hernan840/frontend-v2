/* interambiar puestos en poortada */
let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters=word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent=letter;
        span.className= "letter"
        word.append(span);
    } );
});
let currentWordIndex =0;
let maxWordIndex = words.length-1;
words[currentWordIndex].style.opacity ="1";

let cambiartexto=()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className= "letter out";
        },i*80);
    });

    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in"
            
        }, 340+i*80);
    }) ;
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex +1;
};

cambiartexto();
setInterval(cambiartexto,3000);


/* -------------skill criculo */
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;

    for(let i = 0; i< dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent; i++){
        pointsMarked[i].classList.add('marked')
    }
})

/* -------------selector de  proyectos*/
var mixer = mixitup('.portfolio-galery');

/* -------------activar  menu, resalta la seccion seleccionada */
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY +97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


/* -------------sticky nabar*/
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})
/* -------------activar  togel o acordion menu*/
let menuIcon = document.querySelector("#menu-icono");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("fa-xmark");
    navlist.classList.toggle("open");
}
/* seleccionado algun elemento del  menu muestra y se oculra el menu desplegado*/
    window.onscroll = ()=>{
    menuIcon.classList.remove("fa-xmark");
    navlist.classList.remove("open");
}

// efecto parallax-----------
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));