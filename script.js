// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
	document.querySelector('body').classList.toggle('mobile-nav-active')
	this.classList.toggle('fa-xmark')
})

// Typing Effect

let typed = new Typed('.auto-input',{
	strings: ['Front-End Developer!','Back-End Developer!','Full-stack Developer!', 'Streamer!'],
	typeSpeed: 70,
	backSpeed: 70,
	backDelay: 2000,
	loop: true,
})

// Active link state on scroll

