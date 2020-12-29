//Hoc Array

var example_array = ['vo huu nhat','ngo thi binh duong','người yêu tôi là ngô thị bình dương'];
console.log(example_array); // truy xuất tất cả phần tử trong mảng
console.log(example_array[0]); //truy xuất phần tử của mảng
console.log(example_array[example_array.length -1]); // truy xuất tới bất kì phần tử của mảng khi biết vị trí của nó
console.log(example_array[2] +' '+ example_array[0] );

console.log('==============================');
// Object trong Javascript
var student = {
    fullname: 'Vo huu nhat',
    year: 1995,
    scores:{
        maths: 9,
        physical: 8,
        leatuter: 5
    },
    calaverage: function(){
        //cac thao tac trong hàm
        var toan = this.scores.maths;
        var ly = this.scores.physical;
        var van = this.scores.leatuter;
        return (toan + ly + van)/3;
    }
};
console.log(student);
// student.calaverage();
console.log('Day ho ten hoc sinh :',student.fullname); //hien thi phan tu trong object
console.log('Day la diem mon hoc maths : ',student.scores.maths); // truy xuat phan tu long nhau trong object

// student.calaverage(); // method cua object student

var calulate = student.calaverage();
console.log('Goi properties (là hàm tính toán):  ',calulate);

console.log('=============== cách thứ 2 ===============');
// cách thứ 2
var student2 = new Object(); // khởi tạo 1 object mới nhưng không có giá trị
student2.fullname = 'ngo thi binh duong'; // tạo thuộc tính (propeties) cho object thứ 2
student2.year = '1996';
console.log('fullname của students2 :',student2.fullname); // xuat giá trị cho thuộc tính fullname
console.log('Year của students :',student2.year);

student2.scores ={ // khởi tạo scores cho object studens2
    maths:9,
    physical:10,
    leatuter:8
}

// student2.calaverage = function(){ // cách 1 :  khởi tạo hàm giống với object student
//         var toan = this.scores.maths;
//         var ly = this.scores.physical;
//         var van = this.scores.leatuter;
//         return (toan + ly + van)/3;
// }

student2.calaverage = student.calaverage; //sử dụng tính kế thừa từ object student để tạo hàm cho student2

console.log(student2); 
var calulate2 = student2.calaverage();
console.log('Goi properties (là hàm tính toán):  ',calulate2);

