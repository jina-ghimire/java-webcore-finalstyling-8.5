new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween:5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  function clicking(){
    let div=document.querySelector(".brands");
    let button=document.querySelector("#myid");

    if( button.innerHTML==="Show All"){

        button.innerHTML="Hide";
        div.style.height="450px";
        div.style.overflow ="visible";
    }

     else{
        button.innerHTML="Show All";
        div.style.height="210px";
        div.style.overflow ="hidden";
        }

    }
    window.clicking = clicking;

    function hit() {
      let y=document.querySelector(".brands-2");
      let z =document.querySelector("#brands-2__id");
      if( z.innerHTML==="Show All"){

        z.innerHTML="Hide";
        y.style.height="500px";
        y.style.overflow ="visible";
    }



     else{
        z.innerHTML="Show All";
        y.style.height="180px";
        y.style.overflow ="hidden";
        }
    }
    window.hit = hit;

    function read(){
      let div=document.querySelector(".inform");
      let button=document.querySelector("#readmore");

      if( button.innerHTML==="Read more"){

          button.innerHTML="Hide";
          div.style.height="170px";
          div.style.overflow ="visible";
      }

       else{
          button.innerHTML="Read more";
          div.style.height="70px";
          div.style.overflow ="hidden";
          }

      }
      window.read = read;


    function clicked(){
      let x=document.querySelector(".container");
      x.style.display = (x.style.display === "none" || x.style.display === "") ? "block" : "none";
    }
    window.clicked = clicked;
    let x=document.querySelector(".container");
    x.addEventListener('click',function(event){
        let z=document.querySelector(".main-services");
        if(event.target != z){
          x.style.display='none';
        }
    })
    let f=document.querySelector(".feedback");
    f.addEventListener('click',function(event){
        let g=document.querySelector(".feedback__contents");
        if(event.target != g){
          f.style.display='none';
        }
    })
    let d=document.querySelector(".modal-call");
    d.addEventListener('click',function(event){
        let n=document.querySelector(".modal-call__contents");
        if(event.target != n){
        d.style.display='none';
        }
    })




    function clack(){
      let a=document.querySelector(".feedback");
        a.style.display = (a.style.display === "none" || a.style.display === "") ? "block" : "none";
    }
    window.clack = clack;


    function clock(){
      let b=document.querySelector(".modal-call");
      b.style.display = (b.style.display === "none" || b.style.display === "") ? "block" : "none";
    }
    window.clock = clock;


    function closethis(){
      let a=document.querySelector(".feedback");
      if(a.style.display==="block"){
        a.style.display="none";
      }
    }
    window.closethis = closethis;


    function closeit() {
      let x=document.querySelector(".container");
      if(x.style.display==="block"){
        x.style.display="none";
    }
  }
  window.closeit = closeit;


  function closing() {
    let b=document.querySelector(".modal-call");
    if(b.style.display==="block"){
      b.style.display="none";
  }
}
window.closing = closing;
