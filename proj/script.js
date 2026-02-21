function converter() {
      let valor1 = parseFloat(document.getElementById("valor1").value);
      let conver1 = document.getElementById("conver1").value;
      let conver2 = document.getElementById("conver2").value;

      let res;

      const taxas = {
        USD: 5.18,
        EUR: 6.00  
      };

      if (conver1 === conver2) {
        res = valor1; 
      } else if (conver1 === "BRL") {
        res = valor1 / taxas[conver2];
      } else if (conver2 === "BRL") {
        res = valor1 * taxas[conver1];
      } else {
        res = (valor1 * taxas[conver1]) / taxas[conver2];
      }

      document.getElementById("resultado").value = res.toFixed(2);
    }

    function mudar() {
      let conver1 = document.getElementById("conver1").value;
      let conver2 = document.getElementById("conver2").value;

      document.getElementById("conver1").value = conver2;
      document.getElementById("conver2").value = conver1;
    }