class Banner3 extends HTMLElement {
    static get observedAttributes() {
        return ['img', 'alt', 'titulo', 'button', 'subtitulo', 'subtitulo2', 'subtitulo3', 'subtitulo4'];
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
			<link rel="stylesheet" href="./src/components/componente7/componente7.css">
			
		<div class="div">
        <img class="img" src=${this.img} alt=${this.alt}>
            <div class='textos'>
            <div class=parrafo>
              <h1 class='titulo'>${this.titulo}</h1>
              <h4 class='subtitulo'>${this.subtitulo}</h4>
              <button class='boton'>${this.button}</button>
              </div>
              <div class='parrafo1'>
              <div class='parrafo2'>
              <h4 class='subtitulo'>${this.subtitulo2}</h4>
              <h4 class='subtitulo2'>${this.subtitulo3}</h4>
              </div>
              <h4 class='subtitulo2'>${this.subtitulo4}</h4>
              </div>
              

            </div>
           
            
            
            
            
           
          
           
       
		</div>	
			
    `;
    }
}

customElements.define('product-banner3', Banner3);
export default Banner3;