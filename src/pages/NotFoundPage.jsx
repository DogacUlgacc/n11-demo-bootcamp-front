import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="empty-state">
      <h1>Sayfa bulunamadı</h1>
      <p>Aradığınız sayfa taşınmış veya hiç oluşturulmamış olabilir.</p>
      <Link to="/" className="button">
        Ana Sayfa
      </Link>
    </section>
  )
}

export default NotFoundPage
