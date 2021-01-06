//Thực hành DOM part2 với dropdown list
var dropdownlist = Array.from(document.querySelectorAll('.dropdown'));

dropdownlist.forEach(
    function(elemnt,index){
        var btn = elemnt.querySelector('.btn');
        // console.log(btn);
        // sử dụng hàm thêm xử lý sự kiện
        btn.addEventListener('click',function() {
            // console.log(this);
            if (elemnt.classList.value.indexOf(' drop') === -1) {
                elemnt.classList.add('drop');
            } else {
                elemnt.classList.remove('drop');
            }
            
            /*
                nếu phần tử element đã tồn tại class drop thì remvove
                nếu chưa có thì thêm mới class -> drop
            */

        });
})


/* var dropdown = document.querySelector('.dropdown'); 
    dropdown.addEventListener('click',
        function (e) {
            dropdown.classList.toggle('drop');
        }
    )
  */  