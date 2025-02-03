let bagitem;
onload();
function onload(){
    let bagitemstr = localStorage.getItem('bagitems');
    bagitem = bagitemstr ? JSON.parse(bagitemstr) : [];
    displayitemshomepage();
    displaybagicon()
}


function addtobag(itemid){
    bagitem.push(itemid);
    localStorage.setItem('bagitems',JSON.stringify(bagitem))
    displaybagicon()

}
function displaybagicon(){
    let bagcount = document.querySelector('.bag-item-count');
    bagcount.innerHTML = bagitem.length;
}

function displayitemshomepage(){

    let itemContainer = document.querySelector('.contener')
    console.log(itemContainer);
    if (!itemContainer){
        return;
    }
let innerHTML = '';
// items array in item,js
items.forEach(item => {
    innerHTML+= `<div class="item-contener">
                <img class="item-image" src="${item.image}" alt="item imgae">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">${item.current_price}</span>
                    <span class="orignal-price">Rs ${item.original_price}</span>
                    <span class="dicount">(${item. discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add" onclick="addtobag(${item.id})">Add To Bag</button>
            </div>`
    
});

itemContainer.innerHTML = innerHTML;

}

