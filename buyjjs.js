/* sticky header */
var header = document.querySelector("header")

window.addEventListener("scroll", function(){
    x = this.window.pageYOffset
    if ( x > 0) {
        header.classList.add("sticky")
    }
    else{
        header.classList.remove("sticky")
    }
})

/* hover + click navbar */
const subMenu = document.querySelector('.sub-menu');

        document.querySelector('.nav_menu-list li:nth-child(2)').addEventListener('click', function (event) {
            event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài

            // Kiểm tra xem .sub-menu có hiển thị hay không
            if (subMenu.style.display === 'block') {
                subMenu.style.display = 'none'; // Nếu đã hiển thị, ẩn nó
            } else {
                subMenu.style.display = 'block'; // Nếu chưa hiển thị, hiển thị nó
            }
        });

        // Đặt sự kiện click để ẩn .sub-menu khi click ngoài nó
        document.addEventListener('click', function () {
            subMenu.style.display = 'none';
        });

// on click button translate to payment + delivery // 

document.getElementById("linkButton_to_delivery").addEventListener("click", function(){
    var targetURLDelivery = "https://log2408.github.io/muasam2.html"
    window.location.href = targetURLDelivery;
})


