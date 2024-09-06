class Noticias extends HTMLElement {
    static get observedAttributes() {
        return ['img', 'alt', 'titulo','img1','img2','img3', 'button'];
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
			<link rel="stylesheet" href="./src/components/componente3/componente3.css">
			
		<div class="div">

			
			
            
            <h1 class="titulo" >ÚLTIMAS NOTICIAS Y ARTÍCULOS</h1>
            
            
            <div class="opciones">
            <button class="boton">ALL NEWS</button>
            <img class="img" src=${this.img} alt=${this.alt}>
            <img class="img" src=${this.img1} alt=${this.alt}>
            <img class="img2" src=${this.img2} alt=${this.alt}>
            <img class="img3" src=${this.img3} alt=${this.alt}>
            </div>
            
           
          
           
       
		</div>	
			
    `;
    }
}

customElements.define('product-noticias', Noticias);
export default Noticias;