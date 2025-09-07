
document.getElementById('menuBtn').addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
document.getElementById('year').textContent = new Date().getFullYear();
