
const header = document.getElementById("header");
const formSearchBox = header.querySelector(".formBox");
const modalActiveBg = document.getElementById("modalActiveBg");

const navFormBtn = document.querySelector(".formBox > div");
const navFormBtnSib = navFormBtn.nextSibling;

function seachBtnClick(){
    header.classList.remove("searchBtn");
    modalActiveBg.classList.add("active");
    if(header.className !== "scroll"){
        console.log("not scroll");
        modalActiveBg.classList.remove("active");
    }
    
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
}

document.addEventListener('scroll', scrollFunc);
//스크롤 --- e
//--------------------------20210802 특정 높이에서 modalActiveBg.active가 안잡힘 ;; whyrano


//footer까지 스크롤이 내려가면 mobileFixedTab은 아래방향으로 사라짐
//스크롤 모바일 --- e


const formBtn = document.querySelectorAll('.formBtn');
const formBox = document.querySelector('.formBox');
const popups = document.querySelectorAll('.popup');

formBtn.forEach(
    function(button,index){
        let newIndex = index;
        button.addEventListener('click', () => {
            formBox.classList.add('active');
            formBtn[newIndex].classList.add("active");
            
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

/*window.onclick = function(event){
    if (event.target !== mypageModal){
        console.log("lol");
        mypageModal.classList.remove('active');
    }
}  모달창 밖을 눌렀을때 마이페이지 모달창 닫혀야 함  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal */



const loginModalBtn = mypageModal.querySelectorAll(".loginListBtn");
const loginModal = document.getElementById("loginModal");

function loginModalClick(){
    loginModal.classList.add('active');
    modalActiveBg.classList.add('active');
    modalActiveBg.style.zIndex = "4";
    document.body.style.overflow = "hidden";

    const closeModalBtn = loginModal.querySelector(".closeBtn");
    function closeBtnClick(){
        loginModal.classList.remove("active");
        modalActiveBg.classList.remove('active');
        document.body.style.overflow = "auto";
        modalActiveBg.style.zIndex = "3";
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
