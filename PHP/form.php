<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>exer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="login.php">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="form.php">Inserir</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="resposta.php">Todos</a>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>  

    <form action="inserir.php" method="POST">
      <div class="mb-3">
        <label for="nome" class="form-label">Nome</label>
        <input type="text" class="form-control" id="nome" name="nome" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="idade" class="form-label">Idade</label>
        <input type="idade" class="form-control" id="idade" name="idade">
      </div>
      <div class="mb-3">
        <label for="serie" class="form-label">Serie</label>
        <input type="text" class="form-control" id="serie" name="serie" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="hobbies" class="form-label">Hobbies</label>
        <input type="hobbies" class="form-control" id="hobbies" name="hobbies">
      </div>
      <div class="mb-3">
        <label for="RG" class="form-label">RG</label>
        <input type="text" class="form-control" id="RG" name="RG" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="CPF" class="form-label">CPF</label>
        <input type="idade" class="form-control" id="CPF" name="CPF">
      </div>
      <div class="mb-3">
        <label for="img" class="form-label">Img</label>
        <input type="img" class="form-control" id="img" name="img">
      </div>

      <button type="submit"  name="kkj" class="btn btn-primary">Submit</button>
    </form>


</body>
</html>