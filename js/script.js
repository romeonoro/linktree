const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('mousedown', () => {
    link.style.transform = 'scale(0.95)';
  });

  link.addEventListener('mouseup', () => {
    link.style.transform = 'scale(1.05)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});

window.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.titulo, .links, .email-container');
  
    elementos.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('fade-in');
      }, i * 200); 
    });
  });
  
