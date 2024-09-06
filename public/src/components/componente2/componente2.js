class Banner extends HTMLElement {
    static get observedAttributes() {
        return ['img', 'alt', 'titulo', 'subtitulo','txtbutton'];
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
			<link rel="stylesheet" href="./src/components/componente2/componente2.css">
			
		<div class="div">

			
			<img class="img" src=${this.img} alt=${this.alt}>
            
            <h2 class="titulo" >Obligados a rebelarse. Perseguidos desde adentro </h2>
            <h3 src=${this.subtitulo}>
            <div class="botones">
            <button class="boton1">COMPRAR AHORA</button>
            
            <button class="boton">VISITAR SITIO</button>
            </div>
       
		</div>	
			
    `;
    }
}

customElements.define('product-banner', Banner);
export default Banner;