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
console.log("================================");

var image = document.querySelector(".image_tana");


//Set - thay doi thuoc tinh hay du lieu co san
image.setAttribute("alt","this is a image");
image.setAttribute("title","Hoa cuc Tana");
console.log(image);


// Get - lay du lieu co san, 
var eldatatitle = document.querySelectorAll(".demo");
var temp ='';
for(var index =0; index < eldatatitle.length; index++){
    // console.log(eldatatitle[index].getAttribute("data-title"));
    temp = temp + " "+ eldatatitle[index].getAttribute("class");
}

console.log("temp : ",temp); // Bi du 1 khoang trang cuoi cung phia sau chuoi

// set gia tri data-title mới cho #demo và cắt khoảng trắng đầu và cuối
document.getElementById("demo").setAttribute("class",temp.trim());
console.log(eldatatitle);

//Thực hành thay thế thuộc tính màu sắc với thẻ P với javascript
var colorskin = document.getElementById("color-skin");

function changeStylecolor(href){
    colorskin.setAttribute("href",href);
}

// thêm class cho container
//box-shadow: 1px -1px 15px 7px
var containerDiv = document.querySelector(".container");

function changeContainer(type){
    // console.log(tyle)
    var newclass = "container " + type;
    containerDiv.setAttribute("class",newclass);
}

// thay đổi background cho trang web
var body = document.getElementsByTagName("body")[0]; 
// khi gọi tới getelementbyTabname thì nó sẽ trả về mảng nhiều phần tử
// ở ví dụ này , ta chỉ đến phần tử 0 vì chỉ có 1 body
// console.log(body);

function changeBackgroud(filename){
    // console.log(filename); trả vể giá trị của biến filename 
    // console.log(body, filename);
    if (filename) {
        // background-image: url(../HTML/hinhanh/bg.jpg);
        var changestyle = "background-image: url(" + filename + ")";
        body.setAttribute("Style",changestyle);
    } else {
        body.setAttribute("style",filename);
    }
}