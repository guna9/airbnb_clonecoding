const hostNav = document.querySelector(".hostNav");
const rightSide = document.querySelector(".rightSide");

function scrollFunc(){
    if(pageYOffset >= 100){
        hostNav.classList.add("active");
        rightSide.classList.add("active");
    }else{
        hostNav.classList.remove("active");
        rightSide.classList.remove("active");
    }
}
document.addEventListener('scroll', scrollFunc);

const videoText = document.querySelector(".videoText");
const videoPlay = videoText.querySelector(".videoPlay");
const videoPause = videoText.querySelector(".videoPause");

videoPlay.addEventListener("click", () => {
    videoText.classList.add("videoStop");
});
videoPause.addEventListener("click", () => {
    videoText.classList.remove("videoStop");
});

const startBtn = document.querySelector(".startBtn");
const loginModal = document.getElementById("loginModal");
const modalActiveBg = document.getElementById("modalActiveBg");

startBtn.addEventListener("click", () => {
    console.log("dd");
    loginModal.classList.add("active");
    modalActiveBg.style.zIndex = "4";
    modalActiveBg.style.display = "block";
    document.body.style.overflow = "hidden";
    
    const closeModalBtn = loginModal.querySelector(".closeBtn");
    closeModalBtn.addEventListener("click", () => {
        modalActiveBg.style.zIndex = "3";
        modalActiveBg.style.display = "none";
        loginModal.classList.remove("active");
        //modalActiveBg.classList.remove("active");
        document.body.style.overflow = "auto";
    });

    window.onclick = function(event){
        if (event.target == modalActiveBg){
            modalActiveBg.style.display = "none";
            loginModal.classList.remove('active');
            document.body.style.overflow = "auto";
        }
    };
});
//마이페이지-로그인 모달창 오픈

const languageBtn = document.querySelectorAll(".languageBtn");
const languageModal = document.getElementById("languageModal");

for(var i = 0; i<languageBtn.length; i++) {
    languageBtn[i].addEventListener("click", () => {
        languageModal.classList.add('active');
        document.body.style.overflow = "hidden";
        modalActiveBg.style.zIndex = "4";
        modalActiveBg.style.display = "block";
        
        const closeModalBtn = languageModal.querySelector(".closeBtn");
        closeModalBtn.addEventListener("click", () => {
            modalActiveBg.style.zIndex = "3";
            modalActiveBg.style.display = "none";
            languageModal.classList.remove("active");
            document.body.style.overflow = "auto";
        });
        
        window.onclick = function(event){
            if (event.target == modalActiveBg){
                modalActiveBg.style.display = "none";
                languageModal.classList.remove('active');
                document.body.style.overflow = "auto";
            }
        };
    });
}