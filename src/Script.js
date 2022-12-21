function HabilitaBotaoJogar() {
   if (document.getElementById('numero6').value != "") {
      document.getElementById('jogar').disabled = false;
   } else {
      document.getElementById('jogar').disabled = true;
   }
}



function VerificarNumero(numero) {
   if (isNaN(numero.value)) {
      alert("Não é aceito digitação diferente de numero.");
      numero.value = "";
      numero.focus();
      return;
   }
   if (numero.id == "numero1") {
      if (numero.value == document.getElementById("numero2").value ||
         numero.value == document.getElementById("numero3").value ||
         numero.value == document.getElementById("numero4").value ||
         numero.value == document.getElementById("numero5").value ||
         numero.value == document.getElementById("numero6").value
      ) {
         alert("O numero esta repetido");
         numero.value = "";
         numero.focus();
         return;
      }
   }
   if (numero.id == "numero2") {
      if (numero.value == document.getElementById("numero1").value ||
         numero.value == document.getElementById("numero3").value ||
         numero.value == document.getElementById("numero4").value ||
         numero.value == document.getElementById("numero5").value ||
         numero.value == document.getElementById("numero6").value
      ) {
         alert("O numero esta repetido");
         numero.value = "";
         numero.focus();
         return;
      }
   }
   if (numero.id == "numero3") {
      if (numero.value == document.getElementById("numero2").value ||
         numero.value == document.getElementById("numero1").value ||
         numero.value == document.getElementById("numero4").value ||
         numero.value == document.getElementById("numero5").value ||
         numero.value == document.getElementById("numero6").value
      ) {
         alert("O numero esta repetido");
         numero.value = "";
         numero.focus();
         return;
      }
   }
   if (numero.id == "numero4") {
      if (numero.value == document.getElementById("numero2").value ||
         numero.value == document.getElementById("numero3").value ||
         numero.value == document.getElementById("numero1").value ||
         numero.value == document.getElementById("numero5").value ||
         numero.value == document.getElementById("numero6").value
      ) {
         alert("O numero esta repetido");
         numero.value == "";
         numero.focus();
         return;
      }
   }
   if (numero.id == "numero5") {
      if (numero.value == document.getElementById("numero2").value ||
         numero.value == document.getElementById("numero3").value ||
         numero.value == document.getElementById("numero4").value ||
         numero.value == document.getElementById("numero1").value ||
         numero.value == document.getElementById("numero6").value
      ) {
         alert("O numero esta repetido");
         numero.value = "";
         numero.focus();
         return;
      }
   }
   if (numero.id == "numero6") {
      if (numero.value == document.getElementById("numero2").value ||
         numero.value == document.getElementById("numero3").value ||
         numero.value == document.getElementById("numero4").value ||
         numero.value == document.getElementById("numero5").value ||
         numero.value == document.getElementById("numero1").value
      ) {
         alert("O numero esta repetido");
         numero.value = "";
         numero.focus();
         return;
      }
   }
   if (numero.value < 1 || numero.value > 60) {
      alert("Este numero esta fora do parâmetro do jogo 1 a 60!");
      numero.value = ""; /*Avalia o numero digitado e limpa o campo.*/
      numero.focus(); /*Posiciona ou permanece no campo pra correção*/
   }
}

function getRandomNumbers(n, min, max) {
   // Cria um array vazio para armazenar os números aleatórios
   const numbers = [];

   // Gera n números aleatórios e adiciona ao array
   for (let i = 0; i < n; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.push(randomNumber);
   }

   // Retorna o array de números aleatórios
   return numbers;
}

