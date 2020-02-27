
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

#Switch statement

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

var p= {
    name:'princi',
    age:25,
    family:['mom','father','brothers','sister'],
    year:1996,
    yearAge:function(year) {
        return 1998 - year;
    }
}
console.log(p);
console.log(p.yearAge(1990));

 

var p = {
    name:'princi',
    age:25,
    family:['mom','father','brothers','sister'],
    year:1999,
    yearAge: function(){
        this.age= 2020 - this.year;
    }
}
p.yearAge();
console.log(p);

Loop & iterations

for(var i=0;i<10;i++){
    console.log(i);
}


var family =['mom','father','brothers','sister']
for (var i = 0; i < family.length; i++){
    console.log(family[i]);
}

while
var i = 0;
while(i<family.length){
    console.log(family[i]);
    i++;
}

CONTINUE
var family= ['mom',1990,'father','brothers','sister',1990]
for (var i = 0; i < family.length; i++){

if(typeof family[i] !== 'string') continue;
 console.log(family[i]);
  }

// // BREAK
// for (var i = 0; i < family.length; i++){
//     if(typeof family[i] !== 'string') break;
//     console.log(family[i]);
// }


//Loooping backwards

for (var i = family.length-1; i >=0; i--){
    
    console.log(family[i]);
}


Hosting (Variable and function)


console.log(age);
var age=23;
console.log(age);


function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);



Scoping & Lexical scoping & Hosting

var a = 'hello';
first();

function first(){
    var b = 'hi';
    second();

    function second(){
        var c ='hey';
        console.log( a + b + c );
    }

}


Example to show the differece btw execution stack and scope chain

var a = 'hello';
first();

function first(){
    var b = 'hi';
    second();

    function second(){
        var c ='hey';
        third();
    }

}

function third(){
    var d = 'princi';
    // console.log(c);
    console.log(a+d);
}


this keyword

console.log(this);

calculateAge(1996);

function calculateAge(year){
    console.log(2020-year);
    console.log(this);
}

var p ={
    name:'princi',
    birth:1995,
    calculateAge:function(){
        console.log(this);
        console.log(this.birth);
        


        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}
p.calculateAge();



var G = {
    name:'Gupta',
    year: 1996
};

// methodg barowing
G.calculateAge = p.calculateAge;
G.calculateAge();

 # Constructor function

var Person = function(name , yearOfBirth ,job){
    this.name= name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
} 


Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}


Person.prototype.lastName = 'Gupta';

var princi = new Person('princi',1995,'Developer');
var pink = new Person('pink',1996,'teacher');


princi.calculateAge();
pink.calculateAge();


#  Inhertance

console.log(princi.lastName);




# Object.create

var personProto = {
    calculateAge:function(){
        console.log(2020-this.yearOfBirth);
    }
};
var princi = Object.create(personProto);
princi.name = 'princi';
princi.yearOfBirth=1995;
princi.job='Developer';

var pink = Object.create(personProto,
{
    name: { value:'pink'} ,
    yearOfBirth:{ value:1996} ,
    job : { value : 'teacher' }
});


# Primitive vs Object

# Primitive

var a=23;
var b=a;

a=30;
console.log(a);
console.log(b);

# Objects

var obj1 ={
    name:'princi',
    age:24
};

var obj2 = obj1;
obj2.age=30;
console.log(obj1.age);
console.log(obj2.age);

# Functions

var age = 27;
var obj = {
    name:'princi',
    city:'banglore'
}

function change(a,b){
    a= 30;
    b.city = 'goa'
}

change(age,obj);

console.log(age);
console.log(obj.city);

# Passing Function  as argument

var years = [1995,1996,1997,1998];

function arrayCalc(arr , fn){
    var arrRes =[];
    for (var i = 0 ; i < arr.length ; i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return  2020-el;
}

var ages = arrayCalc(years,calculateAge);
console.log(ages);

# Functions returning function

function interviewQ(job){
    if (job === 'deisgner'){
        return function(name){
            console.log(name + 'wht u design ?');
        }
    } else if (job === 'teacher'){
        return function(name){
            console.log('which subject ?');
        }
    } else {
        return function(name){
            console.log('Hello');
        }
    }
}
var teacherQ =
interviewQ('teacher');
var designerQ=
interviewQ('designer')
teacherQ('princi');
designerQ('princi')


IIFE(Immediately invoked function expressions)

(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
// console.log(score);
(function (goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5- goodLuck);
})(5);

Closures

Example 1

function retirement(retirementAge){
    var a = ' year left until retirement ';
    return function(yearOfBirth) {
        var age = 2020 -yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}
var retirementUS = retirement(66);
retirementUS(1990);
retirement(66)(1990);

// example 2

function interviewQ(job){
    return function(name)
    {
        if (job === 'deisgner'){
    
            console.log(name + 'wht u design ?');
        
    } else if(job === 'teacher')
    {
        
            console.log('which subject ?');
        
    } else {
        
            console.log('Hello');
        }
    }
}

interviewQ('teacher')('princi');


// Bind , call And apply

var princi = {
    name :'princi',
    age:24,
    job:'Developer',
    presentation : function(style,timeOfDay){
        if(style==='formal'){
            console.log('Good ' + timeOfDay + ', Ladies and Gentalmen I\ m ' +
            this.name + ',I\'m a ' + 
            this.job + ' and I\'m '  + 
            this.age + ' years old .');
        }else if (style === 'friendly'){
            console.log('Hey What\'s up ? I\'m ' + 
            this.name + ',I\'m a  ' + 
            this.job + ' and  I\'m ' + 
            this.age + ' years old . Have a nice ' + timeOfDay);
        }
    }
}
var Zoya = {
    name:'Zoya',
    age:25,
    job:'Designer'
}
princi.presentation('formal','morning');
princi.presentation.call(Zoya,'friendly','afternoon');

princi.presentation.apply(Zoya, ['frindly','afternoon']);

var princiFriendly =
princi.presentation.bind(princi,'friendly');

princiFriendly('morning');
princiFriendly('night');

var ZoyaFormal =
princi.presentation.bind(Zoya,
    'formal');
    ZoyaFormal('afternoon');