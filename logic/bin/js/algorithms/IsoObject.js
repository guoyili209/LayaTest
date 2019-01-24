var IsoObject = /** @class */ (function () {
    function IsoObject() {
    }
    Object.defineProperty(IsoObject.prototype, "depth", {
        /**
        * 返回形变后的层深
        */
        get: function () {
            return (this.position.x + this.position.z) * .866 - this.position.y * .707;
        },
        enumerable: true,
        configurable: true
    });
    return IsoObject;
}());
//# sourceMappingURL=IsoObject.js.map