// Abrir/fechar o menu e empurrar o conteúdo
const toggleBtn = document.getElementById('toggleMenu');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('mainContent');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  content.classList.toggle('shift');
});














// Produto / Serviço - Carrossel com produtos e imagens
const carousel = document.getElementById('carouselProdutos');
const lista = document.querySelectorAll('#lista-produtos .list-group-item');

// Função para atualizar cores
function atualizarLista(index) {
  lista.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active', 'bg-primary', 'text-white');
    } else {
      item.classList.remove('active', 'bg-primary', 'text-white');
    }
  });
}

// Inicializa com o primeiro produto
atualizarLista(0);

// Evento do carrossel
carousel.addEventListener('slid.bs.carousel', function (event) {
  const index = event.to; // índice do slide ativo
  atualizarLista(index);
});
// Área para cuidar do contato
  // Área para cuidar do contato
  // Máscara para telefone/celular com DDD
    const telefoneInput = document.getElementById("telefone");
    telefoneInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, ""); // remove não numéricos
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length > 6) {
        e.target.value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        e.target.value = `(${value.slice(0,2)}) ${value.slice(2)}`;
      } else {
        e.target.value = value;
      }
    });
    (function () {
      'use strict';
      const form = document.getElementById('form-contato');
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        const email = document.getElementById("email").value;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
          event.preventDefault();
          event.stopPropagation();
          document.getElementById("email").classList.add("is-invalid");
        }
        const telefone = telefoneInput.value.replace(/\D/g, "");
        if (telefone.length !== 11) {
          event.preventDefault();
          event.stopPropagation();
          telefoneInput.classList.add("is-invalid");
        }
        form.classList.add('was-validated');
      }, false);
    })();