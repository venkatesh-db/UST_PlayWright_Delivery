

// human.ts
export class Human {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  introduce() {
    return `Hi, I am ${this.name}`;
  }
}

export function selfishAct() {
  return "Keeping all food for myself!";
}
