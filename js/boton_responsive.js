

class Boton_reponsive{

  constructor(){
    this.Boton_reponsive();
  }

  Boton_reponsive(){
    console.log("hola");

    let boton_responsive = document.querySelector(".boton_responsive");
    boton_responsive.addEventListener("click", ()=>{
      let menu = document.querySelector(".header__ul");
      menu.style.zIndex="30";
      menu.style.top="0";
          menu.style.left="0%";



    });

    let boton_cerrado = document.querySelector(".boton_cerrado");

    boton_cerrado.addEventListener("click", ()=>{
      let menu = document.querySelector(".header__ul");
      menu.style.zIndex="30";
      menu.style.top="0";
          menu.style.left="-100%";


    });


    let botones_li = document.querySelectorAll(".header__ul li");

    botones_li.forEach((valor)=>{
      console.log(valor);

      valor.addEventListener("click", ()=>{
        let menu = document.querySelector(".header__ul");

        if(window.screen.width <= 425){
          menu.style.zIndex="30";
          menu.style.top="0";
              menu.style.left="-100%";

        }





      });


    });


  }


}

let boton_responsive = new Boton_reponsive();
