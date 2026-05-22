const foods = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 }
];

let total = 0;

console.log("===== HÓA ĐƠN NHÀ HÀNG =====");

foods.forEach((food, index) => {

    let itemTotal = food.price * food.quantity;

    total += itemTotal;

    console.log(
        `${index + 1}. ${food.name} x${food.quantity} = ${itemTotal.toLocaleString()}đ`
    );
});

let discount = 0;

if (total > 1000000) {
    discount = total * 0.15;
}
else if (total > 500000) {
    discount = total * 0.10;
}

let vat = (total - discount) * 0.08;

let tip = total * 0.05;

let finalTotal = total - discount + vat + tip;

console.log("\nTổng cộng:", total.toLocaleString() + "đ");
console.log("Giảm giá:", discount.toLocaleString() + "đ");
console.log("VAT:", vat.toLocaleString() + "đ");
console.log("Tip:", tip.toLocaleString() + "đ");
console.log("Thanh toán:", finalTotal.toLocaleString() + "đ");