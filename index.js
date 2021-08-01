
const header = document.getElementById("header");
const formSearchBox = header.querySelector(".formBox");
const modalActiveBg = document.getElementById("modalActiveBg");

const navFormBtn = document.querySelector(".formBox > div");
const navFormBtnSib = navFormBtn.nextSibling;

function seachBtnClick(){
    header.classList.remove("searchBtn");
    modalActiveBg.classList.add("active");
}

function scrollFunc(){
    if(pageYOffset >= 70){
        header.classList.add("scroll", "searchBtn");
        modalActiveBg.classList.remove("active");
        formSearchBox.addEventListener("click", seachBtnClick); 
        if(navFormBtn.className !== "active"){
            navFormBtn.classList.remove('active');
            navFormBtn.parentElement.classList.remove("active");
        }
    }else{
        header.classList.remove("scroll", "searchBtn");
    }
} //-------------------20210801 modalActvieBg : header scroll일때 아닐때 순서 다시잡아야함

document.addEventListener('scroll', scrollFunc);
//스크롤 --- e

//footer까지 스크롤이 내려가면 mobileFixedTab은 아래방향으로 사라짐
//스크롤 모바일 --- e


const formBtn = document.querySelectorAll('.formBtn');
const formBox = document.querySelector('.formBox');
const popups = document.querySelectorAll('.popup');

formBtn.forEach(
    function(button,index){
        let newIndex  = index;
        button.addEventListener('click', () => {
            formBtn[newIndex].classList.add("active"); 
            formBox.classList.add('active');
            console.log("hey");
            modalActiveBg.classList.remove("active");
        });
        //다른 버튼을 클릭하면 해당모달 active 클래스 지움
    }
);


const mypageBtn = document.getElementById('mypageBtn');
const mypageModal = document.getElementById("mypageModal");

function handleClick(){
	mypageModal.classList.toggle('active');
}
mypageBtn.addEventListener("click", handleClick);
//마이페이지 모달창 오픈


const loginModalBtn = mypageModal.querySelectorAll(".loginListBtn");
const loginModal = document.getElementById("loginModal");

function loginModalClick(){
    loginModal.classList.add('active');
    modalActiveBg.classList.add('active');
    document.body.style.overflow = "hidden";

    const closeModalBtn = loginModal.querySelector(".closeBtn");
    function closeBtnClick(){
        loginModal.classList.remove("active");
        modalActiveBg.classList.remove('active');
        document.body.style.overflow = "auto";
    }
    closeModalBtn.addEventListener("click", closeBtnClick);
    modalActiveBg.addEventListener("click", closeBtnClick);
}

for(let i = 0; i < loginModalBtn.length; i ++){
    const item = loginModalBtn.item(i);
    item.addEventListener("click", loginModalClick);
} //loginListBtn 동일한 클래스선택자에게 이벤트를 줌
//마이페이지-로그인 모달창 오픈


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
