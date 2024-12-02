interface IPizza {
  name: string
  price: number
}

class Pizza implements IPizza {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }
}

abstract class PizzaDecorator implements IPizza {
  protected pizza: IPizza

  constructor(pizza: IPizza) {
    this.pizza = pizza
  }

  get name(): string {
    return this.pizza.name
  }

  get price(): number {
    return this.pizza.price
  }
}

class PizzaWithMushrooms extends PizzaDecorator {
  get name(): string {
    return `${this.pizza.name} + mushrooms`
  }

  get price(): number {
    return this.pizza.price + 1.5
  }
}

class PizzaWithWholeWheat extends PizzaDecorator {
  get name(): string {
    return `${this.pizza.name} + whole wheat`
  }

  get price(): number {
    return this.pizza.price + 2
  }
}

const pizza = new Pizza('Margherita', 5)
console.log('Base pizza: ' + pizza.name + ' - €' + pizza.price)

const pizza2 = new PizzaWithMushrooms(pizza)
console.log('Pizza with additions: ' + pizza2.name + ' - €' + pizza2.price)

const pizza3 = new PizzaWithWholeWheat(pizza2)
console.log('Pizza with additions: ' + pizza3.name + ' - €' + pizza3.price)
