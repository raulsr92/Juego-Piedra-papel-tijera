        // Opciones: 1 -> piedra, 2-> papel, 3-> tijera

        // Paso 1: Declarar variables

        let jugador = 0;
        let jugadorTexto;
        let pc;
        let pcTexto;
        let resultado;

        // Paso 2: Obtener valor de la pc
        
        function asignarValorPc() {
            let aleatorio=4;
            while (aleatorio > 3 || aleatorio ==0){
                aleatorio = Math.floor((Math.random()*10));;
            }

            pc =aleatorio;

            switch (pc) {
                case 1:
                    pcTexto = "piedra";
                    break;

                case 2:
                    pcTexto = "papel";
                    break;    
                    
                case 3:
                    pcTexto = "tijera";
                    break;  
            }

            return pc; 
        }

        // Paso 3: Obtener valor del usuario

        function asignarValorJugador() {
            jugadorTexto = prompt("Escriba piedra, papel o tijera");
            switch (jugadorTexto) {
                case "piedra":
                    jugador = 1;
                    break;

                case "papel":
                    jugador = 2;

                    break;    
                    
                case "tijera":
                    jugador = 3;
                    break;  
            }
            return jugador; 
        }

        // Paso 4: Evaluar y Seleccionar al ganador

        function evaluarGanador(eleccionJugador, eleccionPc) {
            if (eleccionJugador==eleccionPc) {
                resultado = "Ambos eligieron la misma opción, es un empate"
            }else if(eleccionJugador==1 && eleccionPc==2){
                    resultado = `¡Gana la PC!, porque el papel envuelve a la piedra`
            }else if(eleccionJugador==1 && eleccionPc==3){
                    resultado = `¡Usted gana!, porque la piedra tritura la tijera`
            }else if (eleccionJugador==2 && eleccionPc==1){
                    resultado = `¡Usted gana!, porque el papel envuelve a la piedra`
            }else if (eleccionJugador==2 && eleccionPc==3){
                    resultado = `¡Gana la PC!, porque la tijera corta el papel`
            }else if (eleccionJugador==3 && eleccionPc==1){
                    resultado = `¡Gana la PC!, porque la piedra tritura la tijera`
            }else if (eleccionJugador==3 && eleccionPc==2){
                    resultado = `¡Usted gana!, porque la tijera corta el papel`
            }

            return resultado;
        }

        // Paso 5: Invocar funciones

        asignarValorPc();
        asignarValorJugador();
        evaluarGanador(jugador,pc);

        //Paso 6: Test

        console.log(pc);
        console.log(pcTexto);
        console.log(jugador);
        console.log(jugadorTexto);

        // Paso7: Mostrar resultados

        // Paso 7.1: Capturar elementos HTML donde se mostrarán los resultados

        let parrafoPC = document.querySelector(".option--pc");
        let parrafoJugador = document.querySelector(".option--jugador");
        let parrafoResultado = document.querySelector(".option--resultado");

        // Paso 7.2: Establecer el contenido de los elementos HTML desde JS

        parrafoPC.innerHTML = `<strong>La PC eligió:</strong> ${pcTexto}`;
        parrafoJugador.innerHTML = `<strong>Usted eligió:</strong> ${jugadorTexto}`;
        parrafoResultado.innerHTML = `<strong>Resultado de la partida:</strong> ${resultado}`