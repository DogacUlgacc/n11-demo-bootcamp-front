import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../api/productApi'
import Loading from '../components/Loading'

function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function fetchProduct() {
      setLoading(true)
      setError('')

      try {
        const response = await getProductById(id)

        if (!ignore) {
          setProduct(response.data)
        }
      } catch {
        if (!ignore) {
          setError('Ürün detayı yüklenirken bir hata oluştu.')
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    fetchProduct()

    return () => {
      ignore = true
    }
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p className="message error">{error}</p>
  }

  if (!product) {
    return <p className="message">Ürün bulunamadı.</p>
  }

  return (
    <section className="detail-page">
      <img
        src={product.imageUrl || product.image || 'https://placehold.co/720x540?text=Product'}
        alt={product.name || product.title}
        className="detail-image"
      />
      <div className="detail-content">
        <Link to="/" className="text-link">
          Ürünlere dön
        </Link>
        <h1>{product.name || product.title}</h1>
        <p>{product.description || 'Bu ürün için açıklama bulunmuyor.'}</p>
        <strong>{formatPrice(product.price)}</strong>
        <button type="button" className="button">
          Sepete Ekle
        </button>
      </div>
    </section>
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

export default ProductDetailPage
