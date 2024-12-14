function displayList() {
    const fruits = document.getElementById("fruits");
    const preChiled = fruits.children;

    // 子要素をすべて取得
    const childList = [];
    Array.prototype.forEach.call(preChiled, item => {
        childList.push(item.innerHTML);
    });

    // 古い子要素をすべて削除
    while(fruits.firstChild) {
        fruits.removeChild(fruits.firstChild);
    }

    // リスト形式の子要素を生成
    const ul = document.createElement("ul");
    fruits.appendChild(ul);
    childList.forEach((fruit) => {
        let li = document.createElement("li");
        li.innerHTML = fruit;
        ul.appendChild(li);
    });
}