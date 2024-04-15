const playSound = (idElementSound) =>
  document.querySelector(idElementSound).play();

const teclas = document.querySelectorAll(".tecla");

for (let i = 0; i < teclas.length; i++) {
  const sounds = teclas[i].classList[1];
  const idElement = `#som_${sounds}`;
  teclas[i].onclick = () => {
    playSound(idElement);
  };
}
// let i = 0;

// while (i < teclas.length) {
//   const sounds = teclas[i].classList[1];
//   const idElement = `#som_${sounds}`;
//   teclas[i].onclick = () => {
//     playSound(idElement);
//   };
//   i++;
// }

tecla.onkeydown = () => {
  tecla.classList.add("ativa");
};
