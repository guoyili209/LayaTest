//2倍均值法
class RedEnvelope{
    constructor(){
        this.randomCalculation();
    }
    randomCalculation(){
        let amount:number = 10;
        let min:number = 0.01;
        let count:number = 10;
        let rndNu:number = 0;
        while(count>0){
            rndNu = parseFloat(Math.max(min,Math.random()*(amount/count*2)).toFixed(2));
            amount -= rndNu;
            count -= 1;
            console.log(rndNu)
            if(count == 1){
                rndNu = parseFloat(amount.toFixed(2));
                console.log(rndNu)
                count = 0;
            }
        }
    }
}