import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-link">
        <img
          src={product.imageUrl || product.image || 'https://placehold.co/480x360?text=Product'}
          alt={product.name || product.title}
          className="product-image"
        />
      </Link>
      <div className="product-card-body">
        <h2>{product.name || product.title}</h2>
        <p>{product.description || 'Ürün detaylarını görmek için karta tıklayın.'}</p>
        <div className="product-card-footer">
          <strong>{formatPrice(product.price)}</strong>
          <Link to={`/products/${product.id}`} className="button">
            Detay
          </Link>
        </div>
      </div>
    </article>
  )
}

function formatPrice(price) {
  if (price === undefined || price === null) {
    return 'Fiyat yok'
  }

  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  }).format(price)
}

export default ProductCard
