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

function ProductList() {
  const items=[
    {
    "imageUrl":"1.jpg",
    "title":"Iphone 15",
    "description":"Lorem ipsum dolor sit amet consectetur.",
    "price":"70000"
    },
    {
    "imageUrl":"2.jpeg",
    "title":"Iphone 16",
    "description":"Lorem ipsum dolor sit amet consectetur.",
    "price":"80000"
    },{
    "imageUrl":"3.jpg",
    "title":"Iphone 17",
    "description":"Lorem ipsum dolor sit amet consectetur.",
    "price":"90000"
    },{
    "imageUrl":"4.jpg",
    "title":"Iphone 18",
    "description":"Lorem ipsum dolor sit amet consectetur.",
    "price":"100000"
    },
  ];
  return(
    <>
      <h2>ProductList</h2>
      <Product image={items[0].imageUrl} title={items[0].title} description={items[0].description} price={items[0].price}/>
      <Product image={items[1].imageUrl} title={items[1].title} description={items[1].description} price={items[1].price}/>
      <Product image={items[2].imageUrl} title={items[2].title} description={items[2].description} price={items[2].price}/>
      <Product image={items[3].imageUrl} title={items[3].title} description={items[3].description} price={items[3].price}/>
    </>
  )
};
function Product(props){
  console.log(props)
  return (
    <div>
      <img src={"/img/"+ props.image} alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <span>{props.price}</span>
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
