
async function insertStoreItems() {
    const itemsJson = await fetch("./data/shoppItems.json").json;
    console.log('Script active');
    let itemCardsContainer = document.getElementById('product-list');

    for (i in itemsJson.storeItems) {
        let itemId = itemsJson.storeItems[i].id 
        let itemName = itemsJson.storeItems[i].name 
        let itemDescription = itemsJson.storeItems[i].description 
        let itemPrice = itemsJson.storeItems[i].price
        let itemImage = itemsJson.storeItems[i].image

        itemCardsContainer.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img src="${itemImage}" alt="${itemName}" class="card-img-top">
                <div class="card-body d-flex flex-column h-100">
                    <h5 class="card-title">${itemName}</h5>
                    <p class="card-text flex-grow-1">${itemDescription}</p>
                    <p class="fw-semibold mb-3">Цена: ${itemPrice} ₽</p>
                    <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-primary" id="addFirstStoreItemToCart_${itemId}">В корзину</button>

                    <div class="d-flex align-items-center gap-2 hidden" id="itemControls_${itemId}">
                        <button class="btn btn-outline-primary" id="removeOneStoreItemFromCart_${itemId}">-</button>
                        <textarea class="form-control text-center" id="quantity_${itemId}" rows="1" style="width:64px; resize:none" readonly>0</textarea>
                        <button class="btn btn-outline-primary" id="addOneMoreStoreItemToCart_${itemId}">+</button>
                        <button class="btn btn-outline-danger" id="removeAllStoreItemFromCart_${itemId}">Удалить</button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
insertStoreItems();