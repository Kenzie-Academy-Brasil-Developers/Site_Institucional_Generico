function handleModal() {
    const button = document.querySelector(".header__button");
    const button2 = document.querySelector(".faq__invite--button");
    const modalController = document.querySelector(".modalController");
    button.addEventListener("click", () => {
        modalController.showModal();
      }); 
      closeModal()

       button2.addEventListener("click", () =>{
        modalController.showModal()
    });
    closeModal()
    }

   
handleModal()

function closeModal(){
    const button = document.querySelector('.modal__close')
    const modalController = document.querySelector('.modalController')

    button.addEventListener("click", () => {
        modalController.close();
      });
    
}

handleModal()
