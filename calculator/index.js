class Calculation {

    calculate(x,y,operation){
        switch (operation) {
            case '+':
                return x + y;
            case '-':
                return x - y;
            case '/':
                return x / y;
            case '*':
                return x * y;       
            default:
                return 'error';
        }
    }

    isOperation(data){
        switch (data) {
            case '+':
                return true;
            case '-':
                return true;
            case '*':
                return true;
            case '/':
                return true;          
            default:
                return false;
        }
    }
}

class Display{
    
    constructor(){
        this.display = '';
        this.validDisplay = true;
        this. temp = new Calculation();
    }

    updateDisplay(){
        document.getElementById("display").innerHTML = this.display;
    }
   
    buttonClick(data){
 
        if(this.temp.isOperation(data) && this.validDisplay){
            this.display += data; 
            this.updateDisplay();
            this.validDisplay = false;
        }else{
            
            if(!this.temp.isOperation(data)){
                this.display += data; 
                this.updateDisplay();
                this.validDisplay = true;
            }
        }  

      
    }

    deleteDisplay(){

        if((this.display.length - 1) <= 0){
            this.resetDisplay();
        }else{
            
            if(this.temp.isOperation(this.display.charAt(this.display.length - 1))){
               
                this.validDisplay = true;
            }

            this.display =  this.display.slice(0,this.display.length - 1);
          
            this.updateDisplay();
        }
      
        
    }
    
    resetDisplay(){
        this.display = '';
        this.updateDisplay();
        this.validDisplay = true;
    }

}

//initilize display

let calculator = new Display();


const buttons = [
    document.getElementById("item-0"),
    document.getElementById("item-1"),
    document.getElementById("item-2"),
    document.getElementById("item-3"),
    document.getElementById("item-4"),
    document.getElementById("item-5"),
    document.getElementById("item-6"),
    document.getElementById("item-7"),
    document.getElementById("item-8"),
    document.getElementById("item-9"),
    document.getElementById("item-add"),        //10
    document.getElementById("item-subtract"),   //11
    document.getElementById("item-multiply"),   //12
    document.getElementById("item-divide"),     //13
    document.getElementById("item-dot"),        //14
    document.getElementById("item-del"),        //15
    document.getElementById("item-reset"),      //16
    document.getElementById("item-equal"),      //17
];


for (let index = 0; index <=9; index++) {
    buttons[index].onclick = function(){calculator.buttonClick(index)};
}

buttons[10].onclick = function(){calculator.buttonClick('+')};
buttons[11].onclick = function(){calculator.buttonClick('-')};
buttons[12].onclick = function(){calculator.buttonClick('*')};
buttons[13].onclick = function(){calculator.buttonClick('/')};
buttons[14].onclick = function(){calculator.buttonClick('.')};

buttons[15].onclick = function(){calculator.deleteDisplay()};
buttons[16].onclick = function(){calculator.resetDisplay()};
