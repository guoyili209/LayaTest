//2倍均值法
var RedEnvelope = /** @class */ (function () {
    function RedEnvelope() {
        this.randomCalculation();
    }
    RedEnvelope.prototype.randomCalculation = function () {
        var amount = 10;
        var min = 0.01;
        var count = 10;
        var rndNu = 0;
        while (count > 0) {
            rndNu = parseFloat(Math.max(min, Math.random() * (amount / count * 2)).toFixed(2));
            amount -= rndNu;
            count -= 1;
            console.log(rndNu);
            if (count == 1) {
                rndNu = parseFloat(amount.toFixed(2));
                console.log(rndNu);
                count = 0;
            }
        }
    };
    return RedEnvelope;
}());
//# sourceMappingURL=RedEnvelope.js.map