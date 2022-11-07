let img = document.querySelector('.img-iphone-background img')

let btns = document.querySelectorAll('div[data-color]')

let colorh5 = document.querySelector('.Colors h5')

let openBtns = document.querySelectorAll('[data-open]')

let closeBtns = document.querySelectorAll('[data-close]')

let modalBg = document.querySelector('.modal-deals')

let modal = document.querySelector('.custom-modal')

let gray = document.querySelector('.Deep-Purple')

let color_text = document.querySelector('.color-text')


let img_color = {
    Purple: './IMG/iphone-14-pro-storage-select-202209-6-7inch-deeppurple.jpg',
    Gold: './IMG/iphone-14-pro-finish-select-202209-6-7inch-gold.jpg',
    Silver: './IMG/iphone-14-pro-finish-select-202209-6-7inch-silver.jpg',
    Black: './IMG/iphone-14-pro-finish-select-202209-6-7inch-spaceblack.jpg'
}
btns.forEach(btn => {
   btn.onclick = () => { 
    let key = btn.getAttribute('data-color')
    img.src = img_color[key]
    let color = btn.getAttribute('data-color')
    }
})
openBtns.forEach(btn => {
   btn.onclick = () => {  
    modalBg.style.display = 'block'
    modal.style.display='block'
   }
})

closeBtns.forEach(btn => [
   btn.onclick = () => {
    modalBg.style.display = 'none'
    modal.style.display='none'
   }
])



gray.onmouseenter = () => {
    color_text.innerHTML = 'Color - Deep Purple'
 }
 
 gray.onmouseleave = () => {
    color_text.innerHTML = 'Color - Deep Purple'
 }
 
 
 let Gold = document.querySelector('.Gold')
 Gold.onmouseenter = () => {
    color_text.innerHTML = 'Color - Gold'
 }
 
 Gold.onmouseleave = () => {
    color_text.innerHTML = 'Color - Gold'
 }
 
 
 let Silver = document.querySelector('.Silver')
 Silver.onmouseenter = () => {
    color_text.innerHTML = 'Color - Silver'
 }
 
 Silver.onmouseleave = () => {
    color_text.innerHTML = 'Color - Silver' 
 }
 
 
 let Black = document.querySelector('.Space-Black')
 Black.onmouseenter = () => {
    color_text.innerHTML = 'Color - Space Black'
 }
 
 
black.onmouseleave = () => {
    color_text.innerHTML = 'Color - Space Black' 
 }

 openBtns.forEach(btn => {
   btn.onclick = () => {
       modal.style.display = "block"
       
   }
})
