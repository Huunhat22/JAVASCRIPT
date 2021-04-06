
//định nghĩa đối tượng
function Validator(options){

    // khai báo 1 hàm là 1 object rỗng -> sử dụng để 1 input áp dụng được nhiều rules
    var selectorRules = {};

    // Hàm báo xử lý xuất hiện thông báo lỗi
    function validate(inputElement,rule) {
        /*  var errorMessage = rule.test(inputElement.value); */         /* Value ở đây là properties của thẻ input, 
                                                                         errorMessage ở đây là giá trị trả về của hàm test()      */
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector); 
        var errorMessage;
        
        
        // Lấy ra các rules của các selector
        var rules = selectorRules[rule.selector];
       
        // Lặp qua từng rule và kiểm tra
        for (let i = 0; i < rules.length; i++) {
            
            errorMessage = rules[i](inputElement.value);

            // Nếu mà có lỗi thì dừng kiểm tra và thoát.
            if(errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.classList.add('validate');
        } else {
            errorElement.innerText = '';
            inputElement.classList.remove('validate');
        }
    }

    // Lấy Element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(rule => {
            // console.log(rule.selector);

            /* Lưu lại các rules cho mỗi input */
            // selectorRules[rule.selector] = rule.test;
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            /*
                phải truy xuất element từ thẻ cha gần nhất, tránh việc truy xuất từ document 
            */
            var inputElement = formElement.querySelector(rule.selector);
            
            // console.log(inputElement);
            // Xử lý trường hợp blur ra khỏi input
            if (inputElement) {
                inputElement.addEventListener('blur', function () {
                    validate(inputElement,rule);
                })
            }

            // Xử lý trường hợp bắt lỗi Email
            if (inputElement) {
                inputElement.addEventListener('input', function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector); 
                    errorElement.innerText = '';
                    inputElement.classList.remove('validate');
                })
            }
        });

        // console.log(selectorRules);
    }
}


//định nghĩa rules
/*
    1: khi có lỗi thì trả ra message lỗi
    2: khi hợp lệ -> không trả ra cái gì hết. (undefind)
*/
Validator.isRequired = function (selector,message){
    // return về 1 object
    // Key : value
    return {
        selector : selector,
        test: function (value){           /* value ở đây là giá trị người dùng nhập vào input */
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function (selector){
     return {
         selector : selector,
         test : function (value){
             var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
             return regex.test(value) ? undefined : 'Trường này phải là Email'
         }
     }
}

Validator.minlenght = function (selector,min,message){
     return {
         selector : selector,
         test : function (value){
             return value.length >= min ? undefined : `Vui lòng nhập lớn hơn ${min} kí tự`
         }
     }
}

Validator.isConfirmed = function(selector,getConfirmValue,message){         /* getConfirmValue là 1 callback function , nên khi return về thì phải thêm ()  / tham số thứ 3 message là thông báo lỗi customize    */
    return{
        selector : selector,
        test : function(value){
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập không đúng'
        }
    }
}