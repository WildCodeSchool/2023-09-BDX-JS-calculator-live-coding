console.log("calculatrice wild code scholl 09 23 Ò.ó");
const displayResult = (nombre1, operateur, nombre2, calculate = false) => {
  const resultSpan = document.querySelector(".result-txt");
  resultSpan.innerHTML = `${nombre1} ${operateur} ${nombre2}`;
};
displayResult(1, "m", 1);
