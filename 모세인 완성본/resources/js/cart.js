var user_id = localStorage.getItem('user_id');
var username = localStorage.getItem('username');
var loginButton = document.getElementById('loginButton');

document.getElementById("product1").style.display = "none";
document.getElementById("product2").style.display = "none";
document.getElementById("product3").style.display = "none";
document.getElementById("product4").style.display = "none";

var baseurl = "https://rarely-current-dane.ngrok-free.app";
var url = `${baseurl}/order/list?user_id=${user_id}`;
// var url_d =`${baseurl}/order/delete?user_id=200sein&item_id=1`;

// GET 요청을 보내서 회원의 장바구니 조회
fetch(url)
    .then(response => response.json())
    .then(data => {
      // 장바구니에서 item_Id를 가져와서 alert으로 보여줌
      const items = data.map(item => item.itemId);
      items.forEach(itemId => {
        console.log(itemId);
        switch (itemId) {
          case 1:
            console.log("1번");
            document.getElementById("product1").style.display = "table-row";
            break;
          case 2:
            console.log("2번");
            document.getElementById("product2").style.display = "table-row";
            break;
          case 3:
            console.log("3번");
            document.getElementById("product3").style.display = "table-row";
            break;
          case 4:
            console.log("4번");
            document.getElementById("product4").style.display = "table-row";
            break;
          default:
            break;
        }
      });
    })
    .catch(error => {
      console.error("장바구니 조회 중 오류가 발생했습니다:", error);
    });


// 장바구니 삭제 이벤트 핸들러
function deleteCartItem(itemId) {
  const baseurl = "https://rarely-current-dane.ngrok-free.app";
  const url = `${baseurl}/order/delete?user_id=${user_id}&item_id=${itemId}`;

  // POST 요청 보내기
  fetch(url, {
    method: "POST",
  })
      .then((response) => {
        if (response.ok) {
          console.log("장바구니 삭제 성공");
          location.reload(); // 페이지 새로고침
        } else {
          console.log("장바구니 삭제 실패");
        }
      })
      .catch((error) => {
        console.error("장바구니 삭제 중 오류 발생:", error);
      });
}

