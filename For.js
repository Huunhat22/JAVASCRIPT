//Thực hành về vòng lặp For

// Cách 2  : về viết hàm sử dụng chung cho tất cả các object
calavergare = function(){
        var total = 0;
        var totalscores = 0;
        for(key in this.scores){
            total +=1;
            // console.log('Key = ',key); // hiển thị các thuộc tính có trong scores
            // console.log('Scores ' + key + ' =', this.scores[key]); // hiển thị dữ liệu của thực thuộc tính cho trong scores
            totalscores = totalscores + this.scores[key];
        }
        return  totalscores/total;
        // console.log('Total subject = ',total);
        // console.log('Total scores = ', totalscores);
        // console.log('Avergare Subject = ', totalscores/total);
    }

console.log('=================== vòng lặp For ================');
var studentA = {
    fullname:'Vo huu nhat',
    year:1995,
    scores:{
        toan:9,
        ly:8,
        hoa:7
    },
    Avergare : calavergare
    // calavergare:function(){ // Cách 1 : ta viết trực tiếp trong mỗi Object
    //     var total = 0;
    //     var totalscores = 0;
    //     for(key in this.scores){
    //         total +=1;
    //         // console.log('Key = ',key); // hiển thị các thuộc tính có trong scores
    //         // console.log('Scores ' + key + ' =', this.scores[key]); // hiển thị dữ liệu của thực thuộc tính cho trong scores
    //         totalscores = totalscores + this.scores[key];
    //     }
    //     console.log('Total subject = ',total);
    //     console.log('Total scores = ', totalscores);
    //     console.log('Avergare Subject = ', totalscores/total);
    // }
}

// Mỗi học sinh có số lượng điểm khác nhau.
// Object scroses lưu điểm không phải là một mảng => không có thuộc tính length

var studentB = {
    fullname:'Ngo thi binh duong',
    year:1995,
    scores:{
        toan:10,
        ly:9,
        hoa:8,
        sinh:8.5
    },
    Avergare : calavergare
}
console.log('Total Avergare Subject = ' + studentA.fullname + ' :',studentA.Avergare());
console.log('Total Avergare Subject = ' + studentB.fullname + ' :',studentB.Avergare());

console.log('=================== Bài tập vòng lặp For ================');
// tính tiền tip phải trả khi có các hóa đơn khác nhau.
// debugger
function randomArray(n,max){
    var arr = [];
    for (var index = 0; index <n ; index++){
        var number = Math.random() * max;
        number = Math.round(number);
        arr.push(number);
    }
    return arr;
}

// console.log(randomArray(3,500));
//Tao Object
var Sunlyo = {
    fullname:'Vo huu nhat',
    Age: 25,
    bills:randomArray(10,500),
    calltips:function(){
        //số lượng hóa đơn được lấy từ Bills.length
        this.tips =[];
        this.totalvalue = [];
        var length = this.bills.length;
        // console.log(length);

        for(var index =0; index<length;index++){
            var percent;
            var bill = this.bills[index];
            if (bill < 50) {
                percent = 0.2;
            } 
            else if(bill>=50 && bill<=200){
                percent = 0.15; 
            }
            else{
                percent = 0.1;
            }
            this.tips[index] = bill * percent;
            this.totalvalue[index] = this.tips[index] + this.bills[index];
        }
    }
}
Sunlyo.calltips();
console.log(Sunlyo);