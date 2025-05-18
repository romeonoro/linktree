// Adiciona efeito ao clicar nos links
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
