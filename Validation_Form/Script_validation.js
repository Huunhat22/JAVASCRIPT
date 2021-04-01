
//định nghĩa đối tượng
function Validator(options){
    var formElement = document.querySelector(options.form);
    // console.log(formElement);
    if (formElement) {
        options.rules.forEach(rule => {
            // console.log(rule.selector);
            /*
                phải truy xuất element từ thẻ cha gần nhất, tránh việc truy xuất từ document 
            */
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.Signup__form-message'); 
            // console.log(inputElement);
            if (inputElement) {
                inputElement.addEventListener('blur', function () {
                

                    var valueInput = rule.test(inputElement.value);

                    if (valueInput) {
                        errorElement.innerText = valueInput;
                    } else {
                        errorElement.innerText = '';
                    }
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
        test: function (value){
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function (selector){
     return {
         selector : selector,
         test : function (){

         }
     }
}