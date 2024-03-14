var ComponentParams = /** @class */ (function () {
    function ComponentParams() {
        this.color = '';
        this.backgroundColor = '';
        this.backgroundImage = '';
        this.fontSize = '';
        this.fontWeight = '';
        this.fontStyle = '';
        this.width = '';
        this.height = '';
        this.padding = '';
        this.margin = '';
        this.text = '';
        this.css = '';
        this.listItemCss = '';
        this.childrenComponents = new Array();
    }
    ComponentParams.prototype.getStyles = function () {
        return this.color
            + this.backgroundColor
            + this.backgroundImage
            + this.fontSize
            + this.fontWeight
            + this.fontStyle
            + this.width
            + this.height
            + this.padding
            + this.margin;
    };
    return ComponentParams;
}());
export { ComponentParams };
//# sourceMappingURL=ComponentParams.js.map