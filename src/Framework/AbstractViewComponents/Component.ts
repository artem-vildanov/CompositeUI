
export interface Component {
    setColor(): any;
    setFontSize(): any;
    setCss(): any;
    setText(): any;
    build(): void;   
    renderHtml(): string; 
}