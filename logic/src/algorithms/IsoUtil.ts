import Point = Laya.Point;
class IsoUtil{
    // 1.2247的精确计算版本
    Y_CORRECT:number = Math.cos(-Math.PI / 6) * Math.SQRT2;
    constructor(){

    }
    isoToScreen(pos:Point3D):Point { 
        let screenX:number = pos.x - pos.z; 
        let screenY:number = pos.y * this.Y_CORRECT + (pos.x + pos.z) * 0.5;
        return new Point(screenX, screenY);
    }
    screenToIos(point:Point):Point3D{
        var xpos:number = point.y + point.x * .5;
        var ypos:number = 0;
        var zpos:number = point.y - point.x * .5;
        return new Point3D(xpos, ypos, zpos);
    }
}