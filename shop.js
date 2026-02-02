const shopItems = {
    hats: [
        { id: 'hat1', name: 'Gorra', icon: '🧢', price: 50 },
        { id: 'hat2', name: 'Corona', icon: '👑', price: 100 },
        { id: 'hat3', name: 'Sombrero', icon: '🎩', price: 80 },
        { id: 'hat4', name: 'Casco', icon: '⛑️', price: 70 }
    ],
    glasses: [
        { id: 'glass1', name: 'Lentes', icon: '👓', price: 60 },
        { id: 'glass2', name: 'Gafas Sol', icon: '🕶️', price: 90 },
        { id: 'glass3', name: 'Monóculo', icon: '🧐', price: 75 }
    ],
    clothes: [
        { id: 'cloth1', name: 'Camiseta', icon: '👕', price: 40 },
        { id: 'cloth2', name: 'Traje', icon: '🤵', price: 120 },
        { id: 'cloth3', name: 'Superhéroe', icon: '🦸', price: 150 },
        { id: 'cloth4', name: 'Mago', icon: '🧙', price: 110 }
    ]
};

function openShop() {
    // Check if modal already exists
    if (document.getElementById('shopModal')) return;

    const modal = document.createElement('div');
    modal.className = 'shop-modal show';
    modal.id = 'shopModal';

    modal.innerHTML = `
        <div class="shop-content">
            <div class="shop-header">
                <h2>🛒 Tienda de Accesorios</h2>
                <div class="shop-coins">Tienes: 🪙 ${gameState.coins}</div>
            </div>
            
            <div class="shop-categories">
                <button class="category-btn active" onclick="showCategory('hats', event)">🧢 Sombreros</button>
                <button class="category-btn" onclick="showCategory('glasses', event)">👓 Lentes</button>
                <button class="category-btn" onclick="showCategory('clothes', event)">👕 Ropa</button>
            </div>
            
            <div class="shop-items" id="shopItemsContainer">
                <!-- Items will be loaded here -->
            </div>
            
            <button class="close-shop-btn" onclick="closeShop()">Cerrar Tienda</button>
        </div>
    `;

    document.body.appendChild(modal);
    // Passing a dummy event object for the first call
    showCategory('hats', { target: modal.querySelector('.category-btn') });
}

function showCategory(category, event) {
    // Update active button
    if (event && event.target) {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    const container = document.getElementById('shopItemsContainer');
    if (!container) return;
    container.innerHTML = '';

    const items = shopItems[category];
    const categoryType = category === 'hats' ? 'hat' : category === 'glasses' ? 'glasses' : 'clothes';

    items.forEach(item => {
        const owned = gameState.ownedItems.includes(item.id);
        const equipped = gameState.equippedItems[categoryType] === item.id;

        const itemEl = document.createElement('div');
        itemEl.className = 'shop-item' + (owned ? ' owned' : '') + (equipped ? ' equipped' : '');
        itemEl.onclick = () => handleItemClick(item, categoryType, owned, equipped);

        let statusText = '';
        if (equipped) statusText = '✓ Equipado';
        else if (owned) statusText = '✓ Comprado';

        itemEl.innerHTML = `
            <div class="shop-item-icon">${item.icon}</div>
            <div class="shop-item-name">${item.name}</div>
            <div class="shop-item-price">${owned ? '---' : '🪙 ' + item.price}</div>
            ${statusText ? '<div class="shop-item-status">' + statusText + '</div>' : ''}
        `;

        container.appendChild(itemEl);
    });
}

function handleItemClick(item, categoryType, owned, equipped) {
    if (equipped) {
        // Unequip
        gameState.equippedItems[categoryType] = null;
        updateCharacterDisplay();
        saveGameState();
        showCategory(categoryType === 'hat' ? 'hats' : categoryType === 'glasses' ? 'glasses' : 'clothes');
    } else if (owned) {
        // Equip
        gameState.equippedItems[categoryType] = item.id;
        updateCharacterDisplay();
        saveGameState();
        showCategory(categoryType === 'hat' ? 'hats' : categoryType === 'glasses' ? 'glasses' : 'clothes');
    } else {
        // Try to buy
        if (gameState.coins >= item.price) {
            gameState.coins -= item.price;
            gameState.ownedItems.push(item.id);
            gameState.equippedItems[categoryType] = item.id;
            updateStats();
            updateCharacterDisplay();
            saveGameState();
            showCategory(categoryType === 'hat' ? 'hats' : categoryType === 'glasses' ? 'glasses' : 'clothes');

            // Update coins display in shop
            document.querySelector('.shop-coins').textContent = 'Tienes: 🪙 ' + gameState.coins;
        } else {
            alert('¡No tienes suficientes monedas! Necesitas ' + item.price + ' monedas. Responde más preguntas correctamente para ganar monedas. 🪙');
        }
    }
}

function closeShop() {
    const modal = document.getElementById('shopModal');
    if (modal) {
        modal.remove();
    }
}

function findItemById(itemId) {
    for (let category in shopItems) {
        const item = shopItems[category].find(i => i.id === itemId);
        if (item) return item;
    }
    return null;
}
