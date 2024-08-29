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


$query = "INSERT INTO pessoas(nome,Serie,Idade,CPF,RG,Hobbies,img ) VALUES ( '".$_POST['nome']."', '".$_POST['serie']."','".$_POST['idade']."','".$_POST['CPF']."','".$_POST['RG']."','".$_POST['hobbies']."','".$_POST['img']."')";

$statement = $conexao->prepare($query);
$statement->execute();



header('location:resposta.php?inserido');





// Insira aqui o código para processar os dados do formulário e inserir no banco de dados

?>

