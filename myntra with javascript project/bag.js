
let bagitemobjects;
onload();

function onload(){
    loadbagitemobjects()
    dispalybagitems()
    remove();
   
}

function loadbagitemobjects(){
   console.log(bagitem)
  bagitemobjects = bagitem.map(itemid =>{
    for(let i=0; i<items.length; i++){
        if(itemid == items[i].id){
            return items[i];
        }
    }
   });
   console.log(bagitemobjects);
 
}


function dispalybagitems(){
    console.log(bagitem)
    let contenerelement = document.querySelector('.bag-items-container')
   
    let innerHTML = '';
    bagitemobjects.forEach(bagitem => {
      innerHTML += genrateitemhtml(bagitem);
    });
      contenerelement.innerHTML = innerHTML;
}

function remove(itemid){
  bagitem = bagitem.filter(bagitemid => bagitemid != itemid);
  localStorage.setItem('bagitems',JSON.stringify(bagitem))
  loadbagitemobjects();
  dispalybagitems();
}


function genrateitemhtml(item){
  return ` <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item. image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs${item.current_price} </span>
                <span class="original-price">Rs${item.original_price}</span>
                <span class="discount-percentage">(${item. discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item. return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">10 Oct 2023</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="remove(${item.id})">X</div>
          </div>`

}