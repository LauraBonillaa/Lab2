class Comunidad extends HTMLElement {
    static get observedAttributes() {
        return ['img', 'alt'];
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
			<link rel="stylesheet" href="./src/components/componente6/componente6.css">
			
		<div class="div">
            
         
           
            
            
            
           
           

           <img class="img" src=${this.img} alt=${this.alt}>
            
            
            
            
           
          
           
       
		</div>	
			
    `;
    }
}

customElements.define('product-comunidad', Comunidad);
export default Comunidad;