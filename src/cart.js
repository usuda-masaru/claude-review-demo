// カートの合計金額（税込）を計算する
const TAX_RATE = 0.1;

// クーポンの割引率（%）
const COUPONS = { WELCOME10: 10, VIP50: 50 };

function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function total(items) {
  return Math.round(subtotal(items) * (1 + TAX_RATE));
}

// 数量を変更する
function setQty(item, qty) {
  item.qty = qty;
}

// クーポンを使った合計金額
function totalWithCoupon(items, code) {
  const rate = COUPONS[code];
  const discount = (subtotal(items) * rate) / 100;
  return Math.round((subtotal(items) - discount) * (1 + TAX_RATE));
}

module.exports = { subtotal, total, setQty, totalWithCoupon };
