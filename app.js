const dice = document.getElementById("dice");
const advice = document.getElementById("generatedQuote");
const adviceNumber = document.getElementById("quoteId");

const fetchData = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const { slip } = data;
  adviceNumber.innerHTML = `#${slip.id}`;
  advice.innerHTML = slip.advice;
};

dice.addEventListener("click", fetchData);
dice.onclick = (e) => e.target.classList.add("roll");
dice.ontouchend = (e) => e.target.classList.remove("roll");
dice.onmouseup = (e) => e.target.classList.remove("roll");
