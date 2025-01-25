import { useEffect } from "react";
import "../styles/timer.css"

function updateCountdown(count, ticker){
    const digits = document.querySelectorAll(ticker);

    var first_dig = Math.floor(count/10);
    var second_dig = count%10;
    
    var found_first = false;
    var found_second = false;

    if(first_dig == 0)(found_first = true);

    for(var i = 0; i < digits.length; i++){
        digits[i].classList.remove('highlight')
    }
    

    for(var j = 0; j < digits.length - 1; j++){
        if(found_first){
            if(digits[j].innerHTML == second_dig || digits[j+1].innerHTML == second_dig){
                found_second = true;
                if(digits[j].innerHTML == second_dig){
                    digits[j].classList.add('highlight');
                }else{
                    digits[j+1].classList.add('highlight');
                  
                }
            }
        }
        else{
            if(digits[j].innerHTML == first_dig && digits[j+1].innerHTML == second_dig){
                found_first = true;
                found_second = true;
                digits[j].classList.add('highlight');
                digits[j+1].classList.add('highlight');
               
            }
        }

        if(found_first && found_second){
            break;
        }
    }
}

function Countdown(){
    var deadline = new Date("Feb 15, 2025 09:00:00").getTime();
    
    useEffect(() => {
        const interval = setInterval(() => {
            var now = new Date().getTime();
            var date = deadline - now;

            var days = Math.floor(date / (1000 * 60 * 60 * 24));
            var hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((date % (1000 * 60)) / 1000);
            

            updateCountdown(seconds,".digit-seconds");
            updateCountdown(minutes,".digit-minutes");
            updateCountdown(hours,".digit-hours");
            updateCountdown(days,".digit-days");
        }, 1000);
        
        return () => clearInterval(interval);
    });

    
    return(
    <div id="main-container">
        <div id="timer-header">Hacking starts in...</div>
        <div id="timer-content">
            <div id="timer">
                <div id="days-timer">
                    <div className="divisors">
                        <div className="digit-days">1</div>
                        <div className="digit-days">0</div>
                        <div className="digit-days">1</div>
                        <div className="digit-days">1</div>
                        <div className="digit-days">6</div>
                        <div className="digit-days">0</div>
                        <div className="digit-days">1</div>
                        <div className="digit-days">7</div>
                        <div className="digit-days">1</div>
                        <div className="digit-days">8</div>
                        <div className="digit-days">1</div>
                        <div className="digit-days">9</div>
                        <div className="digit-days">2</div>
                        <div className="digit-days">0</div>
                        <div className="digit-days">2</div>
                        <div className="digit-days">1</div>
                        <div className="digit-days">2</div>
                        <div className="digit-days">2</div>
                        <div className="digit-days">6</div>
                        <div className="digit-days">2</div>
                        <div className="digit-days">7</div>
                        <div className="digit-days">2</div>
                        <div className="digit-days">8</div>
                        <div className="digit-days">2</div>
                        <div className="digit-days">9</div>
                        <div className="digit-days">3</div>
                        <div className="digit-days">0</div>
                        <div className="digit-days">3</div>
                        <div className="digit-days">1</div>
                        <div className="digit-days">3</div>
                        <div className="digit-days">2</div>
                        <div className="digit-days">3</div>
                        <div className="digit-days">3</div>
                        <div className="digit-days">6</div>
                        <div className="digit-days">3</div>
                        <div className="digit-days">7</div>
                        <div className="digit-days">3</div>
                        <div className="digit-days">8</div>
                    </div>
                    <div className="divisors">
                        <div className="digit-days">3</div>
                        <div className="digit-days">9</div>
                        <div className="digit-days">4</div>
                        <div className="digit-days">0</div>
                        <div className="digit-days">4</div>
                        <div className="digit-days">1</div>
                        <div className="digit-days">4</div>
                        <div className="digit-days">2</div>
                        <div className="digit-days">4</div>
                        <div className="digit-days">3</div>
                        <div className="digit-days">4</div>
                        <div className="digit-days">4</div>
                        <div className="digit-days">6</div>
                        <div className="digit-days">4</div>
                        <div className="digit-days">7</div>
                        <div className="digit-days">4</div>
                        <div className="digit-days">8</div>
                        <div className="digit-days">4</div>
                        <div className="digit-days">9</div>
                        <div className="digit-days">5</div>
                        <div className="digit-days">0</div>
                        <div className="digit-days">5</div>
                        <div className="digit-days">1</div>
                        <div className="digit-days">5</div>
                        <div className="digit-days">2</div>
                        <div className="digit-days">5</div>
                        <div className="digit-days">3</div>
                        <div className="digit-days">5</div>
                        <div className="digit-days">4</div>
                        <div className="digit-days">5</div>
                        <div className="digit-days">5</div>
                        <div className="digit-days">6</div>
                        <div className="digit-days">5</div>
                        <div className="digit-days">7</div>
                        <div className="digit-days">5</div>
                        <div className="digit-days">8</div>
                        <div className="digit-days">5</div>
                        <div className="digit-days">9</div>
                    </div>
                </div>

                <div id="hours-timer">
                    <div className="divisors">

                        <div className="digit-hours">1</div>
                        <div className="digit-hours">3</div>
                        <div className="digit-hours">2</div>
                        <div className="digit-hours">3</div>
                        <div className="digit-hours">3</div>
                        <div className="digit-hours">6</div>
                        <div className="digit-hours">3</div>
                        <div className="digit-hours">7</div>
                        <div className="digit-hours">3</div>
                        <div className="digit-hours">8</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">0</div>
                      
                        <div className="digit-hours">2</div>

                        <div className="digit-hours">1</div>
                        <div className="digit-hours">9</div>
                        <div className="digit-hours">8</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">6</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">0</div>
                        <div className="digit-hours">3</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">4</div>
                        <div className="digit-hours">2</div>
                        <div className="digit-hours">2</div>
                        <div className="digit-hours">4</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">6</div>
                        <div className="digit-hours">0</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">7</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">8</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">9</div>
                        <div className="digit-hours">2</div>
                        <div className="digit-hours">0</div>
                    </div>
                    <div className="divisors">
                       
                        <div className="digit-hours">3</div>
                        <div className="digit-hours">5</div>
                        <div className="digit-hours">4</div>
                        <div className="digit-hours">5</div>
                        <div className="digit-hours">5</div>
                        <div className="digit-hours">6</div>
                        <div className="digit-hours">5</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">4</div>
                        <div className="digit-hours">2</div>
                        <div className="digit-hours">4</div>
                        <div className="digit-hours">7</div>
                        <div className="digit-hours">5</div>
                        <div className="digit-hours">8</div>
                        <div className="digit-hours">5</div>
                        <div className="digit-hours">9</div>
                        <div className="digit-hours">2</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">2</div>
                        <div className="digit-hours">4</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">7</div>
                        <div className="digit-hours">2</div>
                        <div className="digit-hours">3</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">5</div>
                        <div className="digit-hours">1</div>
                        <div className="digit-hours">8</div>

                        <div className="digit-hours">1</div>
                        <div className="digit-hours">5</div>
                        <div className="digit-hours">2</div>
                        <div className="digit-hours">3</div>
                        <div className="digit-hours">9</div>
                        <div className="digit-hours">4</div>
                        <div className="digit-hours">0</div>
                        <div className="digit-hours">4</div>
                        <div className="digit-hours">5</div>
                        
                    </div>
                </div>

                <div id="minutes-timer">
                <div className="divisors">
                        <div className="digit-minutes">3</div>
                        <div className="digit-minutes">9</div>
                        <div className="digit-minutes">4</div>
                        <div className="digit-minutes">0</div>
                        <div className="digit-minutes">4</div>
                        <div className="digit-minutes">1</div>
                        <div className="digit-minutes">4</div>
                        <div className="digit-minutes">2</div>
                        <div className="digit-minutes">4</div>
                        <div className="digit-minutes">3</div>
                        <div className="digit-minutes">4</div>
                        <div className="digit-minutes">4</div>
                        <div className="digit-minutes">6</div>
                        <div className="digit-minutes">4</div>
                        <div className="digit-minutes">7</div>
                        <div className="digit-minutes">4</div>
                        <div className="digit-minutes">8</div>
                        <div className="digit-minutes">4</div>
                        <div className="digit-minutes">9</div>
                        <div className="digit-minutes">5</div>
                        <div className="digit-minutes">0</div>
                        <div className="digit-minutes">5</div>
                        <div className="digit-minutes">1</div>
                        <div className="digit-minutes">5</div>
                        <div className="digit-minutes">2</div>
                        <div className="digit-minutes">5</div>
                        <div className="digit-minutes">3</div>
                        <div className="digit-minutes">5</div>
                        <div className="digit-minutes">4</div>
                        <div className="digit-minutes">5</div>
                        <div className="digit-minutes">5</div>
                        <div className="digit-minutes">6</div>
                        <div className="digit-minutes">5</div>
                        <div className="digit-minutes">7</div>
                        <div className="digit-minutes">5</div>
                        <div className="digit-minutes">8</div>
                        <div className="digit-minutes">5</div>
                        <div className="digit-minutes">9</div>
                    </div>
                    <div className="divisors">
                        <div className="digit-minutes">1</div>
                        <div className="digit-minutes">0</div>
                        <div className="digit-minutes">1</div>
                        <div className="digit-minutes">1</div>
                        <div className="digit-minutes">6</div>
                        <div className="digit-minutes">0</div>
                        <div className="digit-minutes">1</div>
                        <div className="digit-minutes">7</div>
                        <div className="digit-minutes">1</div>
                        <div className="digit-minutes">8</div>
                        <div className="digit-minutes">1</div>
                        <div className="digit-minutes">9</div>
                        <div className="digit-minutes">2</div>
                        <div className="digit-minutes">0</div>
                        <div className="digit-minutes">2</div>
                        <div className="digit-minutes">1</div>
                        <div className="digit-minutes">2</div>
                        <div className="digit-minutes">2</div>
                        <div className="digit-minutes">6</div>
                        <div className="digit-minutes">2</div>
                        <div className="digit-minutes">7</div>
                        <div className="digit-minutes">2</div>
                        <div className="digit-minutes">8</div>
                        <div className="digit-minutes">2</div>
                        <div className="digit-minutes">9</div>
                        <div className="digit-minutes">3</div>
                        <div className="digit-minutes">0</div>
                        <div className="digit-minutes">3</div>
                        <div className="digit-minutes">1</div>
                        <div className="digit-minutes">3</div>
                        <div className="digit-minutes">2</div>
                        <div className="digit-minutes">3</div>
                        <div className="digit-minutes">3</div>
                        <div className="digit-minutes">6</div>
                        <div className="digit-minutes">3</div>
                        <div className="digit-minutes">7</div>
                        <div className="digit-minutes">3</div>
                        <div className="digit-minutes">8</div>
                    </div>
                    
                </div>

                <div id="seconds-timer">
                    <div className="divisors">
                        <div className="digit-seconds">1</div>
                        <div className="digit-seconds">0</div>
                        <div className="digit-seconds">1</div>
                        <div className="digit-seconds">1</div>
                        <div className="digit-seconds">6</div>
                        <div className="digit-seconds">0</div>
                        <div className="digit-seconds">1</div>
                        <div className="digit-seconds">7</div>
                        <div className="digit-seconds">1</div>
                        <div className="digit-seconds">8</div>
                        <div className="digit-seconds">1</div>
                        <div className="digit-seconds">9</div>
                        <div className="digit-seconds">2</div>
                        <div className="digit-seconds">0</div>
                        <div className="digit-seconds">2</div>
                        <div className="digit-seconds">1</div>
                        <div className="digit-seconds">2</div>
                        <div className="digit-seconds">2</div>
                        <div className="digit-seconds">6</div>
                        <div className="digit-seconds">2</div>
                        <div className="digit-seconds">7</div>
                        <div className="digit-seconds">2</div>
                        <div className="digit-seconds">8</div>
                        <div className="digit-seconds">2</div>
                        <div className="digit-seconds">9</div>
                        <div className="digit-seconds">3</div>
                        <div className="digit-seconds">0</div>
                        <div className="digit-seconds">3</div>
                        <div className="digit-seconds">1</div>
                        <div className="digit-seconds">3</div>
                        <div className="digit-seconds">2</div>
                        <div className="digit-seconds">3</div>
                        <div className="digit-seconds">3</div>
                        <div className="digit-seconds">6</div>
                        <div className="digit-seconds">3</div>
                        <div className="digit-seconds">7</div>
                        <div className="digit-seconds">3</div>
                        <div className="digit-seconds">8</div>
                    </div>
                    <div className="divisors">
                        <div className="digit-seconds">3</div>
                        <div className="digit-seconds">9</div>
                        <div className="digit-seconds">4</div>
                        <div className="digit-seconds">0</div>
                        <div className="digit-seconds">4</div>
                        <div className="digit-seconds">1</div>
                        <div className="digit-seconds">4</div>
                        <div className="digit-seconds">2</div>
                        <div className="digit-seconds">4</div>
                        <div className="digit-seconds">3</div>
                        <div className="digit-seconds">4</div>
                        <div className="digit-seconds">4</div>
                        <div className="digit-seconds">6</div>
                        <div className="digit-seconds">4</div>
                        <div className="digit-seconds">7</div>
                        <div className="digit-seconds">4</div>
                        <div className="digit-seconds">8</div>
                        <div className="digit-seconds">4</div>
                        <div className="digit-seconds">9</div>
                        <div className="digit-seconds">5</div>
                        <div className="digit-seconds">0</div>
                        <div className="digit-seconds">5</div>
                        <div className="digit-seconds">1</div>
                        <div className="digit-seconds">5</div>
                        <div className="digit-seconds">2</div>
                        <div className="digit-seconds">5</div>
                        <div className="digit-seconds">3</div>
                        <div className="digit-seconds">5</div>
                        <div className="digit-seconds">4</div>
                        <div className="digit-seconds">5</div>
                        <div className="digit-seconds">5</div>
                        <div className="digit-seconds">6</div>
                        <div className="digit-seconds">5</div>
                        <div className="digit-seconds">7</div>
                        <div className="digit-seconds">5</div>
                        <div className="digit-seconds">8</div>
                        <div className="digit-seconds">5</div>
                        <div className="digit-seconds">9</div>
                    </div>
                </div>
            </div>
            <div id="labeling">
                <div>Days</div>
                <div>Hours</div>
                <div>Minutes</div>
                <div>Seconds</div>
            </div>
        </div>
    </div>
    );
}

export default Countdown;

