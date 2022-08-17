export const AlertError = {
    elemt: document.querySelector('.alert-error'),
    
    open(){
        AlertError.elemt.classList.add('open')
    },
    close(){
        AlertError.elemt.classList.remove('open')
    }

}
