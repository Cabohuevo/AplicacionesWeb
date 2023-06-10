document.getElementById("p1").innerHTML = "Nuevo texto";

        const elemento = document.getElementById("titulo");
        elemento.innerHTML = "Nuevo Encabezado";

        const x = document.getElementById("main");
        console.log(x);
        const y = document.getElementById("p");
        console.log(y);

        const z = document.getElementsByClassName("intro");
        console.log(z);
       

        const listItems = document.querySelectorAll("ul > li");
        console.log(listItems);

        const h1Element = document.querySelector("h1");
        console.log(h1Element);

        const listaDeElementos = document.querySelectorAll("ul > li");
        listaDeElementos.forEach((item) => {
            console.log(item);
        });

        const h1 = document.querySelector("h1");
        h1.style.color = "blue";

        const a = document.getElementById("form1");
        let texto = "";
        for (let i = 0; i < a.length; i++) {
            texto += a.elements[i].value + "<br>";
        }

        document.getElementById("demo").innerHTML = texto;
        console.log(a);

        let lista = document.createElement("ul");
        document.body.appendChild(lista);

        let elemento1 = document.createElement("li");
        elemento1.textContent = "Flor";
        lista.appendChild(elemento1);

        document.getElementById("miImagen").src = "cat.jpg";

        document.getElementById("demo").innerHTML = "Fecha: " + Date();

        x = document.getElementById("demo").innerHTML = "¡Hello World!"