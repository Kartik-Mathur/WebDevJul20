// function Fun(name,age){
//     this.name = name 
//     this.age = age
//     // this.getName = function(){
//     //     return this.name
//     // }
// }
// Fun.x = "There!"


// Fun.prototype.getName = function(){
//     return this.name
// }
// Fun.hello = Fun.prototype.hello = function(){
//     console.log('Hello')
// }

// let p = new Fun("Kartik",20)
// let q = new Fun("Jatin",10)

// Doing above thing using classes
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
        // this._money = money
        // this.isRich = function(){
        //     return money>10
        // }
        // this.getName = function(){
        //     return this.name
        // }
    }
    getName(){
        return this.name
    }
    // Getters and Setters
    get firstName(){ // This is a getter
        return this.name.split(' ')[0]
    }
    set firstName(value){// This is a setter
        let x = this.name.split(' ')
        x[0] = value
        this.name = x.join(' ')
    }
    static getLastName(){
        return "This is static"
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age)
        this.marks = marks
        this.isPass = function(){
            return marks>33
        }
    }

}

let p1 = new Person("Kartik Mathur",12,20)
let p2 = new Person("Jatin Sharma",14,5)
let s1 = new Student("Atrij Sharma",15,70)
let s2 = new Student("Rishita Dadhich",20,20)