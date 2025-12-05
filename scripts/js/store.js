async function getStoreItems() {
    console.log('Script active');

    const itemsJson = (await fetch('./data/storeItems.json')).json();
    console.log(itemsJson);
}
getStoreItems();