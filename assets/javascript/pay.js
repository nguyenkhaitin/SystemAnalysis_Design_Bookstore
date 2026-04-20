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

function setItem() {
  var dem = 0;
  var sum = 0;
  const ul = document.getElementById("list_pay");
  ul.innerHTML = "";
  galleryArray.forEach((value) => {
    let count = localStorage.getItem(value.id);
    if (count !== null || count > 0) {
      dem += parseInt(count);
      sum += count * value.price;
      ul.innerHTML += `<li class="flex mt-10 item-product-${value.id}">
            <div class="w-[20%] relative">
                <img class="w-[70%] m-auto rounded-lg" src="${value.src}" />
            </div>
            <div class="flex flex-col ml-2 justify-between my-[-4px] flex-1">
                <span class="text-3xl font-medium">${value.name}</span>
                <div class="flex justify-between">
                <div class="flex text-xl mt-1 items-center text-center">
                <span id="add_${
                  value.id
                }" class="px-2 pb-1 text-2xl font-bold  cursor-pointer bg-[#ccc]">+</span>
                <span id="sl_${
                  value.id
                }" class="py-1 px-4 text-3xl">${count}</span>
                <span id="minus_${
                  value.id
                }" class="px-3 pb-1 text-2xl font-bold cursor-pointer bg-[#ccc]">-</span>
               </div>
                <span id="total_${value.id}" class="text-3xl text-right">${
        count * parseFloat(value.price)
      }.000 <span class="border-b-[2px] border-[black]">đ</span>
                </div>
            </div>
        </li>`;
          // Add console.log statements
      console.log(`Item ID: ${value.id}, Count: ${count}, Price: ${value.price}`);
    }
  });
  document.getElementById("pay_sl").innerHTML = `Đơn hàng (${dem} sản phẩm)`;
  document.getElementById("pay_sp").innerHTML = `${dem}`;
  document.getElementById("pay_temp").innerHTML = `${sum}.000  `;
  document.getElementById("pay_sum").innerHTML = `${sum}.000  `;
}

setItem();

document.getElementById("pay_btn").onclick = () => {
  localStorage.clear();
  alert("Thanh toán thành công!!!");
  setItem();
};

galleryArray.forEach((value) => {
  if (localStorage.getItem(value.id) > 0) {
    document.getElementById(`add_${value.id}`).onclick = () => {
      setData(value.id, true, value.price);
    };
  }
  if (localStorage.getItem(value.id) > 0) {
    document.getElementById(`minus_${value.id}`).onclick = () => {
      var count = localStorage.getItem(value.id);
      if (count > 0) {
        setData(value.id, false, value.price);
      } else localStorage.removeItem(value.id);
    };
  }
});

function setData(id, check, price) {
  var count = localStorage.getItem(id);
  var sp = document.getElementById("pay_sp").innerHTML;
  let res = parseInt(document.getElementById("pay_sum").innerHTML);
  sp -= count;
  res -= parseInt(count) * price;
  check ? count++ : count--;
  sp += count;
  res += parseInt(count) * price;
  localStorage.setItem(id, count);
  // Add console.log statements
  console.log(`ID: ${id}, Count: ${count}, SP: ${sp}, Res: ${res}`);
  if (parseInt(count) == 0) {
    localStorage.removeItem(id);
    document.querySelector(".item-product-" + id).remove();
    document.getElementById("pay_sum").innerHTML = `${res}.000`;
    document.getElementById("pay_temp").innerHTML = `${res}.000  `;
  }
  document.getElementById("pay_sl").innerHTML = `Đơn hàng (${sp} sản phẩm)`;
  document.getElementById("pay_sp").innerHTML = `${sp}`;
  document.getElementById(`sl_${id}`).innerHTML = count;
  document.getElementById(`total_${id}`).innerHTML = `${
    count * parseFloat(price)
  }.000 <span class="border-b-[2px] border-[black]">đ</span>`;
  document.getElementById("pay_sum").innerHTML = `${res}.000`;
  document.getElementById("pay_temp").innerHTML = `${res}.000  `;
}

function result(res, count, price) {
  if (isNaN(res)) {
    return (res += parseInt(count) * price);
  } else return res;
}
