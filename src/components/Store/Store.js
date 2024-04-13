import bananaImage from '../../assets/banana.jpeg';
import appleImage from '../../assets/apple.jpeg';
import orangeImage from '../../assets/orange.jpeg';
import ProductList from './ProductList'; // Import ProductList component


const Store = () => {
  const products = [
    { id: 1, name: 'Banana', image: bananaImage, price: 1.99 },
    { id: 2, name: 'Apple', image: appleImage, price: 2.49 },
    { id: 3, name: 'Orange', image: orangeImage, price: 1.79 }
  ];

  return (
    <div>
      <h1>Our Store</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Store;