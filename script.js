const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.service-card');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const selected = btn.dataset.filter;
    cards.forEach(card => {
      const show = selected === 'todos' || card.dataset.category === selected;
      card.style.display = show ? '' : 'none';
      if (show) {
        card.animate(
          [{opacity: 0, transform: 'translateY(12px)'}, {opacity: 1, transform: 'translateY(0)'}],
          {duration: 300, easing: 'ease-out'}
        );
      }
    });
  });
});

const descriptions = {
  "Design & Artes": "Criação de artes para redes sociais, campanhas, banners, peças publicitárias, montagens e materiais visuais com identidade.",
  "Social Media": "Conteúdo, ideias para posts, legendas e planejamento para marcas que querem construir presença e conversar com seu público.",
  "Copywriting & Redação": "Textos publicitários, institucionais, legendas, roteiros e adaptação de linguagem para diferentes contextos e públicos.",
  "Edição de Vídeo": "Reels, cortes, vídeos promocionais e conteúdos audiovisuais pensados para comunicar, envolver e prender atenção.",
  "Criação & Estratégia": "Brainstorming, conceitos criativos, campanhas e direcionamento estratégico para transformar objetivos em ideias fortes.",
  "Web & Digital": "Sites institucionais, informativos, portfólios, landing pages e experiências digitais com foco em clareza e personalidade."
};

const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalCta = document.getElementById('modalCta');

document.querySelectorAll('.card-link').forEach(btn => {
  btn.addEventListener('click', () => {
    const service = btn.dataset.service;
    modalTitle.textContent = service;
    modalText.textContent = descriptions[service] || "Vamos conversar sobre o que sua marca precisa.";
    modalCta.href = '#contato';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.querySelector('.modal-close').addEventListener('click', closeModal);
document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

modalCta.addEventListener('click', closeModal);

document.querySelector('.menu-btn').addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  const visible = nav.style.display === 'flex';
  nav.style.display = visible ? '' : 'flex';
  if (!visible) {
    nav.style.position = 'absolute';
    nav.style.top = '82px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '25px 5vw';
    nav.style.background = '#000';
    nav.style.borderBottom = '1px solid #272727';
    nav.style.flexDirection = 'column';
  }
});
