//za faq pitanja
const toggles = document.querySelectorAll('.faq-toggle');
toggles.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector('i');
    answer.classList.toggle('hidden');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
  });
});

