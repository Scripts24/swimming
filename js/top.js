let boton = document.querySelector('.top')

window.onscroll = function () {


    if (document.documentElement.scrollTop > 250) {
        document.querySelector('.top ').style.display = 'block'
    }
    else {
        document.querySelector('.top ').style.display = 'none'
    }

    boton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}