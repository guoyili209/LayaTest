var Point = Laya.Point;
var IsoUtil = /** @class */ (function () {
    function IsoUtil() {
        // 1.2247的精确计算版本
        this.Y_CORRECT = Math.cos(-Math.PI / 6) * Math.SQRT2;
    }
    IsoUtil.prototype.isoToScreen = function (pos) {
        var screenX = pos.x - pos.z;
        var screenY = pos.y * this.Y_CORRECT + (pos.x + pos.z) * 0.5;
        return new Point(screenX, screenY);
    };
    IsoUtil.prototype.screenToIos = function (point) {
        var xpos = point.y + point.x * .5;
        var ypos = 0;
        var zpos = point.y - point.x * .5;
        return new Point3D(xpos, ypos, zpos);
    };
    return IsoUtil;
}());
//# sourceMappingURL=IsoUtil.js.map