// Truy xuất phần tử bằng javascript dùng selector của css
/*
    có thể sử dụng cách này để thay thế cho việc truy xuất trong file main.js
    - getElementByClassId
    - getElementByClassName
    - getElementByTagName

    - querySelector("#demo") trả về cho mình một phần tử đầu tiên tìm thấy được match với selector
    - querySelectorAll(".demo") trả về cho mình nhiều phần tử match với selector truyền vào -> Không phải là array. 
    Muốn ép kiểu về array giống với Array.from()
*/

var demoId = document.querySelector("#demo");
console.log(demoId); // trả về ID đầu tiên mà mình truy xuất Nếu, querySelector là class thì cũng chỉ trả về class đầu tiên mà mình truy xuất

var democlass = document.querySelectorAll(".demo");
// console.log(democlass);
console.log(Array.from(democlass)); // ép kiểu sang array giá trị trả về nôn na như một array
// console.log(democlass); // một cách viết gọn

democlass = Array.from(democlass);
console.log(democlass.push(123));  // trả về length của mảng sau khi thêm mới 1 giá trị
console.log(democlass);