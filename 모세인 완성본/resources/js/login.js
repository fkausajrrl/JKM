document.getElementById('login').addEventListener('click', function (e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var url = 'http://rarely-current-dane.ngrok-free.app/user/serch?user_id=' + email + '&pw=' + password;

    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            var username = data;

            alert(username);
            if (!(username === "아이디 or 비밀번호 오류")) {
                // 로컬 스토리지에 아이디 저장
                localStorage.setItem('username', username);
                localStorage.setItem('user_id', email);
                // home.html로 이동
                window.location.href = 'home.html';
            }
        })
        .catch(function (error) {
            console.error(error);
        });
});