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
console.log(democlass);
console.log(Array.from(democlass)); // ép kiểu sang array giá trị trả về nôn na như một array
// console.log(democlass); // một cách viết gọn

democlass = Array.from(democlass);
console.log(democlass.push(123));  // trả về length của mảng sau khi thêm mới 1 giá trị
// console.log(democlass);
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

//Ví dụ function thêm class (classname)
/*
    ví dụ về giá trị class cũ là "container abc"
    thêm mới vào classname = "abc" => sẽ không xử lý

    viết Hàm xóa class
    ví dụ class cũ đã có "container abc"
    có một function removeclass(classname) => Muốn xóa classname  ="abc"

    Phải kiểm tra xem class cũ có tồn tại "abc" hay không?
    1.Nếu có => xử lý chuỗi, xử lý mảng để xóa thu được giá trị cuối cùng sau khi xóa là "container"
    2. Nếu không có "abc" -> thì sẽ không làm gì.
*/
var imge = document.querySelector(".image_tana");
    // imge.setAttribute('src','../HTML/hinhanh/SunnyThousand.jpg');

// Thêm class    
function addclass(element , classname){
    // console.log(element, classname);
    var oldclass = element.getAttribute('class');
    if (oldclass) {
        // khác null -> có nghĩa là đã có class rồi thì nối chuỗi thêm 1 class mới
        /* chỗ nãy sẽ kiểm lỗi như sau:
            nếu đã có class đang có khác với class mới - > thì thêm vào
            ngược lại là bị trùng -> khỏi thêm.
        */
       if(oldclass.indexOf(classname) === -1){
        var newclass = oldclass + " " + classname;
        element.setAttribute('class',newclass);
       }
    } else {
        // bằng null -> chưa có class thì mình sẽ gán mới
        element.setAttribute('class',classname);
    }

}

// xóa class 
function removeclass(element, classname){
    var old = element.getAttribute('class');
    if (old) {
        var arrayold = old.split(' ');
        var tempindex = arrayold.indexOf(classname);
        if (tempindex !== -1) {
            arrayold.splice(tempindex,1);
            element.setAttribute('class',arrayold.join(" "));
        }
    } 
    
}

addclass(body,'container__wraper');
addclass(imge,'image_sunny'); // gọi tới hàm thêm addclass => thêm class mới 

removeclass(imge,'image_sunny') // gọi tới hàm remove class

// Một số method nâng cao của array và string
/*
    hàm slice(start, end) => tách mảng ,tạo ra một mảng mới theo index của mảng

    hàm splice(start, end) => xóa phần tử theo index , giá trị trả về là mảng chứa các phần tử đã xóa
        => làm thay đổi mảng gốc, trả về mảng những phần tử đã xóa

    hàm splice() còn có chức năng thêm phần tử vào mảng.
*/
/*
var arrNumber = [1,2,3,4,5,6,7,8,9,10];
var arrNumber_2 = [1,2,3,4,5,6,7,8,9,10];

console.log(arrNumber.slice(0,3)); // hàm slice là hàm tách theo index của mảng. không bao gồm index cuối cùng
console.log(arrNumber);

console.log(arrNumber_2.splice(0,4));  //hàm splice(start, end) => xóa phần tử theo index , không bao gồm index cuối cùng
console.log(arrNumber_2); // => kết quả trả về [5,6,7,8,9,10]

console.log(arrNumber_2.splice(0 ,4,1258)); //=> [5,6,7,8]
console.log(arrNumber_2); // => [1258,9,10] */