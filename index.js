
const header = document.getElementById("header");
const formSearchBox = header.querySelector(".formBox");

const navFormBtn = document.querySelector(".formBox > div");
const navFormBtnSib = navFormBtn.nextSibling;

function seachBtnClick(){
    header.classList.remove("searchBtn");
    
}

function scrollFunc(){
    if(pageYOffset >= 70){
        header.classList.add("scroll", "searchBtn");
        formSearchBox.addEventListener("click", seachBtnClick); 
        if(navFormBtn.className !== "active"){
            navFormBtn.classList.remove('active');
            //navFormBtn.parentElement.classList.remove("active");
        }
    }else{
        header.classList.remove("scroll", "searchBtn");
    }
}

document.addEventListener('scroll', scrollFunc);
//스크롤

const formBtn = document.querySelectorAll('.formBtn');
const formBox = document.querySelector('.formBox');
const popups = document.querySelectorAll('.popup');

const mypageBtn = document.getElementById('mypageBtn');
const mapageModal = mypageBtn.querySelector("#mypageModal");

formBtn.forEach(
    function(button,index){
        let newIndex  = index;
        button.addEventListener('click', () => {
            formBtn[newIndex].classList.add("active"); 
            formBox.classList.add('active');
        });
        //다른 버튼을 클릭하면 해당모달 active 클래스 지움
    }
);

function handleClick(){
	mapageModal.classList.toggle('active');
}
mypageBtn.addEventListener("click", handleClick);



function count(type) {
    const resultElement = document.getElementById('result');

    let number = resultElement.innerText;

    if(type === 'plus'){
        number = parseInt(number) + 1;
    } else if(type === 'minus') {
        number = parseInt(number) - 1;
        if(number < 1) {
            const minusBtn = document.getElementById("minus");
            console.log("test");
            
        }
    };
    resultElement.innerText = number;
};


/*const mypageBtn = document.getElementsByClassId("mypageBtn");
const mypageModal = mypageBtn.querySelector("#mypageModal");
function (){

    mypageBtn.addEventListener('click', )
} 작성중
*/
