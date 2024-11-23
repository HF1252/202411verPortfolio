/* === menu icon navbar (メニューアイコンとナビゲーションバーの切り替え)=== */
let menuIcon = document.querySelector('#menu-icon'); // メニューアイコンの取得
let navbar = document.querySelector('.navbar'); // ナビゲーションバーの取得

// メニューアイコンがクリックされたときの処理
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // メニューアイコンを閉じる（'bx-x'クラスを切り替え）
    navbar.classList.toggle('active'); // ナビゲーションバーの表示/非表示を切り替え
};

/* === scroll sections active link (スクロール時にアクティブなリンクを変更)=== */
let sections = document.querySelectorAll('section'); // すべてのセクション要素を取得
let navLinks = document.querySelectorAll('header nav a'); // ナビゲーションリンクを取得

//スクロール時にアクティブなリンクを変更する処理
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // 現在のスクロール位置
        let offset = sec.offsetTop - 150; // セクションのオフセット位置（150px上に調整）
        let height = sec.offsetHeight; // セクションの高さ
        let id = sec.getAttribute('id'); // セクションのIDを取得

        // セクションが画面に表示された場合、該当するナビゲーションリンクに'active'クラスを追加
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active'); // すべてのリンクから'active'クラスを削除
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // 対応するリンクに'active'クラスを追加
            })
        };
    })

    /* === sticky navbar (スクロール時にヘッダーを固定)=== */
    let header = document.querySelector('.header'); // ヘッダーを取得

    // スクロール位置が100px以上の場合にヘッダーに'sticky'クラスを追加
    header.classList.toggle('sticky', window.scrollY > 100);

    /* === menu icon navbar when click navbar link (scroll) (ナビゲーションバーのリンクがクリックされたときにメニューを閉じる)=== */
    menuIcon.classList.remove('bx-x'); // メニューアイコンを閉じる
    navbar.classList.remove('active'); // ナビゲーションバーを非表示にする
};


/* === swiper (Swiperの初期化（スライダー）)=== */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // 1スライド表示
    spaceBetween: 50, // スライド間のスペース
    loop: true, // ループする
    grabCursor: true, // スライド操作中にカーソルを「つかむ」ように表示
    pagination: {
    el: ".swiper-pagination", // ページネーションの要素
    clickable: true, // クリックでページ切替可能
    },
    navigation: {
    nextEl: ".swiper-button-next", // 次へボタン
    prevEl: ".swiper-button-prev", // 前へボタン
    },
});

/* === dark light mode  (ダークモードとライトモードの切り替え)=== */
let darkModeIcon = document.querySelector('#darkMode-icon'); // ダークモードアイコンの取得

// ダークモードアイコンがクリックされたときの処理
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun'); // アイコンを太陽アイコンに切り替え
    document.body.classList.toggle('dark-mode'); // bodyに'dark-mode'クラスを切り替え（ダークモードON/OFF）
};

/* === scroll reveal (スクロールアニメーション)=== */
ScrollReveal({
    // reset: true,
    distance: '80px', // アニメーションの移動距離
    duration: 2000, // アニメーションの時間（ミリ秒）
    delay: 200 // アニメーションの遅延（ミリ秒）
});

// 各要素に対するスクロールアニメーションの設定
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // 上からスライドイン
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' }); // 下からスライドイン
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' }); // 左からスライドイン
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' }); // 右からスライドイン