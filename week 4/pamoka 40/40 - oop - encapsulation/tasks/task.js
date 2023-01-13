{   //Old syntax
  class House {
    #address;
    #city;
    #owner;

    constructor(address, city, owner = []) {
      this.#address = address;
      this.#city = city;
      this.#owner = owner;
    }
  }

  const houses = [
    new House('Kimano g. 7', 'Kaunas', [{ name: 'Blakas Kojinskas' }]),
    new House('Aliejų g. 121', 'Kaunas', [{ name: 'Sensas Jautimantas' }, { name: 'Rekė Jautimantė' }]),
    new House('Sustenų g. 7', 'Vilnius', [{ name: 'Groja Blanienė' }, { name: 'Fartas Blanys' }]),
    new House('Varkatkų g. 7', 'Klaipėda', [{ name: 'Faryja Mirgaitė' }]),
  ];

  console.groupCollapsed('1. HouseInstance.owners savybės inkapsuliacija');
  {
    console.log(houses[0])
  }
  console.groupEnd();

  console.groupCollapsed('2. Perrašykite HouseInstance.address savybės inkapsuliaciją naudojant naują sintaksę');
  {

  }
  console.groupEnd();

  console.groupCollapsed('3. Perrašykite HouseInstance.city savybės inkapsuliaciją naudojant naują sintaksę');
  {

  }
  console.groupEnd();
}

{
  //New syntax 


  const isObjectLiteral = (val) => Object.getPrototypeOf(val) === Object.prototype
  class House {
    address;
    city;
    #owners;

    constructor(address, city, owners) {
      this.address = address;
      this.city = city;
      this.#owners = owners;
    }
    setOwners(newOwners) {
      //checks- "newOwners" must be an array, with at least 1 value that has to be a string
      if (!Array.isArray(newOwners)) {
        console.error("Error: in House.setOwners - newOwners must be an Array");
        return;
      }
      if (newOwners.length === 0) {
        console.error("Error: in House.setOwners - newOwners must not be empty");
        return;
      }
      if (!newOwners.every(isObjectLiteral)) {
        console.error("Error: in House.setOwners. Every owner must be an object literal");
        return;
      }
      if (!newOwners.every((owner) => typeof owner.name === "string" && owner.name.length > 1)) {
        console.error("Error: in House.setOwners. Every owner must have a name longer than 1 character");
        return;
      }


      //If no mistakes are made, "newOwners" is correct and can be assigned
      console.log(`%cnewOwners are accepted: Welcome: \n\t ${newOwners.map(x => x.name).join("\n\t")}`, "color: green")
      this.#owners = newOwners
    }

    getOwners() {
      return this.#owners;
    }
  }


  const house = new House('Kimano g. 7', 'Kaunas', [{ name: 'Blakas Kojinskas' }]);
  const houses = [
    new House('Kimano g. 7', 'Kaunas', [{ name: 'Blakas Kojinskas' }]),
    new House('Aliejų g. 121', 'Kaunas', [{ name: 'Sensas Jautimantas' }, { name: 'Rekė Jautimantė' }]),
    new House('Sustenų g. 7', 'Vilnius', [{ name: 'Groja Blanienė' }, { name: 'Fartas Blanys' }]),
    new House('Varkatkų g. 7', 'Klaipėda', [{ name: 'Faryja Mirgaitė' }]),
  ];

  console.group('1. HouseInstance.owners savybės inkapsuliacija');
  {
    console.log(house.getOwners())
    house.setOwners([7])
    house.setOwners([])
    house.setOwners([7, 9])
    house.setOwners([{}, {}, {}])
    house.setOwners([{ name: 8 }, { name: 8 }, { name: 8 }])
    house.setOwners([{ name: "Ghost" }, { name: "John Price" }, { name: "Soap McTavish" }])
    console.log(house.getOwners())
  }
  console.groupEnd();

  console.group('2. Perrašykite HouseInstance.address savybės inkapsuliaciją naudojant naują sintaksę');
  {

  }
  console.groupEnd();

  console.group('3. Perrašykite HouseInstance.city savybės inkapsuliaciją naudojant naują sintaksę');
  {

  }
  console.groupEnd();

}