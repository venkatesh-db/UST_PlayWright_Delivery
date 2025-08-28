
class Human {
    public name: string;           // everyone can see the name
    private money: number;         // only the human knows their money
    protected kindness: number;    // only humans and subclasses know kindness

    constructor(name: string, money: number, kindness: number) {
        this.name = name;
        this.money = money;
        this.kindness = kindness;
    }

    // Public method: anyone can ask how much money they have in general
    public showInfo() {
        console.log(`${this.name} has some amount of money 💰`);
    }

    // Private method: only human can see exact money
    private revealMoney() {
        console.log(`${this.name} has ₹${this.money}`);
    }

    // Protected method: accessible by subclass
    protected showKindness() {
        console.log(`${this.name} has kindness level: ${this.kindness}`);
    }

    // Method to simulate sharing
    public shareMoney(amount: number) {
        if (amount <= this.money && this.kindness > 5) {
            this.money -= amount;
            console.log(`${this.name} shared ₹${amount} ❤️`);
        } else {
            console.log(`${this.name} refused to share 😎`);
        }
    }
}

// Subclass: Altruistic Human
class GenerousHuman extends Human {
    giveDonation() {
        console.log(`${this.name} is donating 💖`);
        this.shareMoney(50);       // can use public method
        this.showKindness();       // can use protected method
        // this.revealMoney();     ❌ cannot access private method
    }
}

// --- Example usage ---
const selfish = new Human("Selfish Sam", 100, 3);
const generous = new GenerousHuman("Generous Gina", 200, 8);

selfish.showInfo();        // public accessible
selfish.shareMoney(20);    // tries to share
// selfish.showKindness();  ❌ protected, not allowed
// selfish.revealMoney();   ❌ private, not allowed

generous.showInfo();       // public
generous.giveDonation();   // uses public + protected internally
