const HOST_NAV = document.querySelector(".hostNav");
const RIGHT_SIDE = document.querySelector(".rightSide");

function scrollFunc(){
    if(pageYOffset >= 100){
        HOST_NAV.classList.add("active");
        RIGHT_SIDE.classList.add("active");
    }else{
        HOST_NAV.classList.remove("active");
        RIGHT_SIDE.classList.remove("active");
    }
}
document.addEventListener('scroll', scrollFunc);

const VIDEO = document.querySelector(".videoMain");
const VIDEO_TEXT = document.querySelector(".videoText");
const VIDEO_PLAY = VIDEO_TEXT.querySelector(".videoPlay");
const VIDEO_PAUSE = VIDEO_TEXT.querySelector(".videoPause");

/*for(let i = 0; i<VIDEO.length; i++) {
    VIDEO[i].addEventListener("play", () => {
       20210809 작성중
    })
};*/

VIDEO.addEventListener("play", () => {
    VIDEO_TEXT.classList.add("videoStop");
})
VIDEO.addEventListener("ended", () => {
    VIDEO_TEXT.classList.remove("videoStop");
})
function playVideo(){
    VIDEO.play();
    VIDEO_TEXT.classList.add("videoStop");
}
function pauseVideo(){
    VIDEO.pause();
    VIDEO_TEXT.classList.remove("videoStop");
}



const START_BTN = document.querySelector(".startBtn");
const LOGIN_MODAL = document.getElementById("loginModal");
const MODAL_ACTIVE_BG = document.getElementById("modalActiveBg");

START_BTN.addEventListener("click", () => {
    console.log("dd");
    LOGIN_MODAL.classList.add("active");
    MODAL_ACTIVE_BG.style.zIndex = "4";
    MODAL_ACTIVE_BG.style.display = "block";
    document.body.style.overflow = "hidden";
    
    const CLOSE_MODAL_BTN = LOGIN_MODAL.querySelector(".closeBtn");
    CLOSE_MODAL_BTN.addEventListener("click", () => {
        MODAL_ACTIVE_BG.style.zIndex = "3";
        MODAL_ACTIVE_BG.style.display = "none";
        LOGIN_MODAL.classList.remove("active");
        //MODAL_ACTIVE_BG.classList.remove("active");
        document.body.style.overflow = "auto";
    });

    window.onclick = function(event){
        if (event.target == MODAL_ACTIVE_BG){
            MODAL_ACTIVE_BG.style.display = "none";
            LOGIN_MODAL.classList.remove('active');
            document.body.style.overflow = "auto";
        }
    };
});
//마이페이지-로그인 모달창 오픈

const LANGUAGE_BTN = document.querySelectorAll(".languageBtn");
const LANGUAGE_MODAL = document.getElementById("languageModal");

for(let i = 0; i<LANGUAGE_BTN.length; i++) {
    LANGUAGE_BTN[i].addEventListener("click", () => {
        LANGUAGE_MODAL.classList.add('active');
        document.body.style.overflow = "hidden";
        MODAL_ACTIVE_BG.style.zIndex = "4";
        MODAL_ACTIVE_BG.style.display = "block";
        
        const CLOSE_MODAL_BTN = LANGUAGE_MODAL.querySelector(".closeBtn");
        CLOSE_MODAL_BTN.addEventListener("click", () => {
            MODAL_ACTIVE_BG.style.zIndex = "3";
            MODAL_ACTIVE_BG.style.display = "none";
            LANGUAGE_MODAL.classList.remove("active");
            document.body.style.overflow = "auto";
        });
        
        window.onclick = function(event){
            if (event.target == MODAL_ACTIVE_BG){
                MODAL_ACTIVE_BG.style.display = "none";
                LANGUAGE_MODAL.classList.remove('active');
                document.body.style.overflow = "auto";
            }
        };
    });
}