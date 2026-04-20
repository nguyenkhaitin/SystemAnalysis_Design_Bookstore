let filterArray = [];
let galleryArray = [
  {
    id: 1,
    name: "Cây cam ngọt của tôi",
    src: "assets/img/caycamngot.jpg",
    desc: "Cây cam ngọt của tôi là câu chuyện về cậu bé Zezé, một cậu bé 5 tuổi thông minh, tinh nghịch và đáng yêu, sinh ra và lớn lên trong một gia đình nghèo đông con ở ...",
    price: 65.000,
  },
  {
    id: 2,
    name: "Cổ tích của người điên",
    src: "assets/img/cotich.jpg",
    desc: "Từ một bệnh viện tâm thần, một cuốn sổ được kín đáo đưa ra ngoài, trong đó ghi chép câu chuyện cổ tích chưa từng thấy về cuộc ...<h6 class=",
    price: 127.000,
  },
  {
    id: 3,
    name: "Cây chuối non đi giày xanh ",
    src: "assets/img/caychuoinon.jpg",
    desc: "Trên những ngọn cây cao hai bên bờ suối, tiếng ve đã bắt đầu râm ran. Và trên cánh đồng dẫn vô con suối xóm Trong, cỏ khô đi dưới cái nắng như ...",
    price: 70.000,
  },
];

showGallery(galleryArray);

function showGallery(curArray) {
  document.getElementById("product").innerText = "";

  for (var i = 0; i < curArray.length; i++) {
    document.getElementById("product").innerHTML += `
        <div class="col l-4 m-6 c-12">
            <div class="category__item">
                <div class="category__item-img">
                    <img
                        src="${curArray[i].src}"
                        alt=""
                    />
                </div>
                <div class="category__item-info">
                    <h2>${curArray[i].name}</h2>
                    <p>
                        ${curArray[i].desc}
                    </p>
                    <div class="category__item-interact">
                        <p>${curArray[i].price}.000đ</p>
                        <div class = "category__item-icon">
                            <i class="fa-regular fa-heart"></i>
                            <i id="id_${curArray[i].id}" class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}

document.getElementById("search__input").addEventListener("keyup", function () {
  let text = document.getElementById("search__input").value;

  filterArray = galleryArray.filter(function (a) {
    if (a.name.toLowerCase().includes(text.toLowerCase())) {
      return a;
    }
  });

  if (this.value == "") {
    showGallery(galleryArray);
  } else {
    if (filterArray == "") {
      document.getElementById("notice__product").style.display = "block";
      document.getElementById("product").innerHTML = "";
    } else {
      showGallery(filterArray);
      document.getElementById("notice__product").style.display = "none";
    }
  }
});

function setItem() {
  var count = 0;
  for (let i = 1; i <= 30; i++) {
    var x = localStorage.getItem(i);
    if (x > 0) count += parseInt(x);
  }
  document.getElementById("product_sp").innerHTML = count;
}

setItem();

galleryArray.forEach((value) => {
  document.getElementById(`id_${value.id}`).onclick = () => {
    var count = localStorage.getItem(value.id);
    count === null ? (count = 1) : count++;
    localStorage.setItem(value.id, count);
    alert("Đã thêm sản phẩm vào thanh toán");
    var x = document.getElementById("product_sp").innerHTML;
    document.getElementById("product_sp").innerHTML = parseInt(x) + 1;
  };
});
