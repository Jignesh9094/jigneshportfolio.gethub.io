// ==================================
//   portfolio section click event
// ===================================
const p_button=document.querySelector('.portfolio-buttons');
const p_btns=document.querySelectorAll('.p-btn');
const p_img=document.querySelectorAll('.image-overlay');

p_button.addEventListener('click',(e)=>{
    e.preventDefault();
    const p_btn=e.target;
    p_btns.forEach((curele)=>{
       curele.classList.remove('pot-btn');
    });
    
    p_btn.classList.add('pot-btn');
    const p_no=p_btn.dataset.btn;

    const img_active=document.querySelectorAll(`.ptn-btn--${p_no}`);

    p_img.forEach((curele)=>{
      curele.classList.add('port-image');
    });
    img_active.forEach((curele)=>{
    curele.classList.remove('port-image');
    });
});

//  ==================================
// Testimonial slider section start
// ================================== 

new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay:{
      delay:2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
function jsmedia(mquery){
  if(mquery.matches){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay:{
          delay:2000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay:{
          delay:2000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

const mquery=window.matchMedia('(max-width:1065px)');
jsmedia(mquery);
mquery.addEventListener('change',jsmedia);
//  ==================================
//   scroll hireme button start
// ==================================
 const con=document.querySelector('.contact-section');
 const sc=document.querySelector('.hireme');
 sc.addEventListener('click',()=>{
       con.scrollIntoView({behavior:"smooth"});
 });  

 //  ==================================
//   scroll top section start
// ==================================
 const header=document.querySelector('.header');
 const foo=document.querySelector('.footer');
 const scrolltop=document.createElement('div');
 scrolltop.classList.add('scroll-style');
 scrolltop.innerHTML=`<ion-icon name="arrow-forward-outline" class="top-icon"></ion-icon>`;

 foo.after(scrolltop);

 scrolltop.addEventListener('click',()=>{
      header.scrollIntoView({behavior:"smooth"});
 });


//  ==================================
//   counter number section start
// ==================================
 const wcounter=document.querySelector('.work-conter-section');


const obs=new IntersectionObserver((enteries,observer)=>{
  let ent=enteries[0];
  if(ent.isIntersecting == false){
    return;
  }
  if(ent.isIntersecting == true){

      const num=document.querySelectorAll('.number');
   
      num.forEach((curele)=>{
       function calculate(){
         let min=parseInt(curele.innerHTML);
         let max=parseInt(curele.dataset.input);
         let sum=(max/200);
         if(min < max){
            curele.innerHTML=`${min+sum}+`;
            setTimeout(calculate,10);
         }
         
        }
         calculate(); 
      });
     
    
  }
  observer.unobserve(wcounter);
  },{root:null,threshold:0});
obs.observe(wcounter);



//  ==================================
//   responsive navbar section start
// ==================================
//  transform: translateX(100%);
const m_nav=document.querySelector('.mobile-navbar');
const m_se=document.querySelector('.mobile-section');
m_nav.addEventListener('click',()=>{
    m_se.classList.toggle('active'); 
});