function Jogar() {
   DesativarInput();
   var resultado = getRandomNumbers(6, 1, 60);
   const ani = document.querySelector('#numero1');
   const ani2 = document.querySelector('#numero2');
   const ani3 = document.querySelector('#numero3');
   const ani4 = document.querySelector('#numero4');
   const ani5 = document.querySelector('#numero5');
   const ani6 = document.querySelector('#numero6');

   var numero1 = document.getElementById("numero1");
   var numero2 = document.getElementById("numero2");
   var numero3 = document.getElementById("numero3");
   var numero4 = document.getElementById("numero4");
   var numero5 = document.getElementById("numero5");
   var numero6 = document.getElementById("numero6");

   for (var i = 0; i <= 5; i++) {

      if (numero1.value == resultado[i]) {
         var num1 = resultado[i];
      }

      if (numero2.value == resultado[i]) {
         var num2 = resultado[i];
      }

      if (numero3.value == resultado[i]) {
         var num3 = resultado[i];
      }
      if (numero4.value == resultado[i]) {
         var num4 = resultado[i];
      }
      if (numero5.value == resultado[i]) {
         var num5 = resultado[i];
      }
      if (numero6.value == resultado[i]) {
         var num6 = resultado[i];
      }

   }
   ani.classList.add('animat');
   // animação do 1° numero
   if (numero1.value == num1) {
      setTimeout(() => {
         ani.style.color = 'white';
         ani.classList.remove('animat');
         ani.style.backgroundColor = '#0DD96B';
         ani2.classList.add('animat');
      }, 2500);
   } else {
      setTimeout(() => {
         ani.style.color = 'white';
         ani.classList.remove('animat');
         ani.style.backgroundColor = '#F52D33';
         ani2.classList.add('animat');
      }, 2500);
   }

   // animação do 2° numero
   if (numero2.value == num2) {
      setTimeout(() => {
         ani2.classList.remove('animat');
         ani2.style.color = 'white';
         ani2.style.backgroundColor = '#0DD96B';
         ani3.classList.add('animat');
      }, 5000);
   } else {
      setTimeout(() => {
         ani2.classList.remove('animat');
         ani2.style.color = 'white';
         ani2.style.backgroundColor = '#F52D33';
         ani3.classList.add('animat');
      }, 5000);
   }

   // animação do 3° numero
   if (numero3.value == num3) {
      setTimeout(() => {
         ani3.style.color = 'white';
         ani3.classList.remove('animat');
         ani3.style.backgroundColor = '#0DD96B';
         ani4.classList.add('animat');
      }, 7500);
   } else {
      setTimeout(() => {
         ani3.style.color = 'white';
         ani3.classList.remove('animat');
         ani3.style.backgroundColor = '#F52D33';
         ani4.classList.add('animat');
      }, 7500);
   }

   // animação do 4° numero
   if (numero4.value == num4) {
      setTimeout(() => {
         ani4.style.color = 'white';
         ani4.classList.remove('animat');
         ani4.style.backgroundColor = '#0DD96B';
         ani5.classList.add('animat');
      }, 10000);
   } else {
      setTimeout(() => {
         ani4.style.color = 'white';
         ani4.classList.remove('animat');
         ani4.style.backgroundColor = '#F52D33';
         ani5.classList.add('animat');
      }, 10000);
   }

   // animação do 5° numero
   if (numero5.value == num5) {
      setTimeout(() => {
         ani5.style.color = 'white';
         ani5.classList.remove('animat');
         ani5.style.backgroundColor = '#0DD96B';
         ani6.classList.add('animat');
      }, 12500);
   } else {
      setTimeout(() => {
         ani5.style.color = 'white';
         ani5.classList.remove('animat');
         ani5.style.backgroundColor = '#F52D33';
         ani6.classList.add('animat');
      }, 12500);
   }

   // animação do 6° numero
   if (numero6.value == num6) {
      setTimeout(() => {
         ani6.style.color = 'white';
         ani6.classList.remove('animat');
         ani6.style.backgroundColor = '#0DD96B';
         Resultado(resultado);
      }, 15000);
   } else {
      setTimeout(() => {
         ani6.style.color = 'white';
         ani6.classList.remove('animat');
         ani6.style.backgroundColor = '#F52D33';
         Resultado(resultado);
      }, 15000);
   }

   const button = document.getElementById("jogar");
   button.setAttribute('value', 'Jogar Novamente');
   button.setAttribute('id', 'jogarnovamente');
   button.setAttribute('onclick', 'JogarNovamente()');

}



function Resultado(resultado) {
   var verificacao = 0
   const minhaDiv = document.getElementById('resultado');

   var numeros = resultado;
   minhaDiv.addEventListener('mouseenter', () => {
      document.getElementById("resultado").innerHTML = numeros;
   });


   for (var i = 0; i <= 5; i++) {
      var numero = resultado[i];
      if (document.getElementById("numero1").value == numero ||
         document.getElementById("numero2").value == numero ||
         document.getElementById("numero3").value == numero ||
         document.getElementById("numero4").value == numero ||
         document.getElementById("numero5").value == numero ||
         document.getElementById("numero6").value == numero) {
         verificacao = verificacao + 1;
      }
   }
   if (verificacao > 0) {
      document.getElementById("resultado").innerHTML = "Parabéns! Você acertou: " + verificacao + " numero(s)";
      minhaDiv.addEventListener('mouseleave', () => {
         document.getElementById("resultado").innerHTML = "Parabéns! Você acertou: " + verificacao + " numero(s)";
      });
   } else {
      document.getElementById("resultado").innerHTML = "Voce não acertou nenhum numero, tente novamente.";
      minhaDiv.addEventListener('mouseleave', () => {
         document.getElementById("resultado").innerHTML = "Voce não acertou nenhum numero, tente novamente.";
      });
   }
   var resultado = document.getElementById("resultado");
   resultado.style.border = "2px solid #333";
}


function JogarNovamente() {
   location.reload();
}


function mudarvalor(num) {
   if (num == '1') {
      var numero1 = document.getElementById("numero1");
      numero1.value = "";
   }
   if (num == '2') {
      var numero2 = document.getElementById("numero2");
      numero2.value = "";
   }
   if (num == '3') {
      var numero3 = document.getElementById("numero3");
      numero3.value = "";
   }
   if (num == '4') {
      var numero4 = document.getElementById("numero4");
      numero4.value = "";
   }
   if (num == '5') {
      var numero5 = document.getElementById("numero5");
      numero5.value = "";
   }
   if (num == '6') {
      var numero6 = document.getElementById("numero6");
      numero6.value = "";
   }
}

function ButtonMod() {
   var numero1 = document.getElementById("numero1");
   var numero2 = document.getElementById("numero2");
   var numero3 = document.getElementById("numero3");
   var numero4 = document.getElementById("numero4");
   var numero5 = document.getElementById("numero5");
   var numero6 = document.getElementById("numero6");
   var cbt = document.getElementById("cbt");

   setTimeout(() => {
      if (numero1.value != '0' && numero2.value != '0' && numero3.value != '0' && numero4.value != '0' && numero5.value != '0' && numero6.value != '0') {
         cbt.style.display = "flex";
      }
   }, 600);

}

function DesativarInput() {
   document.getElementById("numero1").setAttribute("disabled", true)
   document.getElementById("numero2").setAttribute("disabled", true)
   document.getElementById("numero3").setAttribute("disabled", true)
   document.getElementById("numero4").setAttribute("disabled", true)
   document.getElementById("numero5").setAttribute("disabled", true)
   document.getElementById("numero6").setAttribute("disabled", true)
}

