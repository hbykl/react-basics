import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App(){
  return (
    <>
      <Header />
      <ProductList />
      <List/>
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
  return <h4>Product</h4>;
}

const List = function (){
  return <h3>Header3</h3>;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
