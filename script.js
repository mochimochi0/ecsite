'use strict'
//購入画面での動き
window.onload = function(){
  var count = document.getElementById('count'),
  item_cart_btn = document.querySelectorAll('.item_cart_btn'),
  fragment = document.createDocumentFragment(), //DOMの追加処理用のフラグメント
  ele = document.getElementById('item_buy_list'),
  total = 0,
  total_ele = document.getElementById('js_total'),
  btn = document.getElementById('btn'),
  items = JSON.parse(localStorage.getItem("items"));//ローカルストレージの商品データの配列,jsで扱うためにJSON→jsに変換するにはparseを使用する(stringfyと逆)


  if(items){
    for(var i=0;i<items.length;i++){
      var li = document.createElement('li'),
      h2 = document.createElement('h2'),
      price = document.createElement('div');

      h2.appendChild(document.createTextNode(items[i].name));
      price.appendChild(document.createTextNode(items[i].price));
      
      price.classList.add('buy_list_price');

      li.appendChild(h2);
      li.appendChild(price);

      fragment.appendChild(li);

      total += items[i].price;

    }
  }

  ele.appendChild(fragment);

  total_ele.innerHTML = total;

  if(items){
    btn.addEventListener('click',function(){
    window.alert('購入が確定しました');
    ele.innerHTML="";
    total_ele.innerHTML="0";
    localStorage.removeItem('items');
  });
  }
};
