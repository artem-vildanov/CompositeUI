import { CompositeComponent } from "../CompositeComponent.js";

export class ImageBoxComposite extends CompositeComponent
{
    private readonly backgroundImageUrl: string;
    constructor(backgroundImageUrl: string = "baseImage.jpg", cssClass: string = 'rounded p-5 w-100 d-flex flex-column justify-content-center align-items-center') {
        super('', cssClass);
        this.backgroundImageUrl = backgroundImageUrl;
        this.html = this.makeCompositeHtml();
    }

    protected makeCompositeHtml(): string {
        const childrenComponentsHtmlGroup: Array<string> = this.makeChildrenComponentsHtml();
        const childrenHtml: string = childrenComponentsHtmlGroup.join("");
        const backgroundImageStyles = `style="background-image: url('${this.backgroundImageUrl}'); background-size: cover; background-position: center;"`;
        return `<div class="${this.cssClass}" ${backgroundImageStyles}>
                    ${childrenHtml}
                </div>`
    }
}