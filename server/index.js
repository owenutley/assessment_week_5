const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Your help makes someone else's day!",
					 "You make others smile!",
					 "Once you start, you always will finish!",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/wisdom", (req, res) => {
  const wisdom = [
    "Fear and desire – two sides of the same coin.",
		"For hate is never conquered by hate. Hate is conquered by love.",
		"He who expects no gratitude shall never be disappointed.",
    "Love truth, but pardon error.",
    "Success is going from failure to failure without loss of enthusiasm.",
    "There is no wisdom greater than kindness.",
    "When more become too much. It’s same as being not enough.",
    "You can’t steal second base and keep your foot on first."
  ];

  let randomIndex = Math.floor(Math.random() * wisdom.length);
  let randomWisdom = wisdom[randomIndex];

  res.status(200).send(randomWisdom);
  
});

app.get("/api/tasks", (req, res) => {
  const tasks = [
    "Make your first success each day by making your bed!",
		"Cleaning where you work is cleaning your mind!",
		"Smile at everyone, especially those you don't know!",
    "Always dress like you have somewhere special to be!",
    "Success is found in the little acomplishments, remember that!",
  ];

  let randomIndex = Math.floor(Math.random() * tasks.length);
  let randomtask = tasks[randomIndex];

  res.status(200).send(randomtask);
  
});


// app.post(`/api/entry`, entry)

app.listen(4000, () => console.log("Server running on 4000"));
