// // TEXT REVEAL SCROLL FOR BOUDOIR SECTION PARAGRAPH

// // Define las variables necesarias
// let availableToReveal = false;
// let locoScroll;

// // Función para obtener la posición actual del scroll
// const getCurrentScroll = () => {
//     return locoScroll.scroll.instance.scroll.y;
// };

// // Función para ajustar el tamaño del texto
// const fitText = () => {
//     let fontSize = 52;

//     while (
//         textContainerContent.offsetWidth > textContainer.offsetWidth ||
//         textContainerContent.offsetHeight > textContainer.offsetHeight
//     ) {
//         fontSize--;

//         if (fontSize <= 10) {
//             break;
//         }

//         textContainerContent.style.fontSize = fontSize + "px";
//     }
// };

// // Función para revelar las palabras activas
// const revealActiveWords = () => {
//     const currentScrollPosition = getCurrentScroll();

//     let activeWords;
//     const containerCurrentScroll = currentScrollPosition - containerStart;

//     // Obtiene el número de palabras activas
//     if (currentScrollPosition > containerEnd) {
//         activeWords = words.length;
//     } else if (currentScrollPosition < containerStart) {
//         activeWords = 0;
//     } else {
//         availableToReveal = true;
//         activeWords = Math.round(containerCurrentScroll / pixelsPerWord);
//     }

//     if (availableToReveal) {
//         for (let i = 0; i < words.length; i++) {
//             if (activeWords > i) {
//                 words[i].style.opacity = 1;
//             } else {
//                 words[i].style.opacity = -0.1;
//             }
//         }
//     }

//     if (
//         currentScrollPosition > containerEnd ||
//         currentScrollPosition < containerStart
//     ) {
//         availableToReveal = false;
//     }
// };

// // Inicialización de Locomotive Scroll
// locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
// });

// // Obtiene los elementos del DOM
// const revealContainer = document.getElementById("reveal");
// const containerHeight = revealContainer.clientHeight;
// const containerStart = revealContainer.getBoundingClientRect().top;
// const containerEnd = containerStart + containerHeight;
// const words = revealContainer.getElementsByTagName("span");
// const textContainer = revealContainer.getElementsByClassName("textscroll")[0];
// const textContainerContent = textContainer.getElementsByTagName("p")[0];
// const pixelsPerWord = Math.round(containerHeight / words.length);

// // Inicia el ajuste del texto y la revelación de palabras
// fitText();
// revealActiveWords();

// // Agrega un listener para actualizar el ajuste del texto al redimensionar la ventana
// window.addEventListener("resize", fitText);

// // Agrega un listener para revelar palabras al hacer scroll
// locoScroll.on("scroll", revealActiveWords);


