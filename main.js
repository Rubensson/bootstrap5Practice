const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 150,
});

typewriter.typeString("Disfruta del paseo!").pauseFor(250).start();
