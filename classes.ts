class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number,) {
        this.age = age;
        this.name = name;
    };

    logDetails(): void {
        console.log(`The Player ${this.name} have ${this.age} year`);
    }
};

class CharAccount extends UserAccount {
    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number,) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;

    }
}

const john = new CharAccount('john', 12, 'manto', 300);
console.log(john);




const will = new UserAccount('oi', 12);
console.log(will);
console.log(will.age);
will.logDetails()

