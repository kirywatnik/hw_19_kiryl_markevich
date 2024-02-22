//1
/*
function Calculator(){
    this.a = 0;
    this.b = 0;
    this.read = function(){
        this.a = prompt('первое значение');
        this.b = prompt('второе значение');
    }
    this.sum = function(){
        return  console.log(Number(this.a)+Number(this.b));
    }
    this.mul = function(){
        return console.log(this.a*this.b);
    }
}

let calc = new Calculator();
console.log(calc.a);
calc.read();
calc.sum();
calc.mul();
*/
//2
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        let a = prompt('Сколько прибавить?');
        this.value = this.value + Number(a);
        console.log(this.value);
    }
}
let accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();
//3
function TextFormat(){
    this.listSymbols = ['*', '/', '_'];
    this.text = '';
    this.getText = function(){
        this.text = prompt('Введите текст');
    }
    this.checkWords = function(){
        for(let i=0; i<this.listSymbols.length;i++){
            if(this.text.includes(this.listSymbols[i])){
                this.text=prompt('Введите нвоый текст');
                break;
            }
        }
    }
    this.formatText = function(){
        let index = this.text.length;
        let str1 = this.text.slice(0, index/2);
        let str2 = this.text.slice(index/2);
        let strAll = str1 + ' это середина '+str2;

        console.log('Это ваш текст '+ strAll+ ' это конец вашего текста'); 
    }
}
let string = new TextFormat();
string.getText();
string.checkWords();
string.formatText();


