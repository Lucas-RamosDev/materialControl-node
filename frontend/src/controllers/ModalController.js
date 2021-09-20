
module.exports = {

  open() {
    
    document
      .querySelector('.modal-trash')
      .classList.add('active')

  },  

  close() {
    document
      .querySelector('.modal-trash')
      .classList.remove('active')
  },

}