import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App(){
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}
function Header(){
  return <h1>Header</h1>;
}

const ProductList = () => (
  <>
  <h2>ProductList</h2>
  <Product/>
  <Product/>
  <Product/>
  <Product/>
  </>
);
function Product(){
  const productItem ={
    "imageUrl":"1.jpg",
    "title":"Iphone 16",
    "description":"Lorem ipsum dolor sit amet consectetur.",
    "price":"80000"
  };
  return (
    <div>
      <img src={"/img/"+productItem.imageUrl} alt="" />
      <h2>{productItem.title}</h2>
      <p>{productItem.description}</p>
      <span>{productItem.price}</span>
    </div>
  );
}

// const List = function (){
//   return <h3>Header3</h3>;
// }
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
