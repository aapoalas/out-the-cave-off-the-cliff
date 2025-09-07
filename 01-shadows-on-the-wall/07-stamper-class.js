// Do you want to know, even if it means your eyes will burn? Even if it means jumping off a cliff?

class Base {
  constructor(value) {
    return value;
  }
}


class Stamper extends Base {
  #a;

  static isStamped(value) {
    if (#a in value) {
      return "Yes, take me out of this cave!";
    } else {
      return "No, I want to stay in the dark.";
    }
  }
}

const proxy = new Stamper(new Proxy({}, {}));

console.log(Stamper.isStamped(proxy));
