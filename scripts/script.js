const webS = new Swiper('.web .swiper',{
    autoplay:{delay:5000},
    loop:true,
    navigation:{
        nextEl:'.web .swiper-button-next',
        prevEl:'.web .swiper-button-prev',
    }
})
const landingS = new Swiper('.landing .swiper',{
    autoplay:{delay:5000},
    loop:true,
    navigation:{
        nextEl:'.landing .swiper-button-next',
        prevEl:'.landing .swiper-button-prev',
    }
})
const snsS = new Swiper('.sns .swiper',{
    slidesPerView:4, //한번에 보일 슬라이드 수(모바일)
    spaceBetween:30, //슬라이드 사이 여백
    autoplay:{delay:1,desableOnInteraction:true,},
    loop:true,
    speed:8000,
    freemode:true,
    //반응형 슬라이드 수
    /* breakpoint:{
        800:{slidesPerView:3,}, //800 이상일때 3개
        1200:{slidesPerView:4,}, //1200 이상일때 4개
    } */
})
const posterS = new Swiper('.poster .swiper',{
    slidesPerView:4, //한번에 보일 슬라이드 수(모바일)
    spaceBetween:30, //슬라이드 사이 여백
    autoplay:{delay:1,desableOnInteraction:true,},
    loop:true,
    speed:8000,
    freemode:true,
    //반응형 슬라이드 수
    /* breakpoint:{
        800:{slidesPerView:3,}, //800 이상일때 3개
        1200:{slidesPerView:4,}, //1200 이상일때 4개
    } */
})
//detail swiper
const detailS = new Swiper('.detail .swiper',{
    slidesPerView:3,//모바일 수
    spaceBetween:20,
    autoplay:{delay:2000},
    loop:true,
    /* breakpoint:{
        800:{slidesPerView:3,}, //800 이상일때 3개
        1200:{slidesPerView:4,}, //1200 이상일때 4개
    } */
})
//detail popup
//1. 팝업 숨기기(big_bg)
//2. swiper img 클릭 시
//3. 팝업 보이기
const big_bg = document.querySelector('.big_bg')
const detail_img = document.querySelectorAll('.detail .swiper-slide img')
const big_img = document.querySelector('.big_bg img')
console.log(big_bg, detail_img, big_img)
big_bg.style.display = 'none' //팝업 초기 숨기기

for(let detail of detail_img){//6개 이미지 반복문 접근
    detail.addEventListener('click',(e)=>{
        //클릭한 대상 관련에 a가 있다면 스크롤 위로 올라가는 기능 막기
        e.preventDefault()
        //큰 이미지 부모 보이기
        big_bg.style.display = 'block'
        //팝업 실행 시 body 스크롤 막기
        document.body.style.overflow = 'hidden';
        //클릭한 이미지의 경로(src)를 큰 이미지 팝업의 src로 대입하기
        big_img.src = detail.src
        //이전 팝업에서 내린 스크롤을 기억하지 않도록 항상 스크롤 위로 올리기
        big_bg.children[0].scrollTo(0,0)
    })
}

//팝업 출력 시 팝업 닫기
big_bg.addEventListener('click',()=>{
    big_bg.style.display = 'none'
    document.body.style.overflow = '';
})