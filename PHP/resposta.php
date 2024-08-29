<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>exer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>

  <?php
  if(isset($_GET['inserido'])){
  ?>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>inserido com sucesso</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>  
<?php
  }
 ?>
  

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
</div>

<?php


$nomedoservidor = "localhost";
$nomeusuario = "nayara";
$senhausuario = "1q2w3e4r";
$nomebancodedados = "nayara";

//Criar a conexão
$conexao = new mysqli($nomedoservidor, $nomeusuario, $senhausuario, $nomebancodedados);

//checar conexao
if($conexao->connect_error){
    die("Conexão falhou: ".$conexao->connect_error);
}

//NOSSO SQL
if(isset($_POST['nome'])){
    $sql = "SELECT * FROM pessoas WHERE nome LIKE '%".$_POST['nome']."%'";
}
else{
    $sql = "SELECT * FROM pessoas";
}
$resultado = $conexao->query($sql);

//testar se banco devolveu resultado
if($resultado->num_rows > 0){

    echo     "<div class='container'><div class='row'>";


    //imprimir informações na tela
    while($linha = $resultado->fetch_assoc()){
       echo 
"<div class='col-sm-6'><div class='card'>
       <img src='".$linha['img']."' class='card-img-top' alt='...' style='width: 15rem;'><br>".$linha['nome']."<br>".$linha['Idade']."<br>".$linha['Serie']."<br>".$linha['CPF']."<br>".$linha['RG']."<br>".$linha['Hobbies']."</div></div>";
    }

    echo "</div></div>";
}


else{
    echo "0 resultados";
}

//fechar conexão com banco de dados
$conexao->close();

?>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
</body>
</html>