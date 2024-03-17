import { ComponentParams } from "./ComponentParams.js";
import { CompositeComponentFactory } from "./CompositeComponentFactory.js";
import { LeafComponentFactory } from "./LeafComponentFactory.js";
var ComponentBuilder = /** @class */ (function () {
    function ComponentBuilder() {
        this.componentParams = new ComponentParams();
    }
    ComponentBuilder.makeComponent = function () {
        return new ComponentBuilder();
    };
    ComponentBuilder.prototype.setColor = function (color) {
        this.componentParams.color = "color: ".concat(color, "; ");
        return this;
    };
    ComponentBuilder.prototype.setBackgroundColor = function (backgroundColor) {
        this.componentParams.backgroundColor = "background-color: ".concat(backgroundColor, "; ");
        return this;
    };
    ComponentBuilder.prototype.setBackgroundImage = function (imageUrl) {
        if (imageUrl === void 0) { imageUrl = 'baseImage.jpg'; }
        this.componentParams.backgroundImage = "background-image: url('".concat(imageUrl, "'); background-size: cover; background-position: center; ");
        return this;
    };
    ComponentBuilder.prototype.setFontSize = function (fontSize) {
        this.componentParams.fontSize = "font-size: ".concat(fontSize, "; ");
        return this;
    };
    ComponentBuilder.prototype.setFontStyle = function (fontStyle) {
        this.componentParams.fontStyle = "font-style: ".concat(fontStyle, "; ");
        return this;
    };
    ComponentBuilder.prototype.setFontWeight = function (fontWeight) {
        this.componentParams.fontWeight = "font-weight: ".concat(fontWeight, "; ");
        return this;
    };
    ComponentBuilder.prototype.setWidth = function (width) {
        this.componentParams.width = "width: ".concat(width, "; ");
        return this;
    };
    ComponentBuilder.prototype.setHeight = function (height) {
        this.componentParams.height = "height: ".concat(height, "; ");
        return this;
    };
    ComponentBuilder.prototype.setMargin = function (margin, marginLeft, marginRight, marginTop, marginBottom) {
        if (margin === void 0) { margin = ''; }
        if (marginLeft === void 0) { marginLeft = margin; }
        if (marginRight === void 0) { marginRight = margin; }
        if (marginTop === void 0) { marginTop = margin; }
        if (marginBottom === void 0) { marginBottom = margin; }
        this.componentParams.margin = "margin: ".concat(marginTop, " ").concat(marginRight, " ").concat(marginBottom, " ").concat(marginLeft, "; ");
        return this;
    };
    ComponentBuilder.prototype.setPadding = function (padding, paddingLeft, paddingRight, paddingTop, paddingBottom) {
        if (padding === void 0) { padding = ''; }
        if (paddingLeft === void 0) { paddingLeft = padding; }
        if (paddingRight === void 0) { paddingRight = padding; }
        if (paddingTop === void 0) { paddingTop = padding; }
        if (paddingBottom === void 0) { paddingBottom = padding; }
        this.componentParams.padding = "padding: ".concat(paddingTop, " ").concat(paddingRight, " ").concat(paddingBottom, " ").concat(paddingLeft, "; ");
        return this;
    };
    ComponentBuilder.prototype.setText = function (text) {
        this.componentParams.text = text;
        return this;
    };
    ComponentBuilder.prototype.setCssClass = function (css, listItemCss) {
        if (listItemCss === void 0) { listItemCss = ''; }
        this.componentParams.cssClass = css;
        this.componentParams.listItemCssClass = listItemCss;
        return this;
    };
    ComponentBuilder.prototype.addChildrenComponents = function (childrenComponents) {
        var _this = this;
        childrenComponents.forEach(function (childComponent) {
            _this.componentParams.childrenComponents.push(childComponent);
        });
        return this;
    };
    ComponentBuilder.prototype.buildCompositeComponent = function () {
        return new CompositeComponentFactory(this.componentParams);
    };
    ComponentBuilder.prototype.buildLeafComponent = function () {
        return new LeafComponentFactory(this.componentParams);
    };
    return ComponentBuilder;
}());
export { ComponentBuilder };
//# sourceMappingURL=ComponentBuilder.js.map