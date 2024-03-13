var ViewComponent = /** @class */ (function () {
    function ViewComponent(viewComponent, childrenComponents) {
        this.viewComponent = viewComponent;
        this.viewComponent.addChildrenComponents(childrenComponents);
        this.html = this.viewComponent.renderHtml();
    }
    ViewComponent.prototype.getComponent = function () {
        return this.viewComponent;
    };
    ViewComponent.prototype.renderView = function () {
        return this.html;
    };
    return ViewComponent;
}());
export { ViewComponent };
//# sourceMappingURL=ViewComponent.js.map