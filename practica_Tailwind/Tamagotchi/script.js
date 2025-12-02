    let intelecto = 50;
    let oratoria = 50;
    let energia = 50;

    function actualizarUI() {

      // BARRAS
      document.getElementById("barraintelecto").style.width = intelecto + "%";
      document.getElementById("barraoratoria").style.width = oratoria + "%";
      document.getElementById("barraEnergia").style.width = energia + "%";

      // CAMBIAR IMAGEN SEGÚN ESTADO
      const promedio = (intelecto + oratoria + energia) / 3;
      const img = document.getElementById("personaje");

      if (promedio >= 70) img.src = "img/contento.gif";
      else if (promedio >= 40) img.src = "img/serio.gif";
      else img.src = "img/triste.gif";
    }

    function leer() {
      intelecto = Math.min(100, intelecto + 20);
      oratoria = Math.max(0, oratoria - 5);
      energia = Math.max(0, energia - 5);
      actualizarUI();
    }

    function debatir() {
      oratoria = Math.min(100, oratoria + 20);
      energia = Math.max(0, energia - 15);
      intelecto = Math.max(0, intelecto - 10);
      actualizarUI();
    }

    function meditar() {
      energia = Math.min(100, energia + 30);
      oratoria = Math.max(0, oratoria - 5);
      actualizarUI();
    }

