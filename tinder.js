tinderLike()

let timerId = null; // タイマーIDを保存するためのグローバル変数

function tinderLike() {
    const minTime = 1, maxTime = 2; // 次のアクションまでのランダムな待機時間の範囲
    const rand_time = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime); // 次のアクションまでのランダムな待機時間
    const minFlag = 1, maxFlag = 10; // "LIKE"の選択比率を調整するための範囲
    const rand_flag = Math.floor(Math.random() * (maxFlag - minFlag + 1) + minFlag); // "LIKE"か"NOPE"かを決定するランダム値
    const good_elem = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a")[0];
    const bad_elem = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-nope):a")[0];
  
    try {
        if(rand_flag <= 9) 
        {
            good_elem.click();
        } 
        else 
        {
            bad_elem.click();
        }
    } catch(e) {
      console.log("An error occurred, stopping the function: " + e.message);
　　 // エラーメッセージをログに記録
        stopTinderLike(); // 関数を停止
    }
    // setTimeout を呼び出す際に返されるタイマーIDを保存
    timerId = setTimeout(tinderLike, rand_time * 1000);
}

// この関数を呼び出して tinderLike を停止
function stopTinderLike() {
    if(timerId !== null) 
    {
        clearTimeout(timerId);
        timerId = null; // タイマーが停止されたことを示す
    }
}
