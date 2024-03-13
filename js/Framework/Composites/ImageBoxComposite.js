var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { CompositeComponent } from "../CompositeComponent.js";
var ImageBoxComposite = /** @class */ (function (_super) {
    __extends(ImageBoxComposite, _super);
    function ImageBoxComposite(backgroundImageUrl, cssClass) {
        if (backgroundImageUrl === void 0) { backgroundImageUrl = "baseImage.jpg"; }
        if (cssClass === void 0) { cssClass = 'rounded p-5 w-100 d-flex flex-column justify-content-center align-items-center'; }
        var _this = _super.call(this, '', cssClass) || this;
        _this.backgroundImageUrl = backgroundImageUrl;
        _this.html = _this.makeCompositeHtml();
        return _this;
    }
    ImageBoxComposite.prototype.makeCompositeHtml = function () {
        var childrenComponentsHtmlGroup = this.makeChildrenComponentsHtml();
        var childrenHtml = childrenComponentsHtmlGroup.join("");
        var backgroundImageStyles = "style=\"background-image: url('".concat(this.backgroundImageUrl, "'); background-size: cover; background-position: center;\"");
        return "<div class=\"".concat(this.cssClass, "\" ").concat(backgroundImageStyles, ">\n                    ").concat(childrenHtml, "\n                </div>");
    };
    return ImageBoxComposite;
}(CompositeComponent));
export { ImageBoxComposite };
//# sourceMappingURL=ImageBoxComposite.js.map