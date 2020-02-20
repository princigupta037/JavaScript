
console.log('Hello World :):)');


# primitive datatypes

var firstName='princi'
console.log(firstName);

var lastName='gupta';
console.log(lastName);

var age=24;
console.log(age);

var fullAge = true;
console.log(fullAge);

var  job;
job ='teacher'
console.log(job);


var _2='two';
console.log(_2);

var $3 = 'three';
console.log($3);

# not use reserved keywords as js variables

var function = 'p';
console.log(function);

var firstName='princi'
console.log(firstName);

var lastName='gupta';
console.log(lastName);

var age=24;
console.log(age);

var fullAge = true;
console.log(fullAge);

var  job;
job ='teacher'
console.log(job);


var _2='two';
console.log(_2);

var $3 = 'three';
console.log($3);

# Basic Opeartors

var year, yearPrinci, yearGupta ;
year = 2010;
yearPrinci = year-2;
yearGupta = year*5;
console.log(yearPrinci);
console.log(yearGupta);
console.log(year / 10);
console.log(year + 10);

# Logical Operators

 agePrinci = 24;
 agePriya=25;
var princiOlder = agePrinci > agePriya;
console.log(princiOlder);

# Type of Operator

console.log(typeof agePrinci);

# Opeartor Precedence

var nw = 2020;
var yearPrinci = 1996;
var fullAge = 24;

var isFullAge = nw - yearPrinci >= fullAge ;
console.log(isFullAge);

#multiple group operators

var age = (yearPrinci-fullAge) / 8;
console.log(age);


# Mulitple assignments

var x , y;
x =y= (3*3) * 4-6;
console.log(x,y);

// # More Operators
x +=3;
console.log(x);

x++
console.log(x);
x--
console.log(x);


Assignment1(Calculating BMI)


var massPrinci=25;
var massPriya=28;
var heightPrinci=2;
var heightPriya=1;
var BMIPrinci = massPrinci  / (heightPrinci * heightPrinci) ;
var BMIPriya = massPriya / (heightPriya * heightPriya) ;
var result =  BMIPrinci > BMIPriya;
console.log('is princi\s BMI is higher then Priya\s' +  result);


if else statement

var fN = 'p'
var lN='g'
if (lN === 'gg'){
    console.log(fN + 'is g');
}else{
    console.log(fN + 'will hv gg');
}

var fN =true;
var lN='g'
if (fN){
    console.log(fN + 'is g');
}else{
    console.log(fN + 'will hv gg');
}


Boolean logic

var firstname = 'princi';
var age = 20;

if(age< 13){
    console.log(firstname + ' is a girl.');
} else if( age >= 13 && age < 20 ){
    console.log(firstname + ' is a teenager ');
}else if(age >= 20 && age < 30)
{
    console.log(firstname + ' is a women.');
}

else{
    console.log(firstname + ' is a girl.');
}



# Ternary operator

var firstName ='princi'
var age =16;

age>=18 ? console.log(firstname + 'drinks beer .')
: console.log(firstname + ' drinks juice');


var drink = age>=18 ? 'beer' :'juice';
console.log(drink);


Switch statement

var job='teacher';
switch(job){
    case 'teacher':
        console.log(firstname + ' teches kids how to code ');
        break;
    case 'driver':
        console.log(firstname + ' driver an uber ');
        break;
    case 'designer':
        console.log(firstname + ' designs beautiful websites');
        break;
    default:
        console.log(firstname +' does nothing');
}

// # replacing if else statement with switch statement
switch(true){
    case age>13:
        console.log(firstname+'A');
        break;
    case age>=13&& age<=18:
        console.log(firstname+'B');
        break;
    default:
        console.log(firstname+'C');
}


# Falsy values 

# Truthy values

var height;

height='';
if(height){
    console.log('variable is defined');
}else{
    console.log('not defined');
}

var height=0;
if(height){
    console.log('variable is defined');
}else{
    console.log('not defined');
}


#Equality opeartor

var height=23;
if(height===23){
    console.log('type coercion');
}

