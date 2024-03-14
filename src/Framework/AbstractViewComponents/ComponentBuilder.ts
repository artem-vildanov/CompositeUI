import {ComponentParams} from "./ComponentParams.js";
import {Component} from "./Component.js";
import {CompositeComponentFactory} from "./CompositeComponentFactory.js";
import {LeafComponentFactory} from "./LeafComponentFactory.js";

export class ComponentBuilder {

     private componentParams: ComponentParams = new ComponentParams();

     static makeComponent(): ComponentBuilder {
          return new ComponentBuilder()
     }

     setColor(color: string): ComponentBuilder {
          this.componentParams.color = `color: ${color}; `
          return this
     }

     setBackgroundColor(backgroundColor: string): ComponentBuilder {
          this.componentParams.backgroundColor = `background-color: ${backgroundColor}; `
          return this
     }

     setBackgroundImage(imageUrl: string = 'baseImage.jpg'): ComponentBuilder {
          this.componentParams.backgroundImage = `background-image: url('${imageUrl}'); background-size: cover; background-position: center; `
          return this
     }

     setFontSize(fontSize: string): ComponentBuilder {
          this.componentParams.fontSize = `font-size: ${fontSize}; `
          return this
     }

     setFontStyle(fontStyle: string): ComponentBuilder {
          this.componentParams.fontStyle = `font-style: ${fontStyle}; `
          return this
     }

     setFontWeight(fontWeight: string): ComponentBuilder {
          this.componentParams.fontWeight = `font-weight: ${fontWeight}; `
          return this
     }

     setWidth(width: string): ComponentBuilder {
          this.componentParams.width = `width: ${width}; `
          return this
     }

     setHeight(height: string): ComponentBuilder {
          this.componentParams.height = `height: ${height}; `
          return this
     }

     setMargin(
         margin: string = '',
         marginLeft: string = margin,
         marginRight: string = margin,
         marginTop: string = margin,
         marginBottom: string = margin,
     ): ComponentBuilder {
          this.componentParams.margin = `margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft}; `
          return this
     }

     setPadding(
         padding: string = '',
         paddingLeft: string = padding,
         paddingRight: string = padding,
         paddingTop: string = padding,
         paddingBottom: string = padding
     ): ComponentBuilder {
          this.componentParams.padding = `padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}; `
          return this
     }

     setText(text: string): ComponentBuilder {
          this.componentParams.text = text
          return this
     }

     setCss(css: string, listItemCss: string = ''): ComponentBuilder {
          this.componentParams.css = css
          this.componentParams.listItemCss = listItemCss
          return this
     }

     addChildrenComponents(childrenComponents: Array<Component>): ComponentBuilder {
          childrenComponents.forEach((childComponent: Component) => {
             this.componentParams.childrenComponents.push(childComponent);
          })

          return this
     }

     buildCompositeComponent(): CompositeComponentFactory {
          return new CompositeComponentFactory(this.componentParams);
     }

     buildLeafComponent(): LeafComponentFactory {
          return new LeafComponentFactory(this.componentParams);
     }
}

