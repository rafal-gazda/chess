var myVar;
var timePlayer1;
var timePlayer2;
var audio = new Audio('Chess Clock.mp3');

var button = document.getElementsByClassName("form__button")[0];
var main = document.getElementsByClassName("main")[0];

var timeText1 = document.getElementsByClassName("main__time")[0];
var timeText2 = document.getElementsByClassName("main__time")[1];

var buttonClock1 = document.getElementsByClassName("main__box")[0];
var buttonClock2 = document.getElementsByClassName("main__box")[1];
var exit = document.getElementsByClassName("exit")[0];

class Time {
    constructor(minute){
        this.minute = minute;
        this.second = 60;
        this.stringMinute = "";
        this.stringSecond = "";
    }
    start(){
        if(this.minute != 0 || this.second != 0){
            if(this.second != 0){
                this.second = this.second - 1;
            }
            else{
                this.minute = this.minute - 1;
                this.second = 59;
            }
        }
    }
    write(){
        if(this.minute < 10){
            this.stringMinute = "0" + this.minute;
        }
        else{
            this.stringMinute = "" + this.minute;
        }
        if(this.second < 10){
            this.stringSecond = "0" + this.second;
        }
        else{
            this.stringSecond = "" + this.second;
        }
    }
}

const time1 = new Time();
const time2 = new Time();

button.addEventListener('click', function(){
    main.style.top = "0vh";
    timePlayer1 = document.getElementsByClassName('form__input')[0].value;
    timePlayer2 = document.getElementsByClassName('form__input')[1].value;
    
    time1.minute = timePlayer1 - 1;
    time2.minute = timePlayer2 - 1;
});

    

buttonClock1.addEventListener("click", function(){
    clearInterval(myVar);
    buttonClock1.classList.add("main__box--opacity");
    buttonClock2.classList.remove("main__box--opacity");
    audio.play();
    myVar = setInterval(function(){ stoper(time2); }, 1000);  
});

buttonClock2.addEventListener("click", function(){
    clearInterval(myVar);
    buttonClock2.classList.add("main__box--opacity");
    buttonClock1.classList.remove("main__box--opacity");
    audio.play();
    myVar = setInterval(function(){ stoper(time1); }, 1000); 
});

function stoper(czasObject){
    czasObject.start();
    czasObject.write();
    if(czasObject == time1){
        timeText1.innerHTML = czasObject.stringMinute + ":" + czasObject.stringSecond;
    }
    else{
        timeText2.innerHTML = czasObject.stringMinute + ":" + czasObject.stringSecond;
    }
    
    if(czasObject.minute == 0 && czasObject.time == 0){
        clearInterval(myVar);
    }
}

exit.addEventListener('click', function(){
    document.location.reload();
});










