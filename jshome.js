document.addEventListener("DOMContentLoaded", function () {
  function search() {
    var k = document.getElementById("Search").value;
    if (k != "") {
      var it = document.querySelectorAll(".pane");
      var res = 0; 
      for (var i = 0; i < it.length; i++) {
        var h5 = it[i].querySelector("h5");
        var p = it[i].querySelector("p");
        if (
          h5.innerText.toLowerCase().includes(k.toLowerCase()) ||
          p.innerText.toLowerCase().includes(k.toLowerCase())
        ) {
          res++;
          it[i].style.display = "block";
        } else {
          it[i].style.display = "none";
        }
      }
      document.getElementById("thaythe").innerText = "Kết quả cần tìm: " + k;
      if (res == 0) {
        setTimeout(function () {
          document.getElementById("thaythe").innerText = "Không thấy kết quả tìm kiếm!";
        }, 1500);
      }
    }
  }

  document.getElementById("btnSearch").addEventListener("click", search);
    var pro = document.querySelectorAll(".pane");
    var hang = document.querySelectorAll(".phone");
    var thaydoi = document.getElementById("thaythe");
    hang.forEach(function(item){
      item.addEventListener("click", function(){
        var cat = item.getAttribute("data-category");
        if(cat === 'all'){
          thays.innerText = "Tất cả điện thoại (30 sản phẩm)";
          pro.forEach(function(sp){
            sp.style.display = "block";
          })
        } else{
          thaydoi.innerText = cat.toUpperCase();
          pro.forEach(function(sp){
            sp.style.display = "none";
            var ds = document.querySelectorAll("." + cat);
            ds.forEach(function(sp){
              sp.style.display = "block";
            })
          })
        }
      })
    })
    var product = document.querySelectorAll(".pane");
    var gia = document.querySelectorAll(".dropdown-item.gia");
    var thay = document.getElementById("thaythe");
    gia.forEach(function(item){
      item.addEventListener("click", function(){
        var c = item.getAttribute("data-category");
        if(c === 'all'){
          thays.innerText = "Tất cả điện thoại (30 sản phẩm)";
          product.forEach(function(sp){
            sp.style.display = "block";
          })
        } else{
          if(c === 'duoi2trieu'){
            thay.innerText = "Sản phẩm dưới 2 triệu";
          } else if(c === 'tu2den4tr'){
            thay.innerText = "Sản phẩm từ 2 đến 4 triệu";
          } else if(c === 'tu4den12tr'){
            thay.innerText = "Sản phẩm từ 4 đến 12 triệu";
          } else if(c === 'tu12den20tr'){
            thay.innerText = "Sản phẩm từ 12 đến 20 triệu";
          } else if(c === 'tu20trtrolen'){
            thay.innerText = "Sản phẩm từ 20 triệu trở lên";
          }
          product.forEach(function(sp){
            sp.style.display = "none";
            var dd = document.querySelectorAll("." + c);
            dd.forEach(function(sp){
              sp.style.display = "block";
            })
          })
        }
      })
    })
    var pros = document.querySelectorAll(".pane");
    var game = document.querySelectorAll(".dropdown-item.nhucau");
    var thays = document.getElementById("thaythe");
    game.forEach(function(item){
      item.addEventListener("click", function(){
        var c2 = item.getAttribute("data-category");
        if(c2 === 'all'){
          thays.innerText = "Tất cả điện thoại (30 sản phẩm)";
          pros.forEach(function(sp){
            sp.style.display = "block";
          })
        } else{
          if(c2 === 'game'){
            thays.innerText = "Điện thoại chơi game";
          } else if(c2 === 'chupanh'){
            thays.innerText = "Điện thoại chụp ảnh đẹp";
          } else if(c2 === 'cauhinh'){
            thays.innerText = "Điện thoại cấu hình cao";
          } else if(c2 === 'Pin'){
            thays.innerText = "Điện thoại pin trâu";
          }
          pros.forEach(function(sp){
            sp.style.display = "none";
            var ds2 = document.querySelectorAll("." + c2);
            ds2.forEach(function(sp){
              sp.style.display = "block";
            })
          })
        }
      })
    })
  });