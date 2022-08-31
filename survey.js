const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {
  nickname: '',
  activity: '',
  music: '',
  meal: '',
  food: '',
  sport: '',
  superpower: '',
}

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  console.log(`Thanks ${answer}`);
  answers.nickname = answer;
  activity();
});

const activity = () => {
  rl.question(`${answers.nickname}, what's an activity you like doing? `, (answer) => {
  console.log(`${answer} sounds fun!`);
  answers.activity = answer;
  music();
})};

const music = () => {
  rl.question(`What do you listen to while ${answers.activity}? `, (answer) => {
  console.log(`${answer} is perfect for ${answers.activity}!`);
  answers.music = answer;
  meal();
})};

const meal = () => {
  rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.), ${answers.nickname}? `, (answer) => {
  console.log(`I love ${answer} too`);
  answers.meal = answer;
  food();
})};

const food = () => {
  rl.question(`What's your favourite thing to eat for ${answers.meal}? `, (answer) => {
  console.log(`mmmmmm....${answer}`);
  answers.food = answer;
  sport();
})};

const sport = () => {
  rl.question(`Which sport is your absolute favourite? `, (answer) => {
  console.log(`${answer} is a great sport!`);
  answers.sport = answer;
  superpower();
})};

const superpower = () => {
  rl.question(`What is your superpower ${answers.nickname}? In a few words, tell us what you are amazing at!`, (answer) => {
  console.log(`Wow, ${answer} is cool!`);
  answers.superpower = answer;
  generateProfile(answers);
  rl.close();
})};

const generateProfile = (answers) => {
  console.log(`${answers.nickname} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.food} for ${answers.meal}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.superpower}.`)
}

