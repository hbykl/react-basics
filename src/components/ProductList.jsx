import { items } from "../data";
import Product from "./Product";
export default function ProductList() {
  return (
    <>
      <h2 className='title'>ProductList</h2>
      {items.length > 0 ?
        (
          <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id="itemList">
            {
              items.map((item, index) => (
                <div className='col' key={index}>
                  <Product  ProductObj={item} />
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