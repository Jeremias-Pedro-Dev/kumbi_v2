 // Menu Mobile
   /*
    const btn_menu = document.querySelector(".btn_menu");
    const icon_menu = btn_menu.querySelector("i");
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");
    
    btn_menu.addEventListener("click", (event) => {
      event.preventDefault();
      mobileMenu.classList.toggle("menu-open");
      overlay.classList.toggle("active");
      
      if (icon_menu.classList.contains("fa-bars")) {
        icon_menu.classList.remove("fa-bars");
        icon_menu.classList.add("fa-xmark");
      } else {
        icon_menu.classList.remove("fa-xmark");
        icon_menu.classList.add("fa-bars");
      }
    });
    
    overlay.addEventListener("click", () => {
      mobileMenu.classList.remove("menu-open");
      overlay.classList.remove("active");
      icon_menu.classList.remove("fa-xmark");
      icon_menu.classList.add("fa-bars");
    });

    // Scroll Header Effect
    window.addEventListener("scroll", function () {
      const header = document.getElementById("header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // Dark Mode Toggle
    const modo = document.querySelector(".modo");
    const mobileModo = document.querySelector(".mobile-modo");
    const body = document.body;
    
    // Check for saved theme preference
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      updateModeIcons(true);
    }

    function toggleDarkMode(event) {
        event.preventDefault()
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");
      updateModeIcons(isDark);
      
      if (isDark) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    }

    function updateModeIcons(isDark) {
      const icons = document.querySelectorAll('.modo i, .mobile-modo i');
      icons.forEach(icon => {
        if (isDark) {
          icon.classList.remove("fa-sun");
          icon.classList.add("fa-moon");
        } else {
          icon.classList.remove("fa-moon");
          icon.classList.add("fa-sun");
        }
      });
      
      // Update mobile mode button text
      if (mobileModo) {
        mobileModo.querySelector('span').textContent = isDark ? ' Modo Escuro' : ' Modo Claro';
      }
    }

    modo.addEventListener("click", toggleDarkMode);
    if (mobileModo) {
      mobileModo.addEventListener("click", toggleDarkMode);
    }

    // Scroll Reveal Animation
    function checkVisibility() {
      const sections = document.querySelectorAll('section');
      const cards = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('visible');
        }
      });
      
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.85) {
          card.classList.add('visible');
        }
      });
    }
    
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);

    // Modal Handling
    const loginBtn = document.querySelectorAll('#loginBtn, #mobileLoginBtn');
    const signunonepBtn = document.querySelectorAll('#signupBtn, #mobileSignupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closeSignupModal = document.getElementById('closeSignupModal');
    const goToSignup = document.getElementById('goToSignup');
    const goToLogin = document.getElementById('goToLogin');

    function openModal(modal) {
      modal.style.display = 'flex';
      // Close mobile menu if open
      mobileMenu.classList.remove("menu-open");
      overlay.classList.remove("active");
      icon_menu.classList.remove("fa-xmark");
      icon_menu.classList.add("fa-bars");
    }

    function closeModal(modal) {
      modal.style.display = 'none';
    }

    loginBtn.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(loginModal);
      });
    });

    signupBtn.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(signupModal);
      });
    });

    closeLoginModal.addEventListener('click', function() {
      closeModal(loginModal);
    });

    closeSignupModal.addEventListener('click', function() {
      closeModal(signupModal);
    });

    goToSignup.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal(loginModal);
      openModal(signupModal);
    });

    goToLogin.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal(signupModal);
      openModal(loginModal);
    });

    // Fechar modal ao clicar fora
    window.addEventListener('click', function(e) {
      if (e.target === loginModal) {
        closeModal(loginModal);
      }
      if (e.target === signupModal) {
        closeModal(signupModal);
      }
    });

    // Current Year in Footer
    const anoSpan = document.querySelector('.ano');
    const anoAtual = new Date().getFullYear();
    anoSpan.textContent = anoAtual;
 
 // Tela inicial ou plash
 
 const main_plash = document.querySelector('.main_plash')
 const plash = document.querySelector('.plash')
 window.addEventListener('load',mostrarPlash)
 
 function mostrarPlash(){
  plash.style.display = 'block'
  main_plash.style.opacity = '0'
  setTimeout(()=>{
    main_plash.style.opacity= '1'
    main_plash.style.transition = '.9s'
    plash.style.display = 'none'
  },6000)
 }
  
    // Modal Handling
    const loginBtn = document.querySelectorAll('#loginBtn, #mobileLoginBtn');
    const signunonepBtn = document.querySelectorAll('#signupBtn, #mobileSignupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closeSignupModal = document.getElementById('closeSignupModal');
    const goToSignup = document.getElementById('goToSignup');
    const goToLogin = document.getElementById('goToLogin');

    function openModal(modal) {
      modal.style.display = 'flex';
      // Close mobile menu if open
      mobileMenu.classList.remove("menu-open");
      overlay.classList.remove("active");
      icon_menu.classList.remove("fa-xmark");
      icon_menu.classList.add("fa-bars");
    }

    function closeModal(modal) {
      modal.style.display = 'none';
    }

    loginBtn.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(loginModal);
      });
    });

    signupBtn.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(signupModal);
      });
    });

    closeLoginModal.addEventListener('click', function() {
      closeModal(loginModal);
    });

    closeSignupModal.addEventListener('click', function() {
      closeModal(signupModal);
    });

    goToSignup.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal(loginModal);
      openModal(signupModal);
    });

    goToLogin.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal(signupModal);
      openModal(loginModal);
    });

    // Fechar modal ao clicar fora
    window.addEventListener('click', function(e) {
      if (e.target === loginModal) {
        closeModal(loginModal);
      }
      if (e.target === signupModal) {
        closeModal(signupModal);
      }
    });*/


  const telaIncial = document.querySelector('.telaIncial')
  const janela = window
  janela.addEventListener('load',inciarJanela)
  const main_plash = document.querySelector('.main_plash')
  function inciarJanela(){
    main_plash.style.opacity = '0'
    setTimeout(()=>{
      telaIncial.style.display = 'none'
      main_plash.style.opacity= '1'
      main_plash.style.transition = '.9s'
    },8000)
  }
  const entrar = document.querySelector('#entrar')
  const usuarioNormal = document.querySelector('.usuarioNormal')
  const Home = document.querySelector('.Home')
  
