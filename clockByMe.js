const clock = document.querySelector(".clock");
const dayArr = ['SUN','MON','TUE','WED','THU','FRI','SAT']
const optionDay = document.querySelectorAll('.op')[0];
const optionDan = document.querySelectorAll('.op')[1];

//buttons
const dateBtn =  document.querySelector(".date");
const colorBtn = document.querySelector(".color");
const halfBtn = document.querySelector(".half");

colorBtn.addEventListener('click',()=>{
    const clockScreen = document.querySelector('.clock-section');
    clockScreen.style.backgroundColor = makeRandColor();
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    if(r+g+b < 280){
        clock.style.color = 'white';
        optionDay.style.color = 'white';
        optionDan.style.color = 'white';
    } else {
        clock.style.color = 'black';
        optionDay.style.color = 'black';
        optionDan.style.color = 'black';
    }

    return `rgb(${r},${g},${b})`;
}

function getTime(){
    let time =  new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    let year = time.getFullYear().toString().substring(2);
    let month = time.getMonth() + 1;
    let date = time.getDate();

    let day = dayArr[time.getDay()];
    

    clock.innerText 
    = `${hours < 10 ? `0${hours}` : hours
     }:${minutes < 10 ? `0${minutes}` : minutes
     }:${seconds < 10 ? `0${seconds}` : seconds }`;
    //innerHTML이랑 innerText 차이가 뭘까??

    halfBtn.addEventListener('click', () => {
        if(hours > 12){
            optionDan.innerText = 'pm'
        } else {
            optionDan.innerText = 'am'
        }

        optionDan.classList.toggle('op');
    })

    dateBtn.addEventListener('click', () =>{
       optionDay.innerText = `${year}.${month <10? `0${month}` : month}.${date}.${day}`;
       optionDay.classList.toggle('op');
    })
}


function working(){
    getTime ();
    setInterval(getTime, 1000);
    //setInterval을 하면 1초마다 값이 새로 불러진다..! 
    //그래서 요일도 이상하게 반응한다.. 버튼이 잘 안먹혀 이런..
}

working();
