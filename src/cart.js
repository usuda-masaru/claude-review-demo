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

// 数量を変更する（0以上の整数だけ受け付ける）
function setQty(item, qty) {
  if (!Number.isInteger(qty) || qty < 0) {
    throw new RangeError("qty は0以上の整数で指定してください");
  }
  item.qty = qty;
}

// クーポンを使った合計金額（無効なコードは割引なし）
function totalWithCoupon(items, code) {
  const rate = Object.hasOwn(COUPONS, code) ? COUPONS[code] : 0;
  const sub = subtotal(items);
  return Math.round((sub - (sub * rate) / 100) * (1 + TAX_RATE));
}

module.exports = { subtotal, total, setQty, totalWithCoupon };
