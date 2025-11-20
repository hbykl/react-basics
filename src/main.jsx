import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <ProductList />
        <Footer />
      </div>
    </>
  );
}
function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand bg-dark border-bottom border-body' data-bs-theme="dark">
        <div className='container'>
          <a href="#" className='navbar-brand'>Store App</a>
        </div>
      </nav>
    </header>
  )
}

function ProductList() {
  const items = [
    {
      "imageUrl": "1.jpg",
      "title": "Iphone 15",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "70000",
      "isActive": true
    },
    {
      "imageUrl": "2.jpg",
      "title": "Iphone 16",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "80000",
      "isActive": true

    }, {
      "imageUrl": "3.jpg",
      "title": "Iphone 17",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "90000",
      "isActive": true

    }, {
      "imageUrl": "4.jpg",
      "title": "Iphone 18",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "100000",
      "isActive": true

    }, {
      "imageUrl": "4.jpg",
      "title": "Iphone 18",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "100000",
      "isActive": true

    }, {
      "imageUrl": "4.jpg",
      "title": "Iphone 18",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "100000",
      "isActive": true

    }, {
      "imageUrl": "4.jpg",
      "title": "Iphone 18",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "100000",
      "isActive": true

    }, {
      "imageUrl": "4.jpg",
      "title": "Iphone 18",
      "description": "Lorem ipsum dolor sit amet consectetur.",
      "price": "100000",
      "isActive": true

    }
  ];

  return (
    <>
      <h2 className='title'>ProductList</h2>
      {items.length > 0 ?
        (
          <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id="itemList">
            {
              items.map((item, index) => (
                <div className='col'>
                  <Product key={index} ProductObj={item} />
                </div>
              ))

            }
          </div>
        ) :
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
  if (!ProductObj.isActive) return null;
  return (
    <div className='card shadow-sm'>
      <img className='card-img-top p-2 p-md-3 border-bottom' src={"/img/" + ProductObj.imageUrl} alt="" />
      <div className='card-body'>
        <h2 className='card-title'>{ProductObj.title}</h2>
        <p className='card-text'>{ProductObj.description}</p>
        <span className='badge text-bg-success'>{ProductObj.price}</span>
      </div>
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
