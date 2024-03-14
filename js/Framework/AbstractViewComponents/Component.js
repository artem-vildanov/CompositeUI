var Component = /** @class */ (function () {
    function Component(componentParams) {
        this.html = null;
        this.componentParams = componentParams;
    }
    Component.prototype.renderHtml = function () {
        if (!this.html) {
            throw Error("failed to render html");
        }
        return this.html;
    };
    return Component;
}());
export { Component };
//# sourceMappingURL=Component.js.map