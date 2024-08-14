const accordion = document.querySelectorAll('.accordion');
//const panel = document.querySelector('.panel');

accordion.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    
    elem.classList.toggle('active');
    
    const panel = elem.nextElementSibling;
    
    if(panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});