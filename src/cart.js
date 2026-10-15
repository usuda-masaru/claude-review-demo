// カートの合計金額（税込）を計算する
const TAX_RATE = 0.1;

function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function total(items) {
  return Math.round(subtotal(items) * (1 + TAX_RATE));
}

module.exports = { subtotal, total };
