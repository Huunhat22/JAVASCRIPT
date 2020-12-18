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
console.log(studentA);
console.log('Total Avergare Subject = ' + studentA.fullname + ' :',studentA.Avergare());
console.log(studentB);
console.log('Total Avergare Subject = ' + studentB.fullname + ' :',studentB.Avergare());