
PBT_07

PHẦN A

Câu A1

Đoạn 1
```javascript
console.log(x);
var x = 5;
```

Kết quả:
```javascript
undefined
```

Giải thích:
- `var` bị hoisting.
- Biến được đưa lên đầu nhưng giá trị chưa được gán.

Đoạn 2

```javascript
console.log(y);
let y = 10;
```

Kết quả:
```javascript
ReferenceError
```

Giải thích:
- `let` cũng hoisting nhưng nằm trong Temporal Dead Zone (TDZ).
- Không thể truy cập trước khi khai báo.

Đoạn 3

```javascript
const z = 15;
z = 20;
```

Kết quả:
```javascript
TypeError
```

Giải thích:
- `const` không cho phép gán lại giá trị

Đoạn 4

```javascript
const arr = [1,2,3];
arr.push(4);
console.log(arr);
```

Kết quả:
```javascript
[1,2,3,4]
```

Giải thích:
- `const` không đổi được reference.
- Nhưng vẫn thay đổi nội dung object/array được.

Đoạn 5

```javascript
let a = 1;

{
    let a = 2;
    console.log(a);
}

console.log(a);
```

Kết quả:
```javascript
2
1
```
 `let` có block scope

Câu A2

```javascript
typeof null           // object
typeof undefined      // undefined
typeof NaN            // number
"5" + 3               // "53"
"5" - 3               // 2
"5" * "3"             // 15
true + true           // 2
[] + []               // ""
[] + {}               // "[object Object]"
{} + []               // 0
```

Giải thích:
- Toán tử `+` ưu tiên nối chuỗi nếu có string.
- Toán tử `-` luôn ép kiểu sang number.

Câu A3

```javascript
5 == "5"              // true
5 === "5"             // false
null == undefined     // true
null === undefined    // false
NaN == NaN            // false
0 == false            // true
0 === false           // false
"" == false           // true
```

Kết luận:
- Nên dùng `===`
- Vì so sánh cả kiểu dữ liệu và giá trị.
- Tránh lỗi ép kiểu ngầm.

 Câu A4

Các giá trị falsy:

- false
- 0
- -0
- ""
- null
- undefined
- NaN

 Kết quả

```javascript
"A"  -> Có
"B"  -> Không
"C"  -> Có
"D"  -> Có
"E"  -> Không
"F"  -> Không
"G"  -> Có
"H"  -> Có
```
Câu A5

Cách 1

```javascript
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

Cách 2

```javascript
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

Cách 3

```javascript
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

PHẦN C

Câu C1 

Lỗi 1
```javascript
if (giaSauGiam = 0)
```

Sai:
- Dùng phép gán `=`

Đúng:
```javascript
if (giaSauGiam === 0)
```
Lỗi 2

```javascript
tinhGiaGiamGia("100000", 20)
```

Sai:
- `"100000"` là string

Đúng:
```javascript
tinhGiaGiamGia(100000, 20)
```

Lỗi 3 : Không kiểm tra kiểu dữ liệu đầu vào

Sửa:
```javascript
if (typeof giaBan !== "number")
```

Lỗi 4 : Thiếu dấu `;`

Lỗi 5

```javascript
var i
```

Sai vì `var` không có block scope.

Kết quả:
```javascript
Item 5
Item 5
Item 5
```

Sửa:
```javascript
for (let i = 0; i < 5; i++)
```


Lỗi 6 : Không kiểm tra giá trị âm

 Câu C2

Chương trình:
- Tính tổng tiền
- Giảm giá theo mức
- Tính VAT
- Tính tip
- In hóa đơn hoàn chỉnh bằng console