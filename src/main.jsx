import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';

function App() {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}
function Header() {
  const style={
    color:"red",
    fontSize:"30px",
    textTransform:"uppercase"
  }
  return <h1 style={style}>Header</h1>;
}

function ProductList() {
  const items = [
    {
      "imageUrl": "1.jpg",
      "title": "Iphone 15",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "70000",
      "isActive":true
    },
    {
      "imageUrl": "2.jpeg",
      "title": "Iphone 16",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "80000",
      "isActive":true

    }, {
      "imageUrl": "3.jpg",
      "title": "Iphone 17",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "90000",
      "isActive":true

    }, {
      "imageUrl": "4.jpg",
      "title": "Iphone 18",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "100000",
      "isActive":true

    },
  ];
  
  return (
    <>
      <h2 className='title'>ProductList</h2>
      {items.length>0?
      (
        <div id="itemList">
        {
          items.map((item, index) => (

            <Product key={index} ProductObj={item} />
          ))

        }
      </div>
      ):
      (
        <p>
          Şu anda satışta ürün yoktur.
        </p>
      )
      }
      
    </>
  )
};
function Product({ ProductObj }) {
  console.log(ProductObj)
  console.log(!ProductObj.isActive, ProductObj.title)
  if(!ProductObj.isActive)  return null;
  return (
    <div>
      <img src={"/img/" + ProductObj.imageUrl} alt="" />
      <h2>{ProductObj.title}</h2>
      <p>{ProductObj.description}</p>
      <span className={`f20 ${ProductObj.price<100000?"discount":"price"}`}>{ProductObj.price}</span>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 10
  const closeHour = 20
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer>
      {
        isOpen ? (
          <p>
            saat {closeHour}'a kadar açığız.
          </p>
        ) :
          (
            <p>
              Şu anda kapalıyız. Saat {openHour} 'da görüşmek üzere
            </p>
          )
      }
    </footer>
  )

}

// const List = function (){
//   return <h3>Header3</h3>;
// }
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
