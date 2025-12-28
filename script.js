// ▼▼▼ ここに202通りのデータを追加していきます ▼▼▼
const routeData = [
    // --- 終点: キノピオファクトリー ---
    {
        end: "キノピオファクトリー",
        start: "マリオサーキット",
        type: "must_star", // must_star, caution, front_run の3種類
        badge: "🚨 スター必須",
        headline: "直前スター交換SCが最強",
        points: [
            "初手停止→完成テンプレ運搬が安定",
            "入る直前のアイテムでスターSC",
            "これ以降のサンダーは前受け前提"
        ],
        source: "cite: 226"
    },
    {
        end: "キノピオファクトリー",
        start: "どんぐりツリー",
        type: "caution",
        badge: "⚠️ 重要",
        headline: "3つ目のアイテムでスター",
        points: [
            "道中前半のスター交換が強い",
            "強いアイテムを持って前展開へ",
            "入る直前のアイテムでサンダーケア"
        ],
        source: "cite: 230"
    },
    // --- 終点: リバーサイドサファリ ---
    {
        end: "リバーサイド",
        start: "トロフィーシティ",
        type: "must_star",
        badge: "🚨 絶対スター",
        headline: "ラストアイテムでスター絶対使用",
        points: [
            "ここでサンダーが降らなかったのを見たことがない",
            "長距離運搬したスターで大幅SC",
            "道中は暇なので寝ないように"
        ],
        source: "cite: 99"
    },
    {
        end: "リバーサイド",
        start: "プクプク",
        type: "must_star",
        badge: "🚨 初手停止推奨",
        headline: "初手停止→スター運搬",
        points: [
            "入る直前のスターSCがトップクラスに強い",
            "初手停止でキノ3/スター確保",
            "ラストアイテムで無敵使用"
        ],
        source: "cite: 88"
    },
    {
        end: "リバーサイド",
        start: "ハテナしんでん",
        type: "front_run",
        badge: "🚙 前張り",
        headline: "SCなし。前張り推奨",
        points: [
            "ショートカットが全くない",
            "フードを使って前展開で入る",
            "サンダーは前受け"
        ],
        source: "cite: 94"
    },
    // --- 終点: ロゼッタてんもんだい ---
    {
        end: "ロゼッタてんもんだい",
        start: "アイスビルディング",
        type: "caution",
        badge: "⚠️ サンダー注意",
        headline: "4のアイテムでサンダーケア",
        points: [
            "洞窟前の「4のアイテム」がサンダーポイント",
            "ここで打ってSCしたい心理が働く",
            "基本は前展開で入る"
        ],
        source: "cite: 196"
    }
];

// ▲▲▲ データここまで ▲▲▲

// DOM要素の取得
const stepDest = document.getElementById('step-dest');
const stepStart = document.getElementById('step-start');
const resultCard = document.getElementById('result-card');
const destGrid = document.getElementById('dest-grid');
const startGrid = document.getElementById('start-grid');
const resetBtn = document.getElementById('reset-btn');

// ステップ1: 目的地ボタンを生成
function init() {
    // 重複を排除して目的地のリストを作る
    const destinations = [...new Set(routeData.map(d => d.end))];
    
    destGrid.innerHTML = '';
    destinations.forEach(dest => {
        const btn = document.createElement('button');
        btn.textContent = dest;
        btn.onclick = () => selectDestination(dest);
        destGrid.appendChild(btn);
    });
}

// ステップ2: 出発地ボタンを生成
function selectDestination(dest) {
    stepDest.classList.add('hidden');
    stepStart.classList.remove('hidden');
    resetBtn.classList.remove('hidden');

    // 選ばれた目的地に向かうルートだけを抽出
    const availableRoutes = routeData.filter(d => d.end === dest);

    startGrid.innerHTML = '';
    availableRoutes.forEach(route => {
        const btn = document.createElement('button');
        btn.textContent = route.start;
        btn.onclick = () => showResult(route);
        startGrid.appendChild(btn);
    });
}

// ステップ3: 結果を表示
function showResult(route) {
    stepStart.classList.add('hidden');
    resultCard.classList.remove('hidden');
    
    // クラスをリセットしてから追加
    const contentDiv = document.querySelector('.card-content');
    contentDiv.className = 'card-content type-' + route.type;

    // 中身を注入
    document.getElementById('strategy-badge').textContent = route.badge;
    document.getElementById('result-headline').textContent = route.headline;
    document.getElementById('citation-source').textContent = route.source;

    const pointsUl = document.getElementById('result-points');
    pointsUl.innerHTML = '';
    route.points.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        pointsUl.appendChild(li);
    });
}

// リセット処理
resetBtn.onclick = () => {
    stepDest.classList.remove('hidden');
    stepStart.classList.add('hidden');
    resultCard.classList.add('hidden');
    resetBtn.classList.add('hidden');
};

// 初期化実行
init();