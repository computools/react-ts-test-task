import React, {useState} from 'react';
import './styles/App.scss';
import {generateNewNumbers, Product} from "./model";
import {ProductTable} from "./components/ProductTable";
import {Timer} from "./components/Timer";

const initialProducts: Product[] = [
  {
    count: 3,
    name: 'Orange',
    price: 15
  },
  {
    count: 1,
    name: 'Apple',
    price: 4
  },
  {
    count: 6,
    name: 'Carrot',
    price: 9
  }
];

const MIN_PRICE_VALUE = 1;
const MAX_PRICE_VALUE = 20;
const MIN_COUNT_VALUE = 1;
const MAX_COUNT_VALUE = 8;

const App = () => {
  //I could've used Redux/Mobx but for this project it is hardly necessary.
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const randomizeValues = () => {
    setProducts(products.map(product => {
      product.price = generateNewNumbers(MIN_PRICE_VALUE, MAX_PRICE_VALUE);
      product.count = generateNewNumbers(MIN_COUNT_VALUE, MAX_COUNT_VALUE);
      return product;
    }));
  };

  return (
    <div className="App">
      <ProductTable products={products}/>
      <div className="container">
        <button onClick={randomizeValues} className="randomize-btn">Randomize prices and counts</button>
        <Timer />
      </div>
    </div>
  );
}

export default App;
