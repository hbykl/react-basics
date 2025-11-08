import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}
function Header() {
  return <h1>Header</h1>;
}

function ProductList() {
  const items = [
    {
      "imageUrl": "1.jpg",
      "title": "Iphone 15",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "70000"
    },
    {
      "imageUrl": "2.jpeg",
      "title": "Iphone 16",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "80000"
    }, {
      "imageUrl": "3.jpg",
      "title": "Iphone 17",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "90000"
    }, {
      "imageUrl": "4.jpg",
      "title": "Iphone 18",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "100000"
    },
  ];
  return (
    <>
      <h2>ProductList</h2>
      {
        items.map((item, index) => (

          <Product key={index} ProductObj={item} />
        ))
      }
    </>
  )
};
function Product({ ProductObj }) {
  console.log(ProductObj)
  return (
    <div>
      <img src={"/img/" + ProductObj.imageUrl} alt="" />
      <h2>{ProductObj.title}</h2>
      <p>{ProductObj.description}</p>
      <span>{ProductObj.price}</span>
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
