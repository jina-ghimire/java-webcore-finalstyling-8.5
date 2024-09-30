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

    function clicked(){
      let x=document.querySelector(".container");
      x.style.display = (x.style.display === "none" || x.style.display === "") ? "block" : "none";
    }
    let x=document.querySelector(".container");
    x.addEventListener('click',function(event){
        let z=document.querySelector(".main-services");
        if(event.target != z){
          x.style.display='none';
        }
    })

    function clack(){
      let a=document.querySelector(".feedback");
        a.style.display = (a.style.display === "none" || a.style.display === "") ? "block" : "none";
    }

    function clock(){
      let b=document.querySelector(".modal-call");
      b.style.display = (b.style.display === "none" || b.style.display === "") ? "block" : "none";
    }
    
    function closethis(){
      let a=document.querySelector(".feedback");
      if(a.style.display==="block"){
        a.style.display="none";
      }
    }
    function closeit() {
      let x=document.querySelector(".container");
      if(x.style.display==="block"){
        x.style.display="none";
    }
  }
  function closing() {
    let b=document.querySelector(".modal-call");
    if(b.style.display==="block"){
      b.style.display="none";
  }
}