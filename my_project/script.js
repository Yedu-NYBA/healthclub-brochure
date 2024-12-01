const slides = document.querySelectorAll('.slide');
const texts = document.querySelectorAll('.text');

let counter = 0;

slides.forEach(
  (slide, index) => {
  slide.style.left = `${index * 100}%`;
})

texts.forEach(
  (text, ind) => {
  text.style.left = `${ind * 100}%`;
})
const goPrev = () => {
  if (counter>0 && counter<=7){
    counter--;
    if (counter < 7){
      document.getElementById('right').style.display = 'block'; 
    }
    if (counter == 0){
      document.getElementById('left').style.display = 'none';
    }
    slideImage();
    slideText();
    animation();
  }
}

const goNext = () => {
  if (counter>=0 && counter<7){
    counter++;
    if (counter == 7){
      document.getElementById('right').style.display = 'none';
    }
    if (counter > 0){
      document.getElementById('left').style.display = 'block';
    }
    slideImage();
    slideText();
    animation();
  }
}
const slideImage = () =>{
  slides.forEach(
    (slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`
    }
  )
}


const slideText = () =>{
  texts.forEach(
    (text) => {
      text.style.transform = `translateX(-${counter * 100}%)`;
    }
  )
}

const animation = () =>{
    texts.forEach(
      (text) => {
        text.classList.remove('move');

        void text.offsetWidth;

        text.classList.add('move');
    }
  )
}