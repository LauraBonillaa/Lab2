class Cards extends HTMLElement {
    static get observedAttributes() {
        return ['img', 'alt', 'titulo', 'button', 'date'];
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
			<link rel="stylesheet" href="./src/components/componente4/componente4.css">
			
		<div class="div">

			
			
            
            
            
            
           
            
            <img class="img" src=${this.img} alt=${this.alt}>
            <p class="date" >${this.date}</p>
            <h1 class="titulo"  >${this.titulo}</h1>
            <div class="inferior">
            
           <button class="boton">LEER MÁS</button>
            
            </div>
            
            
           
          
           
       
		</div>	
			
    `;
    }
}

customElements.define('product-cards', Cards);
export default Cards;