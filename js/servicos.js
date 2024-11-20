// Dados detalhados dos serviços
const servicosData = {
    'Sites Institucionais': {
        description: `
            <p>Desenvolvimento completo de websites institucionais com foco em:</p>
            <ul>
                <li>Design moderno e personalizado</li>
                <li>Otimização para mecanismos de busca (SEO)</li>
                <li>Responsividade para todos os dispositivos</li>
                <li>Integração com redes sociais</li>
                <li>Painel administrativo intuitivo</li>
                <li>Analytics e relatórios de desempenho</li>
            </ul>
            <p>Processo de desenvolvimento:</p>
            <ol>
                <li>Análise de requisitos e briefing</li>
                <li>Desenvolvimento do layout</li>
                <li>Programação e implementação</li>
                <li>Testes e otimizações</li>
                <li>Treinamento e entrega</li>
            </ol>
        `
    },
    'E-commerce': {
        description: `
            <p>Criação de lojas virtuais completas incluindo:</p>
            <ul>
                <li>Catálogo de produtos organizado</li>
                <li>Sistema de carrinho de compras</li>
                <li>Integração com meios de pagamento</li>
                <li>Gestão de estoque</li>
                <li>Cálculo de frete automático</li>
                <li>Relatórios de vendas</li>
                <li>Área do cliente</li>
            </ul>
            <p>Recursos adicionais:</p>
            <ul>
                <li>Cupons de desconto</li>
                <li>Produtos relacionados</li>
                <li>Avaliações de produtos</li>
                <li>Múltiplas formas de pagamento</li>
            </ul>
        `
    },
    'Sistemas Web': {
        description: `
            <p>Desenvolvimento de sistemas personalizados com:</p>
            <ul>
                <li>Análise detalhada de requisitos</li>
                <li>Arquitetura escalável</li>
                <li>APIs RESTful</li>
                <li>Banco de dados otimizado</li>
                <li>Segurança e backup</li>
                <li>Documentação completa</li>
            </ul>
            <p>Metodologia:</p>
            <ul>
                <li>Desenvolvimento ágil</li>
                <li>Sprints semanais</li>
                <li>Testes automatizados</li>
                <li>Deploy contínuo</li>
            </ul>
        `
    },
    'Consultoria Web': {
        description: `
            <p>Serviços de consultoria incluindo:</p>
            <ul>
                <li>Análise de infraestrutura</li>
                <li>Otimização de performance</li>
                <li>Segurança da informação</li>
                <li>Arquitetura de software</li>
                <li>Melhores práticas de desenvolvimento</li>
            </ul>
            <p>Benefícios:</p>
            <ul>
                <li>Redução de custos</li>
                <li>Aumento de produtividade</li>
                <li>Modernização tecnológica</li>
                <li>Treinamento da equipe</li>
            </ul>
        `
    }
};

// Elementos do DOM
const servicoModal = document.getElementById('servicoModal');
const modalServicoTitle = document.getElementById('modalServicoTitle');
const modalServicoContent = document.getElementById('modalServicoContent');
const closeServicoModal = servicoModal.querySelector('.close-modal');

// Abrir modal de serviço
document.querySelectorAll('.btn-saiba-mais').forEach(button => {
    button.addEventListener('click', () => {
        const servicoTitle = button.parentElement.querySelector('h3').textContent;
        const servicoData = servicosData[servicoTitle];

        modalServicoTitle.textContent = servicoTitle;
        modalServicoContent.innerHTML = servicoData.description;

        servicoModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Fechar modal
closeServicoModal.addEventListener('click', () => {
    servicoModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === servicoModal) {
        servicoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}); 