/**
 * 经典洗牌法
 * 每次从数组len-1里边随机一个索引，将该索引的值与最后一个索引值进行交换
 **/
class Shuffle{
    constructor(){
        this.calculation();
    }

    calculation(){
        let cardsNu:number = 54;
        let cardsArr:Array<any> = new Array();
        for(let i:number=1;i<=54;i++){
            cardsArr.push(i);
        }
        let len:number = cardsArr.length;
        let tempNu:number = 0;
        let swapNu:number = 0;
        let firstNu:number = 0;
        let secondNu:number = 0;
        while(len>1){
            tempNu = Math.floor(Math.random()*(len-1));
            firstNu = cardsArr[tempNu];
            secondNu = cardsArr[len - 1];
            swapNu = firstNu;
            cardsArr[tempNu] = secondNu;
            cardsArr[len - 1] = swapNu;
            len--;
        }
        console.log(cardsArr);
    }
}