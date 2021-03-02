// 1. Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on
// the price and quantity.
// It should have a toString method.


class Author {
    constructor(name, surname, email, gender) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.gender = gender;
    }
    get fullName() {
        return `${this.name} ${this.surname}`
    }
    set fullName(str) {
        return this._fulname = str;
    }
    authorToString() {
        return `This authors name is ${this.name} ${this.surname}, he is a ${this.gender} and his email is ${this.email} `
    }
}


class Book extends Author {
    constructor(author, title, quantity, price) {
        super()
        this.author = author;
        this.title = title;
        this.quantity = quantity;
        this.price = price;
    }

    getProfit() {
        return this.quantity * this.price
    }

    get bookFullName() {
        return `${this.title} was written by ${this.author}`
    }
    set bookFullName(value) {
        this.title = value
    }
    bookToString() {
        return `${this.author} wrote the ${this.title} in ${this.quantity} and it costs ${this.price} `

    }
}
// 2.Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and
// return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the
// balance, if amount is less than the balance, otherwise output “Amount exceeded
// balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the
// amount from the account balance and add it to the given anotherAccount and return the
// updated balance, if amount is less than the balance, otherwise output “Amount
// exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which
// gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.


class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance
    }
    get accName() {
        return this.name
    }
    set accName(value) {
        if (typeof value !== "string") {
            console.log("Bad name")
        } else {
            return this.name = value;
        }
    }
    get constId() {
        return this.id;
    }

    get balanceAmount() {
        return this.balance;
    }
    set balanceAmount(value) {
        if (typeof value !== "number") {
            console.log("Write a correct number")
        } else {
            return this.balance = value
        }
    }

    credit(amount) {
        this.balance += amount;
        return this.balance
    }
    debit(amount) {
        if (amount < this.balance) {
            this.balance -= amount;
            return this.balance
        } else {
            return "Amount exceeded balance."
        }
    }
    transferToAnotherAccount(anotherAcc, amount) {
        let anotherAccBalance = 0;
        if (amount < this.balance) {
            return this.balance = this.balance - amount;
            anotherAccBalance += amount
        } else {
            return "Amount exceeded balance."
        }
    }
    accountToString() {
        return `${this.id} belongs to ${this.name} who's balance equal to ${this.balance}`
    }
    static identifyAccount(accountFirst, accountSecond) {
        if (accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name && accountFirst.balance === accountSecond.balance) {
            return `Accounts are the same`
        } else {
            return `Accounts are different`
        }
    }
}


// 3.Write classes: Person, Student, Staff.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().
// Student is inherited from Person. It should have program(array of strings), year, fee.
// It should have appropriate getters and setters.
// It should have method: passExam(program, grade). Student should contain the data
// about its programs and exams. passExam will update that data, so if student passed all
// the exams(grade is great or equal to 50), its year should be increased by one.
// It should have a toString method.
// Teacher is inherited from Person. It should have program(string), pay.
// It should have appropriate getters and setters.
// It should have a toString method.


class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`

    }
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ")

    }
    personToString() {
        return `My name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old`
    }

}
class Student extends Person {
    constructor(program, year, fee) {
        super()
        this.program = program;
        this.year = year;
        this.fee = fee
    }
    get studentYear() {
        return this.year
    }
    set studentYear(currentYear) {
        return this.year = currentYear
    }
    passExam(grade) {
        let currentPoint = 0
        for (let i = 0; i < this.program.length; i++) {
            let passed;
            if (grade < 50) { passed = `${this.program[i]} doesn't passed` }
            if (grade >= 50) { passed = `${this.program[i]} passed` }
            currentPoint += grade
            console.log(passed)
        }
        if (currentPoint > 100) {
            console.log(++this.year)
        }
    }
    studentToString() {
        return `I'm a student. I'm learning ${this.program} ${this.year} year.`
    }
}

class Teacher extends Person {
    constructor(program, pay) {
        super();
        this.program = program;
        this.pay = pay
    }
    get salary() {
        return this.pay * 21
    }
    set salary(value) {
        if (value < 1) {
            return this.pay
        }
    }
    teacherToString() {
        return `I'm a teacher, I teach my students ${this.program}`
    }

}
