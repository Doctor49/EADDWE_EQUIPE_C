  // Script para abrir/fechar o menu e empurrar o conteúdo
  const toggleBtn = document.getElementById('toggleMenu');
  const sidebar = document.getElementById('sidebarMenu');
  const content = document.getElementById('mainContent');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    content.classList.toggle('shift');
  });