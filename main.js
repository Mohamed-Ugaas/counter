

let counterElement = document.querySelector(".counter");
let decrementButton = document.querySelector(".decrement");
let incrementButton = document.querySelector(".increment");
let restbtn = document.querySelector(".rest")

    let counterValue = 0;

    function updateCounter(value) {
        counterValue = value;
        counterElement.textContent = counterValue;

        if (counterValue === 7) {
            document.body.style.backgroundColor = "lightblue";
        }
         else {
           
            document.body.style.backgroundColor = "white";
        }
       
        const colors = {
            1: "red",
            2: "blue",
            3: "green",
            4: "black",
            5: "orange"
        };
       
        if (colors[counterValue]) {
            document.body.style.backgroundColor = colors[counterValue];
        }
    }

    decrementButton.addEventListener("click", () => {
        if (counterValue > 0) {
            updateCounter(counterValue - 1);
        }
    });

    incrementButton.addEventListener("click", () => {
        updateCounter(counterValue + 1);
    });
    restbtn.addEventListener("click", ()=>{
        if(counterElement == 0){
            
        }
    })

    
    updateCounter(counterValue);






