/*----------Mostrar Menu--------------*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav__link, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ALTERAR CABEÇALHO DE FUNDO ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== Exibir Rolagem para Cima ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // Quando a rolagem for superior a 350 altura da janela de visualização, adicione a classe show-scroll à tag a com a classe scrollup
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== LINK ATIVO DAS SEÇÕES DE ROLAGEM ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*------------------------Revelação de rolagem----------------------------*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 3000,
    delay: 400,

    // resrt: true // Animations repeat

})

sr.reveal(".home-data, .explore-user, .explore-data, .footer--container, #alinhamento")
sr.reveal(".home-card", {delay: 600, distance: "100px", interval: 100})
sr.reveal(".about-data, .join-image, #alinhamento", {origin: "right"})
sr.reveal(".about-image, .join-data", {origin: "left"})
sr.reveal(".popular-card", {interval: 200})