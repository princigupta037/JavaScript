

// 65
// console.log('Hello World :):)');


// # primitive datatypes

// var firstName='princi'
// console.log(firstName);

// var lastName='gupta';
// console.log(lastName);

// var age=24;
// console.log(age);

// var fullAge = true;
// console.log(fullAge);

// var  job;
// job ='teacher'
// console.log(job);


// var _2='two';
// console.log(_2);

// var $3 = 'three';
// console.log($3);

// # not use reserved keywords as js variables

// var function = 'p';
// console.log(function);

// var firstName='princi'
// console.log(firstName);

// var lastName='gupta';
// console.log(lastName);

// var age=24;
// console.log(age);

// var fullAge = true;
// console.log(fullAge);

// var  job;
// job ='teacher'
// console.log(job);


// var _2='two';
// console.log(_2);

// var $3 = 'three';
// console.log($3);

// # Basic Opeartors

// var year, yearPrinci, yearGupta ;
// year = 2010;
// yearPrinci = year-2;
// yearGupta = year*5;
// console.log(yearPrinci);
// console.log(yearGupta);
// console.log(year / 10);
// console.log(year + 10);

// # Logical Operators

//  agePrinci = 24;
//  agePriya=25;
// var princiOlder = agePrinci > agePriya;
// console.log(princiOlder);

// # Type of Operator

// console.log(typeof agePrinci);

// # Opeartor Precedence

// var nw = 2020;
// var yearPrinci = 1996;
// var fullAge = 24;

// var isFullAge = nw - yearPrinci >= fullAge ;
// console.log(isFullAge);

// #multiple group operators

// var age = (yearPrinci-fullAge) / 8;
// console.log(age);


// # Mulitple assignments

// var x , y;
// x =y= (3*3) * 4-6;
// console.log(x,y);

// // # More Operators
// x +=3;
// console.log(x);

// x++
// console.log(x);
// x--
// console.log(x);


// Assignment1(Calculating BMI)


// var massPrinci=25;
// var massPriya=28;
// var heightPrinci=2;
// var heightPriya=1;
// var BMIPrinci = massPrinci  / (heightPrinci * heightPrinci) ;
// var BMIPriya = massPriya / (heightPriya * heightPriya) ;
// var result =  BMIPrinci > BMIPriya;
// console.log('is princi\s BMI is higher then Priya\s' +  result);


// if else statement

// var fN = 'p'
// var lN='g'
// if (lN === 'gg'){
//     console.log(fN + 'is g');
// }else{
//     console.log(fN + 'will hv gg');
// }

// var fN =true;
// var lN='g'
// if (fN){
//     console.log(fN + 'is g');
// }else{
//     console.log(fN + 'will hv gg');
// }


// Boolean logic

// var firstname = 'princi';
// var age = 20;

// if(age< 13){
//     console.log(firstname + ' is a girl.');
// } else if( age >= 13 && age < 20 ){
//     console.log(firstname + ' is a teenager ');
// }else if(age >= 20 && age < 30)
// {
//     console.log(firstname + ' is a women.');
// }

// else{
//     console.log(firstname + ' is a girl.');
// }



// # Ternary operator





// var firstName ='princi'
// var age =16;

// age>=18 ? console.log(firstname + 'drinks beer .')
// : console.log(firstname + ' drinks juice');


// var drink = age>=18 ? 'beer' :'juice';
// console.log(drink);

// #Switch statement

// var job='teacher';
// switch(job){
//     case 'teacher':
//         console.log(firstname + ' teches kids how to code ');
//         break;
//     case 'driver':
//         console.log(firstname + ' driver an uber ');
//         break;
//     case 'designer':
//         console.log(firstname + ' designs beautiful websites');
//         break;
//     default:
//         console.log(firstname +' does nothing');
// }

// // # replacing if else statement with switch statement
// switch(true){
//     case age>13:
//         console.log(firstname+'A');
//         break;
//     case age>=13&& age<=18:
//         console.log(firstname+'B');
//         break;
//     default:
//         console.log(firstname+'C');
// }


// # Falsy values 

// # Truthy values

// var height;

// height='';
// if(height){
//     console.log('variable is defined');
// }else{
//     console.log('not defined');
// }

// var height=0;
// if(height){
//     console.log('variable is defined');
// }else{
//     console.log('not defined');
// }


// #Equality opeartor

// var height=23;
// if(height===23){
//     console.log('type coercion');
// }

// var p= {
//     name:'princi',
//     age:25,
//     family:['mom','father','brothers','sister'],
//     year:1996,
//     yearAge:function(year) {
//         return 1998 - year;
//     }
// }
// console.log(p);
// console.log(p.yearAge(1990));

 

// var p = {
//     name:'princi',
//     age:25,
//     family:['mom','father','brothers','sister'],
//     year:1999,
//     yearAge: function(){
//         this.age= 2020 - this.year;
//     }
// }
// p.yearAge();
// console.log(p);

// Loop & iterations

// for(var i=0;i<10;i++){
//     console.log(i);
// }


// var family =['mom','father','brothers','sister']
// for (var i = 0; i < family.length; i++){
//     console.log(family[i]);
// }

// while
// var i = 0;
// while(i<family.length){
//     console.log(family[i]);
//     i++;
// }

// CONTINUE
// var family= ['mom',1990,'father','brothers','sister',1990]
// for (var i = 0; i < family.length; i++){

// if(typeof family[i] !== 'string') continue;
//  console.log(family[i]);
//   }

// // // BREAK
// // for (var i = 0; i < family.length; i++){
// //     if(typeof family[i] !== 'string') break;
// //     console.log(family[i]);
// // }


// //Loooping backwards

// for (var i = family.length-1; i >=0; i--){
    
//     console.log(family[i]);
// }


// Hosting (Variable and function)


// console.log(age);
// var age=23;
// console.log(age);


// function foo(){
//     var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);



// Scoping & Lexical scoping & Hosting

// var a = 'hello';
// first();

// function first(){
//     var b = 'hi';
//     second();

//     function second(){
//         var c ='hey';
//         console.log( a + b + c );
//     }

// }


// Example to show the differece btw execution stack and scope chain

// var a = 'hello';
// first();

// function first(){
//     var b = 'hi';
//     second();

//     function second(){
//         var c ='hey';
//         third();
//     }

// }

// function third(){
//     var d = 'princi';
//     // console.log(c);
//     console.log(a+d);
// }


// this keyword

// console.log(this);

// calculateAge(1996);

// function calculateAge(year){
//     console.log(2020-year);
//     console.log(this);
// }

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