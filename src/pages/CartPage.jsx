import { Link } from 'react-router-dom'

function CartPage() {
  return (
    <section className="empty-state">
      <h1>Sepet</h1>
      <p>Sepetiniz şu an boş.</p>
      <Link to="/" className="button">
        Ürünlere Git
      </Link>
    </section>
  )
}

export default CartPage
