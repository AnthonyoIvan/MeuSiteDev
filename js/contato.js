document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Mostrar indicador de carregamento
    const submitBtn = this.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    // Obter dados do formulário
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        assunto: document.getElementById('assunto').value,
        mensagem: document.getElementById('mensagem').value
    };

    try {
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            // Mostrar mensagem de sucesso
            showNotification('success', data.message);
            // Limpar formulário
            this.reset();
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        showNotification('error', error.message || 'Erro ao enviar mensagem. Por favor, tente novamente.');
        console.error('Erro:', error);
    } finally {
        // Restaurar botão
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
});

// Função para mostrar notificações
function showNotification(type, message) {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        ${message}
    `;

    // Adicionar ao DOM
    document.body.appendChild(notification);

    // Remover após 5 segundos
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Animação suave de scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 