console.log("무야호");

const header = document.getElementById("header");
const formSearchBox = header.querySelector("#header .formBox");


function seachBtnClick(){
    header.classList.remove("searchBtn");
    
}

function scrollFunc(){
    if(pageYOffset >= 70){
        header.classList.add("scroll", "searchBtn");
        formSearchBox.addEventListener("click", seachBtnClick); 
    }else{
        header.classList.remove("scroll", "searchBtn");
    }
}

document.addEventListener('scroll', scrollFunc);