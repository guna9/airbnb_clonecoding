
const header = document.getElementById("header");
const formSearchBox = header.querySelector(".formBox");
const modalActiveBg = document.getElementById("modalActiveBg");

const navFormBtn = document.querySelector(".formBox > div");
const navFormBtnSib = navFormBtn.nextSibling;

const formBtn = document.querySelectorAll('.formBtn');
const formBox = document.querySelector('.formBox');
const popups = document.querySelectorAll('.popup');

const mypageBtn = document.getElementById('mypageBtn');
const mypageModal = document.getElementById("mypageModal");

function scrollFunc(){
    if(pageYOffset >= 70){
        header.classList.add("scroll", "searchBtn");
        modalActiveBg.classList.remove("active");
        
        formSearchBox.addEventListener("click", seachBtnClick); 
        if(navFormBtn.className !== "active"){
            navFormBtn.classList.remove('active');
            navFormBtn.parentElement.classList.remove("active");
        }
        mypageModal.classList.remove("active");
    }else{
        header.classList.remove("scroll", "searchBtn");
    }
}
document.addEventListener('scroll', scrollFunc);
//스크롤 --- e  20210803 스크롤시 헤더에 있는 모든 active클래스를 지우면 어케될까요 ?? 내일 하고 집에 가자 이제^^..

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

function seachBtnClick(){
    header.classList.remove("searchBtn");
    modalActiveBg.classList.add("active");
    if(header.className !== "scroll"){
        console.log("not scroll");
        modalActiveBg.classList.remove("active");
    }
    formBtn.classList.remove("active");
}

mypageBtn.addEventListener("click", () => {
    mypageModal.classList.toggle('active');
});
//마이페이지 모달창 오픈


/*window.onclick = function(event){
    if (event.target !== mypageModal){
        console.log("lol");
        mypageModal.classList.remove('active');
    }
}  모달창 밖을 눌렀을때 마이페이지 모달창 닫혀야 함  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal */



const loginModalBtn = mypageModal.querySelectorAll(".loginListBtn");
const loginModal = document.getElementById("loginModal");
const closeModalBtn = loginModal.querySelector(".closeBtn");

for(let i = 0; i < loginModalBtn.length; i ++){
    const item = loginModalBtn.item(i);
    item.addEventListener("click", () => {
        //modalActiveBg.classList.add("active");
        loginModal.classList.add('active');
        document.body.style.overflow = "hidden";
        modalActiveBg.style.zIndex = "4";
        modalActiveBg.style.display = "block";
        
        closeModalBtn.addEventListener("click", () => {
            console.log("active");
            modalActiveBg.style.zIndex = "3";
            loginModal.classList.remove("active");
            //modalActiveBg.classList.remove("active");
            modalActiveBg.style.display = "none";
            document.body.style.overflow = "auto";
        });
    });
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

const mobileFixedTab = document.getElementById("mobileFixedTab");
const mobileLoginBtn = mobileFixedTab.querySelector(".loginBtn");

//-----------반응형
const mql = window.matchMedia("screen and (max-width: 744px)");
if(mql.matches){
    document.querySelector(".main p").innerHTML = `에어비앤비가<br />여행지를 찾아드릴게요!`;
    const mobileSearch = document.querySelector(".mobileSearch");
    const mobileNav = mobileSearch.parentElement;
    const searchCloseBtn = mobileNav.querySelector(".closeBtn");
    mobileSearch.addEventListener("click", ()=> {
        mobileNav.classList.add("active");
        document.body.style.overflow = "hidden";

        searchCloseBtn.addEventListener("click", ()=>{
            mobileNav.classList.remove("active");
            document.body.style.overflow = "auto";
        
        });
    });

    mobileLoginBtn.addEventListener("click", () => {
        loginModal.classList.toggle('active');
        document.body.style.overflow = "hidden";
        
        closeModalBtn.addEventListener("click", () => {
            loginModal.classList.remove("active");
            document.body.style.overflow = "auto";
        });
        mobileLoginBtn.addEventListener("click", () => {
            document.body.style.overflow = "auto";
        });
    })//모바일 하단 fixed tab 에 로그인버튼과 모바일사이즈 로그인모달

};


//-----------스크롤 맨 아래

$(window).scroll(function(){
    const scrollTop = $(document).height();
    const height = $(document).height();
    const height_win = $(window).height();

    if(Math.round($(window).scrollTop()) == $(document).height() - $(window).height()){
        mobileFixedTab.style.bottom = "-70px";
    } else {
        mobileFixedTab.style.bottom = "0";
    }
})