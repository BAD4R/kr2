


let itemsJson = null;

async function insertStoreItems() {
    try {
        const response = await fetch("./data/storeItems.json");
        if (!response.ok) throw new Error('Network response was not ok');
        itemsJson = await response.json();
    } catch (error) {
        console.log('Используем локальные данные:', error);
        itemsJson = {
            "storeItems": [
                {
                    "id": 1,
                    "name": "Зубная щетка",
                    "price": 299,
                    "image": "images/store/toothbrush.jpg",
                    "description": "Классическая зубная щетка."
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
                },
                {
                    "id": 5,
                    "name": "Держатель для зубной щётки",
                    "price": 179,
                    "image": "images/store/toothbrush_holder.webp",
                    "description": "Гигиеничный настенный держатель для хранения зубной щётки."
                },
                {
                    "id": 6,
                    "name": "Паста для чувствительных зубов",
                    "price": 249,
                    "image": "images/store/toothpaste.jpg",
                    "description": "Профессиональная паста, уменьшающая чувствительность эмали."
                },
                {
                    "id": 7,
                    "name": "Электрическая зубная щётка",
                    "price": 1999,
                    "image": "images/store/electric_toothbrush.jpg",
                    "description": "Многофункциональная электрическая щётка с несколькими режимами чистки."
                }
            ]
        };
    }
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