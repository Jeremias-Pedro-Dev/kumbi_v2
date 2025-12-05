
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
  // Modal login e criar conta
  const signupModal = document.getElementById('signupModal')
  const Btncriarconta = document.querySelector('.Btncriarconta').addEventListener('click',(e)=>{
    e.preventDefault()
    signupModal.style.display = 'flex'
    signupModal.style.opacity = '0'
    setTimeout(()=>{
      signupModal.style.opacity ='1'
      signupModal.style.transition ='.4s'
    },300)
  })

  const loginModal = document.getElementById('loginModal')
  const goToLogin = document.getElementById('goToLogin').addEventListener('click',(e)=>{
    e.preventDefault()
     signupModal.style.display = 'none'
    loginModal.style.display ='flex'
    loginModal.style.opacity = '0'
    setTimeout(()=>{
      loginModal.style.opacity ='1'
      loginModal.style.transition ='.4s'
    },100)
  })
  const esconderTela_motorista = document.querySelector('.esconder')
  const modal_form = document.querySelectorAll('.modal_form')
  modal_form.forEach((modal)=>{
    modal.addEventListener('submit',(e)=>{
      e.preventDefault()
      telaIncial.style.display ='block'
      main_plash.style.display = 'none'
      esconderTela_motorista.style.display = 'none'
      setTimeout(()=>{
        telaIncial.style.display ='none'
        esconderTela_motorista.style.display = 'block'
      },9000)
    })
  })