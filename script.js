// Saber mais Section
const readMoreContent = document.querySelector('.read-more-container')

readMoreContent.addEventListener('click', event => 
{
  const current = event.target;
  const ReadMoreBtn = current.className.includes('read-more-btn')

  if(!ReadMoreBtn) return

  const currentText = event.target.parentNode.querySelector('.read-more-text')

  currentText.classList.toggle('read-more-text--show')

  current.textContent = current.textContent.includes('Saber mais') ? 
  "Saber menos..." : "Saber mais..."
})

// Pedir Contacto Btn Section
const openContactBtn = document.querySelectorAll('[data-modal-target1]')
const closeContactBtn = document.querySelectorAll('[data-close-button1]')
const overlay2 = document.getElementById('overlay2')

openContactBtn.forEach(button => 
{
  button.addEventListener('click', () => 
  {
    const modal1 = document.querySelector(button.dataset.modalTarget1)
    openModal1(modal1)
  })
})

closeContactBtn.forEach(button => 
{
  button.addEventListener('click', () => 
  {
    const modal1 = button.closest('.modal1')
    closeModal1(modal1)
  })
})

overlay2.addEventListener('click', () => 
{
  const modals1 = document.querySelectorAll('.modal1.active')
  modals1.forEach(modal1 => 
  {
    closeModal1(modal1)
  })
})

function openModal1(modal1)
{
  if (modal1 == null) return
  modal1.classList.add('active')
  overlay2.classList.add('active')
}

function closeModal1(modal1)
{
  if (modal1 == null) return
  modal1.classList.remove('active')
  overlay2.classList.remove('active')
}

// Simular Poupança Btn Section
const openSimularBtn = document.querySelectorAll('[data-modal-target2]')
const closeSimularBtn = document.querySelectorAll('[data-close-button2]')
const overlay3 = document.getElementById('overlay3')

openSimularBtn.forEach(button => 
{
  button.addEventListener('click', () => 
  {
    const modal2 = document.querySelector(button.dataset.modalTarget2)
    openModal2(modal2)
  })
})

closeSimularBtn.forEach(button => 
{
  button.addEventListener('click', () => 
  {
    const modal2 = button.closest('.modal2')
    closeModal2(modal2)
  })
})

overlay3.addEventListener('click', () => 
{
  const modals2 = document.querySelectorAll('.modal2.active')
  modals2.forEach(modal2 => 
  {
    closeModal2(modal2)
  })
})

function openModal2(modal2)
{
  if (modal2 == null) return
  modal2.classList.add('active')
  overlay3.classList.add('active')
}

function closeModal2(modal2)
{
  if (modal2 == null) return
  modal2.classList.remove('active')
  overlay3.classList.remove('active')
}







// const openSimularBtn = document.querySelectorAll('[data-modal-target]')
// const closeSimularBtn = document.querySelectorAll('[data-close-button]')
// const overlay3 = document.getElementById('overlay3')

// openSimularBtn.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal2 = document.querySelector(button.dataset.modalTarget)
//     openModal2(modal2)
//   })
// })

// closeSimularBtn.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal2 = button.closest('.modal2')
//     closeModal2(modal2)
//   })
// })

// overlay3.addEventListener('click', () => {
//   const modals2 = document.querySelectorAll('.modal2.active')
//   modals2.forEach(modal => {
//     closeModal2(modal2)
//   })
// })

// function openModal2(modal2)
// {
//   if (modal2 == null) return
//   modal2.classList.add('active')
//   overlay3.classList.add('active')
// }

// function closeModal2(modal2)
// {
//   if (modal2 == null) return
//   modal2.classList.remove('active')
//   overlay3.classList.remove('active')
// }