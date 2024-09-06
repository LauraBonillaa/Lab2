class Header extends HTMLElement {
    static get observedAttributes() {
        return ['img', 'alt', 'txtbutton'];
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
			<link rel="stylesheet" href="./src/components/componente1/componente1.css">
			
			
            <div class="header">
				
			<img id=img src=${this.img} alt=${this.alt}>
			

            
			<button class="boton">JUEGOS</button>
            <button class="boton">ACERCA DE</button>
            <button class="boton">TRABAJO</button>
            <button class="boton">SOPORTE</button>

            <div class="menu2">
            <button class="boton1">REGISTRARSE</button>
            <button class="boton">INICIAR SESIÓN</button>
            </div>
            </div>


			
				
			
    `;
    }
}

customElements.define('product-header', Header);
export default Header;