function choice(items){
    let index = Math.floor(Math.random() * items.length);

    return items[index];
}

function remove(items, item){
    let index = items.indexOf(item);
    if(index > -1){
        items.splice(index, 1);
        return items;
    }else{
        return undefined;
    }
}

export {choice, remove};