<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Morsezeichen</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="index.php">codifica</a>
                    <a class="nav-link" href="decodifica.php">decodifica</a>
                    <a class="nav-link" href="morse.php">morse</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        <h1 class="text-center">Tabela Código Morse</h1>

        <?php
        $nomedoservidor = "localhost";
        $nomeusuario = "goat";
        $senhausuario = "1q2w3e4r";
        $nomebancodedados = "codigo_morse";

        // Criar a conexão
        $conexao = new mysqli(hostname: $nomedoservidor, username: $nomeusuario, password: $senhausuario, database: $nomebancodedados);

        // Checar conexão
        if ($conexao->connect_error) {
            die("Conexão falhou: " . $conexao->connect_error);
        }

        $sql = "SELECT * FROM codigo_morse";
        $resultado = $conexao->query(query: $sql);

        // Testar se banco devolveu resultado
        if ($resultado->num_rows > 0) {
            echo '
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Alfabeto</th>
                        <th>Código Morse</th>
                    </tr>
                </thead>
                <tbody>
            ';

            // Imprimir informações na tela
            while ($linha = $resultado->fetch_assoc()) {
                echo '
                    <tr>
                        <td>' . $linha['alfabeto'] . '</td>
                        <td>' . $linha['morse'] . '</td>
                    </tr>
                ';
            }

            echo '
                </tbody>
            </table>
            ';
        } else {
            echo '<div class="alert alert-warning" role="alert">Nenhum resultado encontrado</div>';
        }

        // Fechar a conexão
        $conexao->close();
        ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossorigin="anonymous"></script>
</body>

</html>