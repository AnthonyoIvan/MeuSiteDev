// Dados dos projetos
const projectsData = {
    1: {
        title: "E-commerce Fashion",
        description: "Uma plataforma de e-commerce moderna para uma loja de moda, com recursos de carrinho de compras, pagamento integrado e área administrativa.",
        image: "img/portfolio/projeto1.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
        liveLink: "https://projeto1.com",
        githubLink: "https://github.com/seu-usuario/projeto1"
    },
    2: {
        title: "Sistema de Gestão",
        description: "Sistema completo para gestão empresarial com módulos de RH, financeiro e estoque, desenvolvido com foco em usabilidade e eficiência.",
        image: "img/portfolio/projeto2.jpg",
        technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
        liveLink: "https://projeto2.com",
        githubLink: "https://github.com/seu-usuario/projeto2"
    },
    3: {
        title: "Blog Corporativo",
        description: "Blog responsivo com sistema de gerenciamento de conteúdo personalizado, integração com redes sociais e otimização SEO.",
        image: "img/portfolio/projeto3.jpg",
        technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
        liveLink: "https://projeto3.com",
        githubLink: "https://github.com/seu-usuario/projeto3"
    }
};

// Elementos do DOM
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalTechnologies = document.getElementById('modalTechnologies');
const modalLiveLink = document.getElementById('modalLiveLink');
const modalGithubLink = document.getElementById('modalGithubLink');
const closeModal = document.querySelector('.close-modal');

// Abrir modal com detalhes do projeto
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.dataset.project;
        const project = projectsData[projectId];

        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalDescription.textContent = project.description;
        
        // Limpar e preencher tecnologias
        modalTechnologies.innerHTML = '';
        project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            modalTechnologies.appendChild(li);
        });

        modalLiveLink.href = project.liveLink;
        modalGithubLink.href = project.githubLink;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Fechar modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}); 