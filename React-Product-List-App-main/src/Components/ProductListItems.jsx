import React from 'react'


// ProductListItems component - Receives products as props and displays them
const ProductListItems = ({ products }) => {
  return (
    <div className='ProductListContainer'>
      {/* Rendering the product list dynamically */}
      <ul className='productBox'>
        {
          // Check if products exist and map through them
          products && products.length > 0 ? products.map((productItem) => <li key={productItem.id}>
            <div className="card">

              {/* Displaying the discount percentage */}
              <div className="discount">
                <p>-{productItem?.discountPercentage}%</p>
              </div>

              {/* Displaying the first image from the images array */}
              <div className='imageContainer'>
                <img
                  src={productItem.images[0]}
                  alt={productItem.title}
                />
              </div>

              {/* Displaying the product title, the category and price */}
              <h3>{productItem?.title}</h3>
              <div className='category'>
                <p><span>Category:</span> {productItem?.category}</p>
                <h3>${productItem?.price}</h3>
              </div>

              {/* Displaying the description and limiting its length */}
              <div>
                <p className='description'> {productItem?.description?.length > 100
                  ? `${productItem.description.slice(0, 80)}...`
                  : productItem.description
                }</p>
              </div>
            </div>
          </li>)
            :
            // If no products available, show this message
            <p style={{ textAlign: 'center' }}>No products Found</p>
        }
      </ul>
    </div>
  )
}

export default ProductListItems