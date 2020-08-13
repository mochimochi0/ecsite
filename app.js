'use strict'

window.onload = function(){
  var count = document.getElementById('count'), //カートに入っている数がわかる
  item_cart_btn = document.querySelectorAll('.item_cart_btn'),
  count_cart = 0,
  save_item = [],
  items = JSON.parse(localStorage.getItem("items"));//ローカルストレージの商品データの配列,jsで扱うためにJSON→jsに変換するにはparseを使用する(stringfyと逆)

  item_cart_btn.forEach(function(cart_btn,index){
    cart_btn.addEventListener('click',function(){
      var name = cart_btn.dataset.name,
      price = Number(cart_btn.dataset.price);

      save_item.push({
        id: index,
        name: name,
        price: price
      });

      //ローカルストレージに商品データを保管(上書き)
      localStorage.setItem("items",JSON.stringify(save_item));
      //オブジェクトや配列をJSONに変換するときにはstringfyを使用
      
    count_cart++;
    count.innerHTML=count_cart;
    });
  });

 
};