

module.exports = {

  openTrash() {
    
    document
      .querySelector('.modal-trash')
      .classList.add('active')

  },  

  closeTrash() {
    document
      .querySelector('.modal-trash')
      .classList.remove('active')
  },

  openEdit() {
    document
      .querySelector('.modal-edit')
      .classList.add('active')
  },

  closeEdit() {
    document
      .querySelector('.modal-edit')
      .classList.remove('active')
  },

  openRegister() {
    document
      .querySelector('.modal-register')
      .classList.add('active')
  },

  closeRegister() {
    document
      .querySelector('.modal-register')
      .classList.remove('active')
  },

}