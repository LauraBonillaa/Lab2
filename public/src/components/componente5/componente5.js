class Banner2 extends HTMLElement {
    static get observedAttributes() {
        return ['img', 'alt', 'titulo', 'button', 'subtitulo'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
			<link rel="stylesheet" href="./src/components/componente5/componente5.css">
			
		<div class="div">
             <div class="textos">
             <h1 class="titulo">${this.titulo}</h1>
            <h4 class='subtitulo'>${this.subtitulo}</h4>
            
            
            
           <button class="boton">${this.button}</button>
           </div>

           <img class="img" src=${this.img} alt=${this.alt}>
            
            
            
            
           
          
           
       
		</div>	
			
    `;
    }
}

customElements.define('product-banner2', Banner2);
export default Banner2;