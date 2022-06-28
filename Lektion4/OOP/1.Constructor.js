const product = {
    name : "banan",
    price : 12,
    decription : 'Fruit',
    eat: function() {
      console.log(`You eat the ${this.name}!`);
    },
    eat2() {
      console.log(`You eat the ${this.name}!`);
    }
  }

  product.eat2();

    //Factory function
    function createProduct(name, price, desc){
        return{
            name,
            price,
            desc,
            eat(){
              console.log(`You eat the ${this.name}!`);
            }
        }
    }
  
    const prod2  = createProduct('Banan', 12, 'gul');
    prod2.eat();
    prod2.eat = 2;
    prod2.eat = {};
    prod2.eat2 = () => {};


    //-------------------

    //Constructor function
  function Product(name, price, desc){
    this.prodName = name;
    this.price = price;
    this.desc = desc;
  }

  const prod3 = new Product('Banan', 12, 'gul')
  prod3.eat2 = 4;
  console.log(prod3.eat2);

  function ProductPrivate(name, price, desc){
    //Private
    let discount = 1;

    Object.defineProperty(this, 'discount', {
        get: function(){
            return discount;
        },
        set: (value) => discount = value < 0 ? 0 : value
    })


    //Public
    this.prodName = name;
    this.price = price;
    this.desc = desc;

    this.buy = function(){
        let scope = 20 //lokalt scope
    }
  }

  const prodP = new ProductPrivate('Mjölk', 10, 'Dryck');
  console.log(prodP.discount);
  prodP.discount = 10;
  console.log(prodP.discount);

  console.log(prodP);



