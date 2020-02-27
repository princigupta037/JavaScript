
// Constructor function

var Person = function(name , yearOfBirth ,job){
    this.name= name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
} 


Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}


var princi = new Person('princi',1995,'Developer');