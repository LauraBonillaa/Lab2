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
   <div class="body">
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
	<div id="cartas">
	<product-cards
   
    img= "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-ZOMBIES-888-TOUT.jpg"
	date='AUG 08 2024'
	titulo='Modo Zombies de Black Ops 6 qué necesitas saber'

	

    
      
    ></product-cards>
	<product-cards
   
    img= "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-ZOMBIES-CINEMATIC-TOUT.jpg"
	date='AUG 06 2024'
	titulo='Zombies de Black Ops 6: la historia hasta ahora'

	

    
      
    ></product-cards>
	<product-cards
   
    img= "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-S7-ETERNAL-GHOST-TOUT.jpg"
	date='JUL 25 2024'
	titulo='Presentamos la Temporada 7 de Call of Duty: Mobile - Ghost eterno'

	

    
      
    ></product-cards>
	<product-cards
   
    img= "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-S8-SHADOW-OPERATIVES-TOUT-MX-ES.jpg"
	date='AUG 23 2024'
	titulo='Presentamos la Temporada 8 de Call of Duty: Agentes de la oscuridad'

	

    
      
    ></product-cards>
	<product-cards
   
    img= "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-SP-MOST-WANTED-TOUT.jpg"
	date='AUG 19 2024'
	titulo='Black Ops 6 - Más buscado: ¡Revelación de la misión de campaña!'

	

    
      
    ></product-cards>
	<product-cards
   
    img= "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/COD-EXP-ROADMAP-TOUT.jpg"
	date='AUG 15 2024'
	titulo='Optimización de la experiencia de Call of Duty'

	

    
      
    ></product-cards>
    </div>

	<button class="boton">VER MÁS</button>
	<product-banner2
   
    img= 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/support-banner-v3.jpg'
	titulo='¡ESTAMOS AQUÍ PARA AYUDAR!'
subtitulo='Obtén respuestas a las preguntas más frecuentes, comprueba el estado del servidor y contacta con alguien experto en asistencia técnica.'
	

    button='VISITAR SERVICIO TÉCNICO'
      
    ></product-banner2>

	<h1 class="titulo">COMUNIDAD</h1>

	<div class='fotos'>
	<product-comunidad
   
   img='https://d9wxf5clf37aa.cloudfront.net/230127/instagram/18060192451646802/large.jpeg'
      
    ></product-comunidad>
	<product-comunidad
   
   img='https://d9wxf5clf37aa.cloudfront.net/230127/instagram/18038930597011036/large.jpeg'
      
    ></product-comunidad>
	<product-comunidad
   
   img='https://d9wxf5clf37aa.cloudfront.net/230127/instagram/17848202190255111/large.jpeg'
      
    ></product-comunidad>

</div>
<product-banner3
   
    img= 'https://github.com/SarisM/algoritmos-taller1/blob/main/public/src/fotos/fondolargo2.png?raw=true'
	titulo='DIVIÉRTETE'
	subtitulo='Más Información Sobre Las Oportunidades De Empleo'
	

    button='VISITAR SERVICIO TÉCNICO'
    subtitulo2='UNETE A NOSOTROS'  
	subtitulo3='DISEÑO DE JUEGO
	</br>
GRÁFICOS Y ANIMACIÓN
</br>
GESTION DE MARCA
</br>
PRODUCCIÓN
</br>
CONTROL DE CALIDAD'

subtitulo4='ASISTENCIA AL CLIENTE
</br>
OPERACIONES DEL ESTUDIO
</br>
PROGRAMACIÓN
</br>
FINANZAS Y CONTABILIDAD
</br>
RECURSOS HUMANOS'
    ></product-banner3>

	</div>
    `;
	}
	
}

customElements.define('app-container', AppContainer);