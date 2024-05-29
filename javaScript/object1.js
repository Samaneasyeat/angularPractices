// I have a object person and I want to access all the keys in this object how to 
person = {
    name:"Saman",
    age:12,
    department:"Technical",
    Subjects:["Angular","JavaScript","Infra"]
}
console.log(Object.keys(person));//for accessing the all keys in this object 
console.log(Object.values(person)); //for accessing all the values in this object
console.log(Object.entries(person)); //for accesing all the keys values in the aobject it will return arrays of keys values pair [['name','Saman'],['age',12],['department','technical'],['subjects',['Angular','JavaScript','Infra']]]
