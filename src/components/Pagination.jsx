function Pagination({ page, totalPages, onPageChange }) {
  if (!totalPages || totalPages <= 1) {
    return null
  }

  return (
    <div className="pagination" aria-label="Sayfalama">
      <button type="button" onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
        Önceki
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button type="button" onClick={() => onPageChange(page + 1)} disabled={page >= totalPages}>
        Sonraki
      </button>
    </div>
  )
}

export default Pagination
