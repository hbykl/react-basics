export default function Product({ ProductObj }) {
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
