// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "You're such a strange girl", time: 27 },
    { text: "I think you come from another world", time: 29 },
    { text: "You're such a strange girl", time: 32 },
    { text: "I really don't understand a word", time: 37 },
    { text: "You're such a strange girl", time: 41 },
    { text: "I'd like to shake you around and around", time: 44 },
    { text: "You're such a strange girl", time: 48 },
    { text: "I'd like to turn you all upside down", time: 51 },
    { text: "You're such a strange girl", time: 55 },
    { text: "The way you look like you do", time: 57 },
    { text: "You're such a strange girl", time: 62 },
    { text: "I want to be with you", time: 64 },
    { text: "I think I'm falling", time: 70 },
    { text: "I think I'm falling in", time: 72 },
    { text: "I think I'm falling in love with you", time: 74 },
    { text: "With you", time: 74.2 },
    { text: "I think I'm falling", time: 76 },
    { text: "I think I'm falling in", time: 78 },
    { text: "I think I'm falling in love with you", time: 80 },
    { text: "You're such a strange girl", time: 111 },
    { text: "I think you come from another world", time: 112 },
    { text: "You're such a strange girl", time: 117 },
    { text: "I really don't understand a word", time: 120 },
    { text: "You're such a strange girl", time: 126 },
    { text: "I'd like to shake you around and around", time: 128 },
    { text: "You're such a strange girl", time: 133 },
    { text: "I'd like to turn you all upside down", time: 136 },
    { text: "You're such a strange girl", time: 139 },
    { text: "The way you look like you do", time: 143 },
    { text: "You're such a strange girl", time: 147 },
    { text: "I want to be with you", time: 151 },
    { text: "You're such a strange girl", time: 155 },
    { text: "The way you look like you do", time: 159 },
    { text: "You're such a strange girl", time: 162 },
    { text: "I want to be with you", time: 164 }
  ]

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 30 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 2 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);