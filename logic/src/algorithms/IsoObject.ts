class IsoObject{
    position:Point3D;
    constructor(){

    }
    /**
    * 返回形变后的层深
    */
    get depth():Number
    {
        return (this.position.x + this.position.z) * .866 - this.position.y * .707;
    }
}