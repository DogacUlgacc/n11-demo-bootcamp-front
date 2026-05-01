function ProductCard({ product, onAddToCart }) {
  const formattedPrice = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: product.currency || "TRY",
  }).format(product.amount || 0);

  const productInitial =
    product.productName?.charAt(0).toLocaleUpperCase("tr-TR") || "n";
  const hasStock = Number(product.stockQuantity) > 0;

  return (
    <div className="product-card">
      <div className="product-media">
        <span className={hasStock ? "stock-badge" : "stock-badge out"}>
          {hasStock ? "Stokta" : "Tükendi"}
        </span>
        <span className="product-initial">{productInitial}</span>
      </div>
      <div className="product-content">
        <span className="shipping-badge">n11 hızlı teslimat</span>
        <h3>{product.productName}</h3>
        <p>{product.productDescription}</p>
        <div className="price-row">
          <strong>{formattedPrice}</strong>
          <span>Stok: {product.stockQuantity ?? "-"}</span>
        </div>
        <button
          type="button"
          disabled={!hasStock}
          onClick={() => onAddToCart(product)}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
