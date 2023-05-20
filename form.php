<!DOCTYPE html>
<html lang="es-ES">
	<head>
		<meta charset="utf-8">
		<title>Formulario de registro</title>
		<link rel="stylesheet" href="style.css">
	</head>
	
	<body>

		<header>
		</header>
		
        <div id="registro"> <!--Registro-->
            <form method="POST" action="" class="formulario" id="formulario">
                <h1>Formulario de registro</h1>
                <br>
                <!--Nombre-->
                <div class="formulario_grupo" id="grupo_nombre">
                <label for="nombre" class="formulario_label">Nombre</label>
                    <div class="formulario_grupo_input">
                        <input class="formulario_input" type="text" id="nombre" name="nombre" required="required" placeholder="Nombre"/>
                        <img src="ima_genes\error-icon.svg" id="formulario_mal" alt="error" class="formulario_validacion_estado_mal" >
                        <img src="ima_genes\success-icon.svg" id="formulario_bien" alt="bueno" class="formulario_validacion_estado_bien">
                    </div>
                    <p class="formulario_input_error">Solo letras</p>
                    <p class="formulario_input_vacio">Rellene este campo</p>
                </div>
                <br>

                <!--Apellido-->
                <div class="formulario_grupo" id="grupo_apellido">
                    <label for="nombre" class="formulario_label">Apellido</label>
                        <div class="formulario_grupo_input">
                            <input class="formulario_input" type="text" id="apellido" name="apellido" required="required" placeholder="Apellido"/>
                            <img src="ima_genes\error-icon.svg" id="formulario_mal" alt="error" class="formulario_validacion_estado_mal" >
                            <img src="ima_genes\success-icon.svg" id="formulario_bien" alt="bueno" class="formulario_validacion_estado_bien">
                        </div>
                        <p class="formulario_input_error">Solo letras</p>
                        <p class="formulario_input_vacio">Rellene este campo</p>
                    </div>
                    <br>

                <!--Email-->
                <div class="formulario_grupo" id="grupo_email">
                    <label for="email" class="formulario_label">Email</label>
                        <div class="formulario_grupo_input">
                            <input class="formulario_input" type="email" id="email" name="email" required="required" placeholder="Email"/>
                            <img src="ima_genes\error-icon.svg" id="formulario_mal" alt="error" class="formulario_validacion_estado_mal" >
                            <img src="ima_genes\success-icon.svg" id="formulario_bien" alt="bueno" class="formulario_validacion_estado_bien">
                        </div>
                    <p class="formulario_input_error">Email inválido</p>
                    <p class="formulario_input_vacio">Rellene este campo</p>
                </div>
                <br>
                
                <div class="formulario_grupo formulario_grupo_enviar">
                    <input id="enviar" type="submit" name="enviar" value="ENVIAR"/>
                    <p class="formulario_mensaje_exito" id="formulario_mensaje_exito">Se han registrado los datos correctamente.</p>
                </div>

                <?php
                    if($_POST){
                        $nombre = $_POST['nombre'];
                        $apellido = $_POST['apellido'];
                        $email = $_POST['email'];
                        //Conexion PDO
                        $servername = "localhost";
                        $username = "root";
                        $password = "";
                        $dbname = "cursosql";
                        //Crear conexion
                        $conn = new mysqli($servername, $username, $password, $dbname);
                        //Check conexion
                        if ($conn->connect_error) {
                            die("Fallo en la conexión: " . $conn->connect_error);
                        }
                    
                        $sql = "INSERT INTO usuario (nombre, apellido, email)
                        VALUES('$nombre', '$apellido', '$email')";

                        if ($conn->query($sql) === TRUE) {
                            echo "Se ha registrado correctamente.";
                        } else {
                            echo "Error: " . $sql . "<br>" . $conn->error;
                        }
                        $conn->close();
                    }
                ?>

            </form>
        </div>

		<footer>
			Samsung DesArrolladoras 2023
		</footer>	
        <script src="index.js"></script>

	</body>
</html>