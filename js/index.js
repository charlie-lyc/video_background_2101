const toggleBtn = document.querySelector('.toggle')
const showCase = document.querySelector('.showcase')
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active')
    showCase.classList.toggle('active')

    // if (toggleBtn.classList.contains('active')) {
    //     toggleBtn.classList.remove('active')
    // } else {
    //     toggleBtn.classList.add('active')
    // }
    // if (showCase.classList.contains('active')) {
    //     showCase.classList.remove('active')
    // } else {
    //     showCase.classList.add('active')
    // }
})