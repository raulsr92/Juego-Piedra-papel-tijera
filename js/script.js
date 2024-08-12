        // Opciones: 1 -> piedra, 2-> papel, 3-> tijera

        // Paso 1: Declarar variables

        let jugador;
        let jugadorTexto;
        let pc;
        let pcTexto;
        let resultado;
        let triunfosPc=0;
        let triunfosJugador=0;

        // Paso 7.1: Capturar elementos HTML donde se mostrarán los resultados

        let parrafoPC = document.querySelector(".option--pc");
        console.log(parrafoPC);
        let parrafoJugador = document.querySelector(".option--jugador");
        let parrafoResultado = document.querySelector(".option--resultado");
        let parrafoVeredicto = document.querySelector(".option--veredicto");
        let parrafoPuntajeJugador = document.querySelector(".puntaje--jugador");
        let parrafoPuntajePc = document.querySelector(".puntaje--pc");


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
            jugadorTexto = prompt("Elija una opción: piedra, papel o tijera");
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
                default: alert("La opcion elejida no es correcta")    
            }
            return jugador; 
        }

        // Paso 4: Evaluar y Seleccionar al ganador

        function asignarResultado(eleccionJugador, eleccionPc) {
            if (eleccionJugador==eleccionPc) {
                resultado = 2
            }else if(eleccionJugador==1 && eleccionPc==2){
                    resultado = 0
                    triunfosPc = triunfosPc+1;

            }else if(eleccionJugador==1 && eleccionPc==3){
                    resultado = 1
                    triunfosJugador = triunfosJugador+1;

            }else if (eleccionJugador==2 && eleccionPc==1){
                    resultado = 1
                    triunfosJugador = triunfosJugador+1;

            }else if (eleccionJugador==2 && eleccionPc==3){
                    resultado = 0
                    triunfosPc = triunfosPc+1;

            }else if (eleccionJugador==3 && eleccionPc==1){
                    resultado = 0
                    triunfosPc = triunfosPc+1;

            }else if (eleccionJugador==3 && eleccionPc==2){
                    resultado = 1
                    triunfosJugador = triunfosJugador+1;
            }
            return resultado;
        }

        function evaluarGanador(result){
            if (result==1) {
                return "Usted Gana"
            } else if(result==0){
                return "La PC Gana"
            } else{
                return "Es un empate"
            }
        }

        
        // Paso 5: Invocar funciones


        while (triunfosJugador<3 && triunfosPc<3) {
            asignarValorPc()
            asignarValorJugador()

            alert("PC eligió: "+ pcTexto)
            alert("Usted eligió: "+ jugadorTexto)

            asignarResultado(jugador,pc)
            alert(evaluarGanador(resultado))
            alert("Puntaje jugador: " + triunfosJugador);
            alert("Puntaje pc: " + triunfosPc);

        }


        //Paso 6: Test

        console.log(pc);
        console.log(pcTexto);
        console.log(jugador);
        console.log(jugadorTexto);


        //Paso 7: Impresión:


        parrafoPC.innerHTML = `<strong>La PC eligió:</strong> ${pcTexto}`;
        parrafoJugador.innerHTML = `<strong>Usted eligió:</strong> ${jugadorTexto}`;
        parrafoResultado.innerHTML = `<strong>Resultado de la partida: </strong> ${evaluarGanador(resultado)}`
        parrafoPuntajeJugador.innerHTML = `<strong>Puntaje Jugador:</strong> ${triunfosJugador}`;
        parrafoPuntajePc.innerHTML= `<strong>Puntaje PC:</strong> ${triunfosPc}`;

        if(triunfosPc==3){
            parrafoVeredicto.innerHTML = `<strong> La PC ha ganado 3 veces seguidas, ¡Ha perdido!</strong>`
        } else if(triunfosJugador ==3){
            parrafoVeredicto.innerHTML = `<strong> Usted ha ganado 3 veces seguidas, ¡es el vencedor!</strong>`
        }    

        alert("Terminó el juego!")    