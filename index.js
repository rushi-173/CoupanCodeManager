
var readlineSync = require('readline-sync');
const chalk = require('chalk');
const fs = require('fs');

//imported coupans data from coupans.json
var coupans = require('./coupans');
function check(cpname){
  for(let i=0; i< coupans.length; i++){
    if(Object.keys(coupans[i])[0]==cpname){
      return true;
    }
  }
  return false;
}
//function to add
function addCoupan() {
  var cpn = readlineSync.question('Enter coupan to be added : ');
  if(check(cpn)){
    console.log("This coupan is already present.")
    console.log("You can check its value using choice 3.")
    getInput();
  }
  else{
    var val = readlineSync.question('Enter value of coupan : ', cpn);
    coupans.push({ cpn : val });
  }
  getInput();
}4

function deleteCoupan(){
  var cpn = readlineSync.question('Enter coupan to be deleted : ');
  if(check(cpn)){  
    coupans = coupans.filter(item => Object.keys(item)[0]!=cpn);
  }
  else{
    console.log("This coupan is not present in database.");
  }
  getInput();
}

function checkCoupan(){
  var cpn = readlineSync.question('Enter coupan to be checked : ');
  if(check(cpn)){
    console.log("This coupan is present.");
    for(let i=0; i< coupans.length; i++){
      if(Object.keys(coupans[i])[0]==cpn){
        console.log("The value of the coupan (",cpn,") is : ",coupans[i][cpn] );
      }
    }
  }
  else{
    var val = readlineSync.question('Enter value of coupan (', cpn , ') : ');
    coupans.push({ cpn : val });
  }   
  getInput();  
}

function viewCoupan(){
  var cpname;
  console.log("Coupans present in database are : ");
  for(let i=0; i< coupans.length; i++){
    cpname = Object.keys(coupans[i])[0];
    console.log( cpname ," : ",coupans[i][cpname] );
  }
  getInput();
}

//welcome and start
var userName = readlineSync.question('Enter your name : ');
console.log('Welcome! ' + userName + '.');
var choice;

function getInput(){
  console.log('\n Choose what do you want : ');
  console.log('1. Add Coupan');
  console.log('2. Delete Coupan');
  console.log('3. Check Coupan Value');
  console.log('4. View All Coupans');
  console.log('5. Exit');
  choice = readlineSync.question('Enter your choice : ');
  if(choice == 1){
    addCoupan();
  }
  else if(choice == 2){
    deleteCoupan();
  }
  else if(choice == 3){
    checkCoupan();
  }
  else if(choice == 4){
    viewCoupan();
  }
  else if(choice == 5){
    console.log('Thank You for trying this out');
  }  
  else{
    console.log("You have entered wrong choice.");
    console.log("Enter your choice again.");
    getInput();
  }
}

getInput();

//coupans.push({ name: userName, score: userScore });

//rewrite scores.json
fs.writeFile('coupans.json', JSON.stringify(coupans), err => {
});

