type Properties = { [key: string]: any };

class MockGenerator {
  getMultiples(amount: number, properties: Properties) {
    if (amount < 1) throw new Error('The "amount" value need to be bigger than 0')
    const array = [];

    for (let i = 0; i < amount; i++) {
      const objetoClone = { ...properties };
      array.push(objetoClone);
    }

    return array;
  }
}

const mockGenerator = new MockGenerator()

export default mockGenerator
