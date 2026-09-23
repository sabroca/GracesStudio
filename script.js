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
            const show =
                selected === 'todos' ||
                card.dataset.category === selected;

            card.style.display = show ? '' : 'none';

            if (show) {
                card.animate(
                    [
                        { opacity: 0, transform: 'translateY(12px)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ],
                    {
                        duration: 300,
                        easing: 'ease-out'
                    }
                );
            }
        });
    });
});


const descriptions = {

    "Design & Artes": `
        <div class="service-list">

            <div class="service-list-item">
                <span>➣</span>
                <p>Artes para redes sociais</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Montagens e edição de imagens</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Banners e peças publicitárias</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Papelaria corporativa personalizada</p>
            </div>

        </div>
    `,


    "Social Media": `
        <div class="service-list">

            <div class="service-list-item">
                <span>➣</span>
                <p>Criação de conteúdo</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Ideias para posts</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Legendas e textos</p>
            </div>

        </div>
    `,


    "Copywriting & Redação": `
        <div class="service-list">

            <div class="service-list-item">
                <span>➣</span>
                <p>Textos publicitários</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Textos institucionais</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Roteiros e legendas</p>
            </div>

        </div>
    `,


    "Edição de Vídeo": `
        <div class="service-list">

            <div class="service-list-item">
                <span>➣</span>
                <p>Reels</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Cortes e edição</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Vídeos promocionais</p>
            </div>

        </div>
    `,


    "Criação & Estratégia": `
        <div class="service-list">

            <div class="service-list-item">
                <span>➣</span>
                <p>Conceitos criativos</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Brainstorming</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Campanhas e estratégias</p>
            </div>

        </div>
    `,


    "Web & Digital": `
        <div class="service-list">

            <div class="service-list-item">
                <span>➣</span>
                <p>Sites institucionais e informativos</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Portfólios</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Cardápios digitais</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Catálogos digitais</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Hotsites e páginas de campanha</p>
            </div>

            <div class="service-list-item">
                <span>➣</span>
                <p>Experiências digitais interativas</p>
            </div>

        </div>
    `

};


const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalCta = document.getElementById('modalCta');


document.querySelectorAll('.card-link').forEach(btn => {
    btn.addEventListener('click', () => {

        const service = btn.dataset.service;

        modalTitle.textContent = service;

        modalText.innerHTML =
            descriptions[service] ||
            'Vamos conversar sobre o que sua marca precisa.';

        modalCta.href = '#contato';

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');

        document.body.style.overflow = 'hidden';
    });
});


function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');

    document.body.style.overflow = '';
}


document
    .querySelector('.modal-close')
    .addEventListener('click', closeModal);


document
    .querySelector('.modal-backdrop')
    .addEventListener('click', closeModal);


document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
    }
});


modalCta.addEventListener('click', closeModal);


const menuButton = document.querySelector('.menu-btn');

menuButton.addEventListener('click', () => {

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


const closeWhatsappMessage =
    document.getElementById('closeWhatsappMessage');

const whatsappMessage =
    document.getElementById('whatsappMessage');


closeWhatsappMessage.addEventListener('click', () => {
    whatsappMessage.classList.add('hidden');
});