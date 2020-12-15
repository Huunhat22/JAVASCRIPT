var height_jonh = 1.8;
var weight = 75;
var IBM;
var height_mith = 1.75;
var weight_m = 80;
var IBM_m;

IBM = (weight)/(height_jonh*height_jonh);
IBM_m = weight_m/(height_mith**2);

console.log('Tuổi của Jonh =',IBM);
console.log('Tuổi của Jack =',IBM_m);

var isLogical = IBM > IBM_m;

console.log('Tuổi của Jonh lớn hơn Jack ? => ', isLogical);

// Thực hành if - else
var j = 12;
var i= 11;
if (j ==10) {
    console.log('gia tri j la :',j);
} else {
    j +=j;
    console.log(j);
}

//Test swicth case
switch (true) {
    case j < i:
        console.log('gia tri j nho hon i');
        break;
    default:
        console.log('gia tri j lon hon i', j);
        break;
}



// switch (color){
//     case 'red' : 
//         document.write("Bạn nhập màu đỏ, đúng rồi đó");
//         break;
//     case 'yellow' : 
//         document.write("Bạn nhập màu vàng, đúng rồi đó");
//         break;  
//     default :
//         document.write("Màu bạn nhập không có trong hệ thống");
// }

//Bai tap 2
var jonh = (89 + 120 + 103)/3;
var mark = (116 + 94 + 123)/3;
var mary = (97 + 134 + 105)/3;
console.log('Diem trung binh cua Jonh', jonh);
console.log('Diem trung binh cua mart', mark);
console.log('Diem trung binh cua mary', mary);
console.log('===================================');
var new_array = ['nguoi','yeu', 'toi', 'cung', 'dang', 'nho', 'den', 'toi'];
console.log(new_array.join()); // Hàm nối các phần tử của mảng có dấu phẩy

new_array.push('rat nhieu'); // Hàm them 1 phan tử vào cuối mảng
console.log(new_array);
console.log('===================================');

new_array.pop(); //Hàm xóa 1 phần cuối cùng của mảng
console.log(new_array);

console.log('===================================');
new_array.shift(); // Hàm xóa 1 phần tử đầu tiên của mảng
console.log(new_array);

console.log('===================================');
new_array.unshift('Nguoi '); // hàm thêm 1 phần tử đầu tiên của mảng
console.log(new_array);
console.log(new_array.indexOf('Nguoi ')); // Hàm trả về vị trí của phần tử trong mảng
console.log(new_array.lastIndexOf('Nguoi ')); // Hàm trả về vị trí cuối cùng của phần tử chỉ định trong mảng
console.log('================Bài tập về mảng ===================');
var all_bill = [124,48,268];
console.log(all_bill);
function tip_money(i){
    var tip;
if (i < 50) {
    tip = i * 0.2;
} 
else if(i>=50 && i<=200){
    tip = i*0.15;
    
}
else{
    tip = i*0.1;
    
}
return tip;
}

var tips= [tip_money(all_bill[0]),
            tip_money(all_bill[1]),
            tip_money(all_bill[2])
        ];
console.log('Giá trị tiền tiếp của jonh cho hóa đơn là: ',tip_money(all_bill[1])); // cách viết truyền trực tiếp phần tử của mảng
console.log('Tiền tiếp mà Jonh cần phải trả cho ' + all_bill.length + " hóa đơn là :",tips); // cách viết khi in truyền theo mảng
var sum_total = [   all_bill[0] + tips[0],
                    all_bill[1] + tips[1],
                    all_bill[2] + tips[2]
                ];
console.log('Tiền tip phải trả là : ', sum_total);