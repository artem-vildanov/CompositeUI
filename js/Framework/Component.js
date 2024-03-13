var Component = /** @class */ (function () {
    function Component(text, cssClass) {
        this.html = '';
        this.text = text;
        this.cssClass = cssClass;
    }
    Component.prototype.renderHtml = function () {
        return this.html;
    };
    return Component;
}());
export { Component };
//# sourceMappingURL=Component.js.map