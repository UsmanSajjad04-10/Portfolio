document.addEventListener("mousemove", (e) => {
    const mouseTracker = document.getElementById("mouseTracker");
    const x = e.clientX - mouseTracker.clientWidth / 2;
    const y = e.clientY - mouseTracker.clientHeight / 2;
    mouseTracker.style.transform = `translate(${x}px, ${y}px)`;
  });

  const rewritingText = document.getElementById('rewriting-text');
  const originalText = rewritingText.textContent;
  
  let index = 0;
  let charIndex = 0;
  
  function updateText() {
    const currentText = originalText.substring(0, charIndex + 1);
    rewritingText.textContent = currentText;
  
    if (charIndex === originalText.length) {
      charIndex = 0;
      index = (index + 1) % originalText.length;
    } else {
      charIndex++;
    }
  }
  
  setInterval(updateText, 190); 




menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  nabar.classList.toggle('active');
}; 


let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = ()=> {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height ){
        navlink.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });       
      };
    });

    let header = document.querySelector('header');

    header.classList.toggle('stckly', window.scrollY > 100);


  //   menuIcon.classList.remove('bx-x');
  // nabar.classList.remove('active');
};



ScrollReveal({ 
  reset: true, 
  distance: '80px',
  duration: 2000,
  delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, porfolio-box, .content form  ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, about-content', { origin: 'right' });




// var typed = new Typed('.multitext',{
//   Strings: ['Frontend Developer', 'Video Editor', '2D Artist'],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 1000,
//   loop: true
// });

// var textArray = ['Frontend Developer', 'Video Editor', '2D Artist'];
// var element = document.querySelector('.multitext');
// var textIndex = 0;
// var CharIndex = 0;

// function type() {
//   if (textIndex < textArray.length) {
//     if (CharIndex < textArray[textIndex].length) {
//       element.innerHTML += textArray[textIndex].charAt(CharIndex);
//       CharIndex++;
//       setTimeout(type, 100); // Adjust typing speed here (milliseconds)
//     } else {
//       textIndex++;
//       CharIndex = 0;
//       setTimeout(erase, 1000); // Adjust pause before erasing here (milliseconds)
//     }
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     element.innerHTML = textArray[textIndex].substring(0, CharIndex - 1);
//     CharIndex--;
//     setTimeout(erase, 50); // Adjust erasing speed here (milliseconds)
//   } else {
//     textIndex = (textIndex + 1) % textArray.length;
//     setTimeout(type, 500); // Adjust pause before typing the next sentence here (milliseconds)
//   }
// }

// // Start the typing animation
// type();

