var readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.blue.bgYellow.bold("Hey there!! Welcome. \n\n"));
var userName = readlineSync.question(chalk.green("What's your name?\n"));

console.log(chalk.magenta("Hello "+userName+"\nLet's begin the Quiz on Everyone's favourite sitcom -- FRIENDS\n\n"));
if(readlineSync.keyInYN('Do you like to play this quiz?')=== true)
{

var listOfQuestions =[{ques:"What was the name of male nanny, rachel hired for emma?\n",answer:"sandy"},
{ques:"Who is carol's partner?\n" , answer:"susan"},{ques:"Rachel was never a roommate with?\n" , answer:"chandler"},
{ques:"What was the name of the millionaire Monica dated??\n" , answer:"pete"},
{ques:"Who got stuck in a pair of leather pants??\n" , answer:"ross"},
{ques:"Who is the manager of Central Perk?\n" , answer:"gunther"},
{ques:"Who was the first person to find out Monica and Chandler were dating?\n" , answer:"joey"},
{ques:"Where does Chandler move to in season nine?\n" , answer:"tulsa"},
{ques:"Where was Ross and Emily's honeymoon supposed to be?\n" , answer:"greece"},
{ques:"Where do Monica and Chandler move to at the end of the show??\n" , answer:"westchester"},
];

var score=0;

function quiz(ques,answer)
{
  var userAnswer=readlineSync.question(chalk.italic.cyan(ques));
  if(userAnswer.toUpperCase()=== answer.toUpperCase())
{
  score=score+1;
  console.log(chalk.blue("\nyou are right"));
  console.log("score :"+score+"\n");
}
else
{
  console.log(chalk.red("\nyou are wrong\n"));
}
}
for(var i=0;i<10;i++)
{
  quiz(listOfQuestions[i].ques,listOfQuestions[i].answer);
}
if(score>7)
console.log(chalk.bgBlue.white("\nYayyy!!! I guess you are a huge fan of Friends\n Your score: "+score));
else
console.log(chalk.bgRed.white("\nYour score "+score));


console.log("\n\n\n\nSCOREBOARD");
console.log("----------------------")
//score board
var scoreBoard=[{name:"Dexter",scores:10},{name:"Sam",scores:8},{name:"Patrick",scores:8}]
for(var i=0;i<3;i++)
{
  if(score>=scoreBoard[i].scores)
{
  console.log(userName+": "+score);
  var j=i;
  break;
}
console.log(scoreBoard[i].name+": "+scoreBoard[i].scores);
}
for(var i=j;i<3;i++)
{

  console.log(scoreBoard[i].name+": "+scoreBoard[i].scores);
}

if(score<scoreBoard[2].scores)
{
  console.log(userName+": "+score);

}
}
else 
{
  console.log("Okay.  :|  ");
}