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
// ...

// Pedir Contacto Btn Section
// const openContactBtn = document.querySelectorAll('[data-modal-target]')
// const closeContactBtn = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay2')

// openContactBtn.forEach(button => 
// {
//   button.addEventListener('click', () => 
//   {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// closeContactBtn.forEach(button => 
// {
//   button.addEventListener('click', () => 
//   {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

// overlay.addEventListener('click', () => 
// {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => 
//   {
//     closeModal(modal)
//   })
// })

// function openModal(modal)
// {
//   if (modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeModal(modal)
// {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }
// ...


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay3')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

function openModal(modal)
{
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal)
{
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}