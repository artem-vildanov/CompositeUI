import { Component } from "./Component.js"

export abstract class ComponentImp implements Component {
    protected html: string | null = null;
    protected text: string;
    protected cssClass: string;
    protected constructor(text: string, cssClass: string) {
        this.text = text;
        this.cssClass = cssClass;
    }

    setColor() {
        
    }

    setFontSize() {
        
    }

    setText() {
        
    }

    setCss() {
        
    }

    build(): void {
        
    }

    renderHtml(): string {
        if (!this.html) {
            throw Error("failed to render html")
        }

        return this.html;
    }
}
