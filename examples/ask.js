var Prompt = require('..');
var prompt = new Prompt({
  name: 'order',
  default: 5,
  message: 'What would you like to order?',
  choices: [
    'Coke',
    'Diet Coke',
    'Cherry Coke',
    {
      name: 'Sprite',
      disabled: 'Temporarily unavailable'
    },
    'Water',
    'Pepsi',
    'Dr. Pepper',
    'Yoohoo',
    'Diet Pepsi'
  ]
});

prompt.ask(function(answer) {
  console.log(answer);
});
