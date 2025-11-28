# EADDWE_EQUIPE_C
Projeto do trabalho de desenvolvimento WEB
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Exemplo com Bootstrap</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Seu CSS -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Meu Site</a>
    </div>
  </nav>

  <!-- Conteúdo -->
  <div class="container mt-5">
    <h1 class="text-primary">Olá, Bootstrap!</h1>
    <p>Este texto está estilizado com Bootstrap e também com CSS próprio.</p>
    <button id="btnModal" class="btn btn-success">Abrir Modal</button>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="meuModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal Externo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          Este modal foi aberto com JavaScript externo.
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

  <!-- Seu JS -->
  <script src="js/script.js"></script>
</body>
</html>
