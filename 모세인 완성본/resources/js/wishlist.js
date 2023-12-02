var user_id = localStorage.getItem('user_id');
//const a = document.getElementById("heart_good");
//a.style.display = "none";
//const b = document.getElementById("heart_bad");
//b.style.display = "none";
// 위시리스트 조회 URL
// 위시리스트 조회 URL
// 위시리스트 조회 URL
var wishlistUrl = `https://rarely-current-dane.ngrok-free.app/wlist/list?user_id=${user_id}`;
const baseurl = "https://rarely-current-dane.ngrok-free.app";
var url =`${baseurl}/wlist/list?user_id=${user_id}`;
var count =0;
fetch(url)
    .then(response => response.json())
    .then(data => {
        // 위시에서 item_Id를 가져와서 보여줌
        const items = data.map(item => item.itemId);
        items.forEach(itemId => {
            console.log(itemId);
            if (itemId === 1){            // 위시리스트 아이템 1이 몇개인지 확인
                count+=1;
            }
            console.log(`${count}입니다.`);         // 위시리스트 아이템 1이 몇개인지 세어주는 콘솔
        });
        if (count>0){                              // 1이 있으면 검은색 보여주고
            const heartFillIcon = document.getElementById("heart_bad");
            heartFillIcon.style.display = "table-row";
        }else {
            // 1이 아닌 경우 "heart_good"의 상태로 HTML 보이게끔 처리
            const heartLineIcon = document.getElementById("heart_good");
            heartLineIcon.style.display = "block";
        }
    })
    .catch(error => {
        console.error("조회 중 오류가 발생했습니다:", error);
    });



document.getElementById('heart_good').addEventListener('click', function() {
    var url = `https://rarely-current-dane.ngrok-free.app/wlist/save?user_id=${user_id}&item_id=1`;


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
    var url = `https://rarely-current-dane.ngrok-free.app/wlist/delete?user_id=${user_id}&item_id=1`;


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
    var url = `https://rarely-current-dane.ngrok-free.app/order/save?user_id=${user_id}&item_id=1`;


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
