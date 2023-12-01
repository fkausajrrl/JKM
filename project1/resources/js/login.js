document.getElementById('login').addEventListener('click', function(e) {
    e.preventDefault(); // 버튼의 기본 동작인 폼 제출을 막습니다.

    // 입력된 이메일과 비밀번호 값을 가져옵니다.
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // GET 요청을 보낼 URL을 생성합니다.
    var url = 'http://rarely-current-dane.ngrok-free.app/user/serch?user_id=' + email + '&pw=' + password;

    // fetch를 사용하여 GET 요청을 보냅니다.
    fetch(url)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            // 응답 데이터를 처리합니다.
            var username = data; // 회원 이름을 가져온다고 가정합니다.

            // 회원 이름을 출력하거나 필요한 작업을 수행합니다.
            console.log(username);
            alert(username);
            if(!(username==="아이디 or 비밀번호 오류")) {
                window.location.href = 'home.html';
            }
        })
        .catch(function(error) {
            // 에러 처리를 합니다.
            console.error(error);
        });
});