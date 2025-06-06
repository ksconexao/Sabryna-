// Esperar que o DOM seja carregado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const splashScreen = document.getElementById('splash-screen');
    const passwordScreen = document.getElementById('password-screen');
    const mainContent = document.getElementById('main-content');
    const heartImage = document.getElementById('heart-image');
    const passwordInput = document.getElementById('password-input');
    const submitPasswordBtn = document.getElementById('submit-password');
    const passwordError = document.getElementById('password-error');
    
    // Senha (data do casamento: 22/04/2023)
    const correctPassword = '22/04/2023';

    // Adicionar evento de clique ao coração
    heartImage.addEventListener('click', function() {
        // Adicionar classe para animar a saída da splash screen
        splashScreen.style.animation = 'fadeOut 1s forwards';
        
        // Após a animação, mostrar a tela de senha
        setTimeout(function() {
            splashScreen.style.display = 'none';
            passwordScreen.style.display = 'flex';
            passwordScreen.style.animation = 'fadeIn 1s forwards';
        }, 1000);
    });

    // Adicionar evento de clique ao botão de submissão da senha
    submitPasswordBtn.addEventListener('click', function() {
        checkPassword();
    });

    // Adicionar evento de tecla para o campo de senha (Enter)
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    function checkPassword() {
        const enteredPassword = passwordInput.value.trim();
        if (enteredPassword === correctPassword) {
            // Senha correta, animar saída da tela de senha e mostrar conteúdo principal
            passwordScreen.style.animation = 'fadeOut 1s forwards';
            setTimeout(function() {
                passwordScreen.style.display = 'none';
                mainContent.style.display = 'block';
                mainContent.style.animation = 'fadeIn 1s forwards';
                createFloatingElements(); // Iniciar animações de elementos flutuantes
            }, 1000);
        } else {
            // Senha incorreta, mostrar mensagem de erro
            passwordError.textContent = 'Senha incorreta. Tente novamente.';
            passwordInput.value = ''; // Limpar campo de senha
        }
    }
    
    // Função para criar elementos flutuantes adicionais
    function createFloatingElements() {
        const floatingContainer = document.querySelector('.floating-elements');
        const numHearts = 10;
        const numButterflies = 5;
        
        // Criar corações adicionais
        for (let i = 0; i < numHearts; i++) {
            const heart = document.createElement('img');
            heart.src = 'AsGpnYUjwKmh.png';
            heart.alt = 'Coração';
            heart.className = 'floating-heart';
            heart.style.width = `${Math.random() * 30 + 20}px`; // Tamanho aleatório
            heart.style.left = `${Math.random() * 90 + 5}%`; // Posição horizontal aleatória
            heart.style.top = `${Math.random() * 90 + 5}%`; // Posição vertical aleatória
            heart.style.opacity = Math.random() * 0.5 + 0.2; // Opacidade aleatória
            heart.style.animation = `float ${Math.random() * 10 + 15}s infinite ease-in-out ${Math.random() * 5}s`; // Animação com duração e atraso aleatórios
            
            floatingContainer.appendChild(heart);
        }
        
        // Criar borboletas adicionais
        for (let i = 0; i < numButterflies; i++) {
            const butterfly = document.createElement('img');
            butterfly.src = 'fTrm6z5Ijcmd.png';
            butterfly.alt = 'Borboleta';
            butterfly.className = 'floating-butterfly';
            butterfly.style.width = `${Math.random() * 40 + 30}px`; // Tamanho aleatório
            butterfly.style.left = `${Math.random() * 90 + 5}%`; // Posição horizontal aleatória
            butterfly.style.top = `${Math.random() * 90 + 5}%`; // Posição vertical aleatória
            butterfly.style.opacity = Math.random() * 0.5 + 0.3; // Opacidade aleatória
            butterfly.style.animation = `floatButterfly ${Math.random() * 15 + 20}s infinite ease-in-out ${Math.random() * 5}s`; // Animação com duração e atraso aleatórios
            
            floatingContainer.appendChild(butterfly);
        }
    }
    
    // Adicionar animações CSS que faltam
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});

// Função para adicionar efeito de zoom nas imagens da galeria quando clicadas
document.addEventListener('click', function(e) {
    if (e.target.closest('.gallery-item img')) {
        const img = e.target.closest('.gallery-item img');
        
        // Criar overlay para imagem ampliada
        const overlay = document.createElement('div');
        overlay.className = 'image-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '2000';
        overlay.style.cursor = 'pointer';
        
        // Criar imagem ampliada
        const enlargedImg = document.createElement('img');
        enlargedImg.src = img.src;
        enlargedImg.style.maxWidth = '90%';
        enlargedImg.style.maxHeight = '90%';
        enlargedImg.style.objectFit = 'contain';
        enlargedImg.style.border = '3px solid #ff6b6b';
        enlargedImg.style.borderRadius = '5px';
        enlargedImg.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.7)';
        
        // Adicionar imagem ao overlay
        overlay.appendChild(enlargedImg);
        
        // Adicionar overlay ao body
        document.body.appendChild(overlay);
        
        // Fechar overlay ao clicar
        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
    }
});

// Adicionar efeito de rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

