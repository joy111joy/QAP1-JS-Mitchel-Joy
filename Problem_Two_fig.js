// This module creates acsii art from text.

const figlet = require('figlet');
figlet.text(
  // The text to convert to ascii art
    "Hello there, how are you?",
    {
      // The font to use
      font: "epic",
      //Width
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      //Error control
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      //Logging the ascii art
      console.log(data);
    }
  );