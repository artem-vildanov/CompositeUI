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
        this.type = ''; // only for InputFieldLeaf
        this.cssClass = '';
        this.listItemCssClass = ''; // only for ListComposite
        this.childrenComponents = new Array(); // only for CompositeComponents
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