const filmes = [
    {
        "id": 1,
        "titulo": "Monstros S.A.",
        "imagem": "img/filmes/monstrossa.jpg",
        "descricao": "É um filme que segue Sullivan e Mike, monstros que coletam gritos de crianças para energia, mas mudam de perspectiva ao conhecer uma menininha.",
        "pagina": "paginas/personagens/monstrossa.html"
    },
    {
        "id": 2,
        "titulo": "Procurando Nemo",
        "imagem": "img/filmes/procurandonemo.jpg",
        "descricao": "Um peixe-palhaço chamado Nemo é sequestrado e seu pai parte em uma jornada ao lado de Dory para encontrá-lo, explorando o oceano e criando laços de amizade.",
        "pagina": "paginas/personagens/procurandonemo.html"
    },
    {
        "id": 3,
        "titulo": "Divertidamente",
        "imagem": "img/filmes/divertidamente.jpg",
        "descricao": "Retrata sobre cinco emoções dentro do ser humano. Podemos compreender de que forma a raiva, alegria, medo, tristeza e o nojo agem no nosso comportamento.",
        "pagina": "paginas/personagens/divertidamente.html"
    },
    {
        "id": 4,
        "titulo": "Toy Story",
        "imagem": "img/filmes/toystory.jpg",
        "descricao": "Woody, o boneco favorito de Andy, e Buzz Lightyear, um novo brinquedo, superam sua rivalidade para enfrentar um desafio juntos e descobrem o valor da amizade.",
        "pagina": "paginas/personagens/toystory.html"
    },
    {
        "id": 5,
        "titulo": "Ratatouille",
        "imagem": "img/filmes/ratatouille.jpg",
        "descricao": "Remy, um ratinho com paixão pela culinária, segue seu sonho de se tornar um chef e acaba trabalhando em um restaurante parisiense, buscando a excelência culinária.",
        "pagina": "paginas/personagens/ratatouille.html"
    },
    {
        "id": 6,
        "titulo": "Viva: A Vida é Uma Festa",
        "imagem": "img/filmes/viva.jpg",
        "descricao": "Miguel busca se tornar um músico como seu ídolo, enfrentando a proibição musical da família e explorando a Terra dos Mortos com a ajuda de Hector para descobrir segredos familiares.",
        "pagina": "paginas/personagens/viva.html"
    },
    {
        "id": 7,
        "titulo": "Up: Altas Aventuras",
        "imagem": "img/filmes/upaltasaventuras.jpg",
        "descricao": "Carl Fredricksen, aos 78 anos, levanta voo com sua casa usando balões para evitar perdê-la, mas acidentalmente leva consigo Russell, um menino de 8 anos, em uma emocionante jornada.",
        "pagina": "paginas/personagens/up.html"
    },
    {
        "id": 8,
        "titulo": "Soul",
        "imagem": "img/filmes/soul.jpg",
        "descricao": "Joe Gardner, um professor de música que sonha em tocar em Nova Iorque, se encontra fora de seu corpo e embarca em uma jornada espiritual para encontrar a verdadeira felicidade na vida.",
        "pagina": "paginas/personagens/soul.html"
    }
]


const listaFilmes = document.getElementById('filmesRow');

filmes.forEach(filme => {
    const link = document.createElement('a');
    link.href = filme.pagina;
    link.style.textDecoration = 'none';

    const cardCol = document.createElement('div');
    cardCol.className = 'col';

    const card = document.createElement('div');
    card.className = 'card h-100 filme-card';
    card.style.border = '1px solid #84A9C0';
    card.style.borderRadius = '3px';

    const img = document.createElement('img');
    img.src = filme.imagem;
    img.className = 'card-img-top filme-img';
    img.alt = '...';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title filme-titulo';
    title.textContent = filme.titulo;

    const p = document.createElement('p');
    p.className = 'card-text filme-descricao';
    p.textContent = filme.descricao;

    cardBody.appendChild(title);
    cardBody.appendChild(p);

    card.appendChild(img);
    card.appendChild(cardBody);

    link.appendChild(card);
    cardCol.appendChild(link);

    listaFilmes.appendChild(cardCol);

    // Adicione o evento de clique para redirecionar para a página desejada
    link.addEventListener('click', () => {
        window.location.href = filme.pagina;
    });
});

// Destaques
const destaques = [
    {
        "id": 1,
        "image": "img/home/img1.png",
        "caption": "Destaque 1"
    },
    {
        "id": 2,
        "image": "img/home/img2.png",
        "caption": "Destaque 2"
    },
    {
        "id": 3,
        "image": "img/home/img3.jpg",
        "caption": "Destaque 3"
    }
];

// Selecione o contêiner do carrossel
const carouselInner = document.querySelector('.carousel-inner');

// Selecione os indicadores do carrossel
const carouselIndicators = document.querySelector('.carousel-indicators');

// Itere sobre o array 'destaques' e crie os itens do carrossel
destaques.forEach((destaque, index) => {
    // Crie um indicador do carrossel
    const indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.setAttribute('data-bs-target', '#carouselExampleIndicators');
    indicator.setAttribute('data-bs-slide-to', index.toString());
    if (index === 0) {
        indicator.classList.add('active');
    }
    carouselIndicators.appendChild(indicator);

    // Crie um item do carrossel
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
        carouselItem.classList.add('active');
    }

    // Crie um elemento de imagem
    const img = document.createElement('img');
    img.classList.add('d-block', 'w-100');
    img.src = destaque.image;
    img.alt = 'Imagem do Carrossel';

    // Anexe a imagem ao item do carrossel
    carouselItem.appendChild(img);

    // Anexe o item do carrossel ao contêiner do carrossel
    carouselInner.appendChild(carouselItem);
});

// Adicione eventos de clique para navegar no carrossel
const carouselPrev = document.querySelector('.carousel-control-prev');
const carouselNext = document.querySelector('.carousel-control-next');

carouselPrev.addEventListener('click', () => {
    const activeIndex = Array.from(carouselInner.children).findIndex(item => item.classList.contains('active'));
    const newIndex = (activeIndex - 1 + destaques.length) % destaques.length;
    carouselIndicators.children[activeIndex].classList.remove('active');
    carouselIndicators.children[newIndex].classList.add('active');
    carouselInner.children[activeIndex].classList.remove('active');
    carouselInner.children[newIndex].classList.add('active');
});
