import { useEffect, useState } from 'react'
import { getProducts } from '../api/productApi'
import Loading from '../components/Loading'
import Pagination from '../components/Pagination'
import ProductCard from '../components/ProductCard'

function ProductListPage() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function fetchProducts() {
      setLoading(true)
      setError('')

      try {
        const response = await getProducts({ page: page - 1, size: 12 })
        const data = response.data

        if (!ignore) {
          setProducts(data.content || data.products || data || [])
          setTotalPages(data.totalPages || 1)
        }
      } catch {
        if (!ignore) {
          setError('Ürünler yüklenirken bir hata oluştu.')
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    fetchProducts()

    return () => {
      ignore = true
    }
  }, [page])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p className="message error">{error}</p>
  }

  return (
    <section>
      <div className="page-heading">
        <h1>Ürünler</h1>
        <p>Bootcamp mağazasındaki ürünleri inceleyin.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && <p className="message">Henüz ürün bulunamadı.</p>}

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </section>
  )
}

export default ProductListPage
