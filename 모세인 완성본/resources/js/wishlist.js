document.getElementById('heart_good').addEventListener('click', function() {
    var url = 'https://rarely-current-dane.ngrok-free.app/wlist/save?user_id=200sein&item_id=1';


    fetch(url, {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
    })
        .then(function(response) {
            console.log(response);
            // 응답 처리
            // 원하는 작업을 수행하세요.
        })
        .catch(function(error) {
            // 에러 처리
            console.error('요청 실패:', error);
            alert(error);
        });
});

document.getElementById('heart_bad').addEventListener('click', function() {
    var url = 'https://rarely-current-dane.ngrok-free.app/wlist/delete?user_id=200sein&item_id=1';


    fetch(url, {
        method: 'POST',

    })
        .then(function(response) {
            console.log(response);
            // 응답 처리
            // 원하는 작업을 수행하세요.
        })
        .catch(function(error) {
            // 에러 처리
            console.error('요청 실패:', error);
        });
});
// 위시리스트 부분

document.getElementById('cart').addEventListener('click', function() {
    var url = 'https://rarely-current-dane.ngrok-free.app/order/save?user_id=200sein&item_id=1';


    fetch(url, {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
    })
        .then(function(response) {
            console.log(response);
            alert("장바구니에 담았습니다.");
            // 응답 처리
            // 원하는 작업을 수행하세요.
        })
        .catch(function(error) {
            // 에러 처리
            console.error('요청 실패:', error);
        });
});
// 장바구니 담기
