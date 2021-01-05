'usestrict'
 var grade=0 ; 
var userName =prompt('please enter your name !');
console.log('please enter your name !');
while(userName==""||userName==null){
    userName =prompt('please enter your name !');

}


alert('Welcome, Mr.'+userName.toUpperCase() +', to my site Before viewing the page, there are some questions that we would like to answer');
alert('Welcome, Mr.'+userName.toUpperCase() +', to my site Before viewing the page, there are some questions that we would like to answer');
var Jordan = prompt('Is Jordan located in Asia??');
console.log('Is Jordan located in Asia??');
if(Jordan.toLowerCase()=='yes'||Jordan.toLowerCase()=='y'){
    alert('Correct answer');
    console.log('Correct answer');
    grade++;
}
else{
    alert('wrong answer');
    console.log('Wrong answer');

}

var Belgium = prompt('Did Belgium win the 2018 World Cup???');
console.log('Did Belgium win the 2018 World Cup???');
if(Belgium.toLowerCase()=='yes'||Belgium.toLowerCase()=='y'){
    alert('wrong answer');
    console.log('Wrong answer');

}
else{
    console.log('Correct answer');
    alert(' Correct answer');
    grade++;
}

var German = prompt('Is Porsche German made???');
console.log('Is Porsche German made???')
if(German.toLowerCase()=='yes'||German.toLowerCase()=='y'){
    alert('Correct answer');
    console.log('Correct answer');
    grade++;
}
else{
    alert(' Wrong answer');
    console.log('Wrong answer');

}

var Irbid = prompt('Is Irbid in northern Jordan???');
console.log('Is Irbid in northern Jordan???');
if(Irbid.toLowerCase()=='yes'||Irbid.toLowerCase()=='y'){
    alert('Correct answer');
    console.log('Correct answer');
    grade++;
}
else{
    alert('wrong answer');
    console.log('Wrong answer');

}

var Maputo = prompt('Is Maputo the capital of Mozambique?');
console.log('Is Maputo the capital of Mozambique?');
if(Maputo.toLowerCase()=='yes'||Maputo.toLowerCase()=='y'){
    alert('Correct answer');
    console.log('Correct answer');
    grade++;
}
else{
    alert('wrong answer');
    console.log('Wrong answer');

}
alert('Thank you, Mr. '+userName +', for answering the questions and for visiting my website Now, review the site');
console.log('Thank you, Mr. '+userName +', for answering the questions and for visiting my website Now, review the site');




