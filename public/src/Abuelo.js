import * as components from './components/padre.js';


class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' }); //Encapsular el codigo y
		// permitir que el DOM encuentre nuestra nueva clase
	}

	//Cuando el componente se carga en el DOM hace lo que le indiquemos
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
   <link rel="stylesheet" href="./src/Index.css">
    <product-header
   
    
     img= "https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png"
      
    ></product-header>

	

	<product-banner
   
    img= "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blackops6/common/black-ops-6-full-logo.png"
    
      
    ></product-banner>

	<product-noticias
   
    img= "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo-small.svg"
	img1= "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-logo.svg"
	img2= "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/thps-logo.png"
	img3= "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/crash-bandicoot-logo.png"

    
      
    ></product-noticias>
	<product-cards
   
    img= "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-ZOMBIES-888-TOUT.jpg"
	date='AUG 08 2024'
	titulo='Modo Zombies de Black Ops 6 qué necesitas saber'

    
      
    ></product-cards>
    
    `;
	}
	
}

customElements.define('app-container', AppContainer);