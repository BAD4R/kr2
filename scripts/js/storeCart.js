let itemsInCart = {};

async function cartInteraction(itemId, action, quantity) {
    console.warn('funct called', itemId, action, quantity);
    let idExists = itemsJson.storeItems.some(item => item.id == itemId);
    if (idExists) {
        console.warn('ID found');
    }
    else {console.warn('ID not found'); return;}

    console.warn(itemsInCart)
    switch(action) {
        case 'add':
            console.warn('Adding item');
            if (itemsInCart.hasOwnProperty(itemId)) {itemsInCart[itemId] += quantity;}
            else {itemsInCart[itemId] = quantity;}
            break;
        case 'remove':
            console.warn('Removing item');
            if (itemsInCart.hasOwnProperty(itemId)) {itemsInCart[itemId] -= quantity;}
            break
        case 'clear':
            console.warn('Clearing item');
            if (itemsInCart.hasOwnProperty(itemId)) {itemsInCart[itemId] = quantity;}
            break
    }


    updateItemDisplay(itemId);
    console.log('Current cart state:', itemsInCart);
};

async function updateItemDisplay(itemId) {
    let itemQuantity = document.getElementById(`quantity_${itemId}`);
    let itemControls = document.getElementById(`itemControls_${itemId}`);

    itemQuantity.value = itemsInCart[itemId] || 0;
    itemControls.classList.toggle('hidden', !(itemsInCart[itemId] > 0));
}

function makeOrder() {
    console.log('Making order with items:', itemsInCart);

    fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemsInCart)
    })
    .then(r => r.text())
    .then(text => {
        const win = window.open('', '_blank');
        win.document.write(`<pre>${text}</pre>`);
    });


}


function addStoreItemButtonsListeners() {
  for (const item of itemsJson.storeItems) {
    const addFirstStoreItemToCart = document.getElementById(`addFirstStoreItemToCart_${item.id}`);
    if (!addFirstStoreItemToCart) continue;
    addFirstStoreItemToCart.addEventListener("click", () => cartInteraction(item.id, 'add', 1));

    const addOneMoreStoreItemToCart = document.getElementById(`addOneMoreStoreItemToCart_${item.id}`);
    if (!addOneMoreStoreItemToCart) continue;
    addOneMoreStoreItemToCart.addEventListener("click", () => cartInteraction(item.id, 'add', 1));

    const removeOneStoreItemFromCart = document.getElementById(`removeOneStoreItemFromCart_${item.id}`);
    if (!removeOneStoreItemFromCart) continue;
    removeOneStoreItemFromCart.addEventListener("click", () => cartInteraction(item.id, 'remove', 1));

    const removeAllStoreItemFromCart = document.getElementById(`removeAllStoreItemFromCart_${item.id}`);
    if (!removeAllStoreItemFromCart) continue;
    removeAllStoreItemFromCart.addEventListener("click", () => cartInteraction(item.id, 'clear', 0));
  }
}
document.addEventListener('DOMContentLoaded', addStoreItemButtonsListeners);

const clickListener = document.getElementById("makeOrder")
clickListener.addEventListener("click", makeOrder)