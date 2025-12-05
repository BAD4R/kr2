// const itemsJson = await fetch("./data/shoppItems.json").json;


const itemsJson = {
    "storeItems": [
        {
            "id": 1,
            "name": "Зубная щетка",
            "price": 299,
            "image": "images/store/toothbrush.jpg",
            "description": "Электрическая зубная щетка с несколькими режимами чистки."
        },
        {
            "id": 2,
            "name": "Зубная паста",
            "price": 199,
            "image": "images/store/toothpaste.jpg",
            "description": "Отбеливающая зубная паста с фтором для защиты эмали."
        },
        {
            "id": 3,
            "name": "Ополаскиватель для рта",
            "price": 149,
            "image": "images/store/mouthwash.jpg",
            "description": "Антибактериальный ополаскиватель для свежего дыхания."
        },
        {
            "id": 4,
            "name": "Зубная нить",
            "price": 99,
            "image": "images/store/dental_floss.jpg",
            "description": "Натуральная зубная нить для эффективной очистки межзубных пространств."
        }
    ]
};

async function insertStoreItems() {
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