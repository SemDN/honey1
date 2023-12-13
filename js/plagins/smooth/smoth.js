const header =  document.querySelector(".header"),
      headerFixed = document.querySelector(".headerFixed"),
      headerLogo = document.querySelector(".header__logo_conteiner");



window.addEventListener("scroll",headerScroll)

function headerScroll (){
  if(window.pageYOffset > headerFixed + 90){
    header.classList.add("headerFixed")

    headerLogo.classList.add("display");
  }else{
    header.classList.remove("headerFixed")
    headerLogo.classList.remove("display");
  }
}
