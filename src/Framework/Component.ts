export abstract class Component {
    protected html: string = '';
    protected text: string;
    protected cssClass: string;
    protected constructor(text: string, cssClass: string) {
        this.text = text;
        this.cssClass = cssClass;
    }
    renderHtml(): string {
        return this.html;
    }
}
