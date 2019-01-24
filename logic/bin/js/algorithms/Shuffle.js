/**
 * 经典洗牌法
 * 每次从数组len-1里边随机一个索引，将该索引的值与最后一个索引值进行交换
 **/
var Shuffle = /** @class */ (function () {
    function Shuffle() {
        this.calculation();
    }
    Shuffle.prototype.calculation = function () {
        var cardsNu = 54;
        var cardsArr = new Array();
        for (var i = 1; i <= 54; i++) {
            cardsArr.push(i);
        }
        var len = cardsArr.length;
        var tempNu = 0;
        var swapNu = 0;
        var firstNu = 0;
        var secondNu = 0;
        while (len > 1) {
            tempNu = Math.floor(Math.random() * (len - 1));
            firstNu = cardsArr[tempNu];
            secondNu = cardsArr[len - 1];
            swapNu = firstNu;
            cardsArr[tempNu] = secondNu;
            cardsArr[len - 1] = swapNu;
            len--;
        }
        console.log(cardsArr);
    };
    return Shuffle;
}());
//# sourceMappingURL=Shuffle.js.map