const say = require("say");

// say.speak("Hello");

// say.stop();

say.speak("Hello?", "Alex", 1.5);

function sorryDave() {
  say.speak("I'm sorry, Dave.", "Alex", 0.75);
}

setInterval(() => sorryDave(), 5000);
