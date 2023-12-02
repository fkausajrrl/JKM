var user_id = localStorage.getItem('user_id');

document.getElementById("product1").style.display = "none";
document.getElementById("product2").style.display = "none";
document.getElementById("product3").style.display = "none";
document.getElementById("product4").style.display = "none";


const baseurl = "https://rarely-current-dane.ngrok-free.app";
var url =`${baseurl}/wlist/list?user_id=${user_id}`;


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
        console.error("조회 중 오류가 발생했습니다:", error);
    });

//function redirectToProductDetail(a) {
//    window.location.href = `../../html/product_detail${a}.html`;
//}