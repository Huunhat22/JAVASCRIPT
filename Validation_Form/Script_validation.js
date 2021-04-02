
//định nghĩa đối tượng
function Validator(options){

    // Hàm báo xử lý xuất hiện thông báo lỗi
    function validate(inputElement,rule) {
        var errorMessage = rule.test(inputElement.value);         /* Value ở đây là properties của thẻ input, 
                                                                      errorMessage ở đây là giá trị trả về của hàm test()      */
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector); 

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
    }
}


//định nghĩa rules
/*
    1: khi có lỗi thì trả ra message lỗi
    2: khi hợp lệ -> không trả ra cái gì hết. (undefind)
*/
Validator.isRequired = function (selector){
    // return về 1 object
    // Key : value
    return {
        selector : selector,
        test: function (value){           /* value ở đây là giá trị người dùng nhập vào input */
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
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

Validator.minlenght = function (selector,min){
     return {
         selector : selector,
         test : function (value){
             return value.length >= min ? undefined : `Vui lòng nhập lớn hơn ${min} kí tự`
         }
     }
}