usuarioNormal.addEventListener('click',(e)=>{
  e.preventDefault()
  entrar.style.display = 'flex'
  entrar.style.opacity = '0'
  Home.style.display = 'none'
  setTimeout(()=>{
    entrar.style.opacity = '1'
    entrar.style.transition = '.9s'
  },200)
})
const fechar_modal = document.querySelector('.fechar_modal')
fechar_modal.addEventListener('click',(e)=>{
  e.preventDefault()
  Home.style.display = 'block'
  Home.style.opacity = '0'
  entrar.style.display = 'none'
  setTimeout(()=>{
    Home.style.opacity = '1'
    Home.style.transition = '.9s'
  },200)
})
const usuarioEmpresa = document.querySelector('.usuarioEmpresa')
const entrarEmpresa = document.querySelector('#entrarEmpresa')

usuarioEmpresa.addEventListener('click',(e)=>{
  e.preventDefault()
  entrarEmpresa.style.display = 'flex'
  entrarEmpresa.style.opacity = '0'
  Home.style.display = 'none'
  setTimeout(()=>{
    entrarEmpresa.style.opacity = '1'
    entrarEmpresa.style.transition = '.9s'
  },200)
})
const fechar_modal_empresa = document.querySelector('#entrarEmpresa .fechar_modal')
fechar_modal_empresa.addEventListener('click',(e)=>{
  e.preventDefault()
  Home.style.display = 'block'
  Home.style.opacity = '0'
  entrarEmpresa.style.display = 'none'
  setTimeout(()=>{
    Home.style.opacity = '1'
    Home.style.transition = '.9s'
  },200)
})  