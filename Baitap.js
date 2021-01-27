//Bài tập tính chỉ số BIM 
console.log('=============== Bài tập tính chỉ số BIM =====================');
var function_bmi = function(){
    return (this.Mass)/(this.height* this.height); // Cách 1 : đây là giá trị mà hàm function_bmi trả về

   // this.bmivalue= (this.Mass)/(this.height* this.height); // Cách 2 : đây là trả về 1 thủ tục (Biến)
   //Khi trả về thủ tục thì khi thực thi lại, chúng ta chỉ tính toán gọi thủ tục này 1 lần duy nhất. 
}

var jonh ={
    Fullname:'Mr.staham Jonh',
    Age:25,
    Mass:70,
    height: 1.79,
    BMI: function_bmi
}

var misth = {
    Fullname:'Ms.misth',
    Age:24,
    Mass:45,
    height:1.7,
    BMI:function_bmi
}
//================================= Cách 1 ======================================
console.log('Chỉ số BIM của ' + jonh.Fullname + 'là :',jonh.BMI());
console.log('Chỉ số BIM của ' + misth.Fullname + 'là :',misth.BMI());

// Khi thực hiện cách này chúng ta gọi đi gọi lại method nhiều lần. (method xử lý tính toán) 

if (jonh.BMI()> misth.BMI()) {
    console.log('Chỉ số BIM của Jonh lớn hơn Misth');
}
else if(jonh.BMI()< misth.BMI()){
    onsole.log('Chỉ số BIM của Jonh nhỏ hơn Misth');
}
 else{
    console.log('Chỉ số BIM của '+ jonh.Fullname + ' và '+ misth.Fullname +' bằng nhau');
}

//================================== Cách 2 ======================================
// jonh.BMI(); lời gọi hàm [Cách 2]
// misth.BMI(); lời gọi hàm [Cách 2]
// console.log('Chỉ số BIM của ' + jonh.Fullname + 'là :',jonh.bmivalue);
// console.log('Chỉ số BIM của ' + misth.Fullname + 'là :',misth.bmivalue);

// KHi thực hiện cách này, chúng ta chỉ gọi hàm 1 lần duy nhất để tính toán. và sau đó nó đã lưu giá trị bmivalue vào ô nhớ. nên ta chỉ cần lấy ra so sánh

// if (jonh.bmivalue()> misth.bmivalue()) {
//     console.log('Chỉ số BIM của Jonh lớn hơn Misth');
// }
// else if(jonh.bmivalue()< misth.bmivalue()){
//     onsole.log('Chỉ số BIM của Jonh nhỏ hơn Misth');
// }
//  else{
//     console.log('Chỉ số BIM của '+ jonh.Fullname + ' và '+ misth.Fullname +' bằng nhau');
// }