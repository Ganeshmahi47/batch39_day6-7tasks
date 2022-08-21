class person{
    constructor(firstname,lastname,age,studied,working,mobile){
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
        this.studied=studied
        this.working=working
        this.mobile=mobile
    }


getDetails()
{
    return (`Hellow mam his name is ${this.firstname} ${this.lastname} and his age is ${this.age}and has degree ${this.studied} and he is a working profession and working in ${this.working} and finaly his contact number is ${this.mobile}`)
}
}
let person1 = new person ("Ganesh","S",22,"B.E","T.C.S",9943674047)
let person2 = new person ("Rajesh","Sai",23,"B.E","Infosys",9943694047)
let person3 = new person ("Harish","Sabari",25,"B.E","Meta",9943684047)
let person4 = new person ("Suresh","Sundar",26,"B.E","Amazon",9943678047)
let person5 = new person ("Sunil","Sivan",24,"B.E","ZOHO",9943674097)

console.log(person1.getDetails());
console.log(person2.getDetails());
console.log(person3.getDetails());
console.log(person4.getDetails());
console.log(person5.getDetails());
