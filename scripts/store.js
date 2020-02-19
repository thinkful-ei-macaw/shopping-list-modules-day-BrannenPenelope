const items = [];
const hideCheckedItems = false;

import item from './item.js';

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
};

function findById(id) {
    return this.items.find(item => item.id === id);
};

function addItem(name) {
    try {
        item.validateName(name);
        const potatoe = item.create(name);
        this.items.push(potatoe);
    } catch (error) {
        console.log(`"can not add item: ${error.message}"`)
    }
}

function findAndToggleChecked(id) {
    const foundItem = this.items.find(item => item.id === id);
    foundItem.checked = !foundItem.checked;
}

function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
}

function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName);
        this.findById(id).name = newName;
    } catch (error) {
        console.log(`"can not add item: ${error.message}"`)
    }
}

function findAndDelete(id) {
    this.items = this.items.filter(item => item.id !== id);
}