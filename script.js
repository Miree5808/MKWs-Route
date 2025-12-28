// ステップ3: 結果を表示
function showResult(route) {
    stepStart.classList.add('hidden');
    resultCard.classList.remove('hidden');
    
    const contentDiv = document.querySelector('.card-content');
    contentDiv.className = 'card-content';
    contentDiv.classList.add('type-' + route.type);

    document.getElementById('strategy-badge').textContent = route.badge;
    document.getElementById('result-headline').textContent = route.headline;
    document.getElementById('citation-source').textContent = route.source;

    // ▼▼▼ 変更箇所：IDを使ってテキストを取得 ▼▼▼
    const pointsUl = document.getElementById('result-points');
    pointsUl.innerHTML = '';

    // IDに対応するテキストがあるか確認し、なければ空配列を使う（エラー防止）
    const pointsList = strategyTexts[route.pointsId] || ["データが見つかりません"];

    pointsList.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        pointsUl.appendChild(li);
    });
    // ▲▲▲ 変更ここまで ▲▲▲
}