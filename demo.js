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

const subMenu = document.querySelector('.sub-menu');

        document.querySelector('.nav_menu-list li:nth-child(2)').addEventListener('click', function (event) {
            event.stopPropagation(); // NgÄƒn cháº·n sá»± kiá»‡n click lan ra ngoĂ i

            // Kiá»ƒm tra xem .sub-menu cĂ³ hiá»ƒn thá»‹ hay khĂ´ng
            if (subMenu.style.display === 'block') {
                subMenu.style.display = 'none'; // Náº¿u Ä‘Ă£ hiá»ƒn thá»‹, áº©n nĂ³
            } else {
                subMenu.style.display = 'block'; // Náº¿u chÆ°a hiá»ƒn thá»‹, hiá»ƒn thá»‹ nĂ³
            }
        });

        // Äáº·t sá»± kiá»‡n click Ä‘á»ƒ áº©n .sub-menu khi click ngoĂ i nĂ³
        document.addEventListener('click', function () {
            subMenu.style.display = 'none';
        });