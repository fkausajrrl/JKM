$(document).ready(function() {
    $("#new-customer-form").on("submit", function(event) {
        event.preventDefault();

        var user_id = $("#user_id").val();
        var title = $("#title").val();
        var contents = $("#contents").val();
        var c_date = $("#c_date").val();

        var customerDto = {
            user_id: user_id,
            title: title,
            contents: contents,
            c_date: c_date
        };

        $.ajax({
            url: 'https://localhost:8080/customer/new', //https://rarely-current-dane.ngrok-free.app/customer/new
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(customerDto),
            success: function(response) {
                alert('게시글이 성공적으로 등록되었습니다.');
            },
            error: function(request, status, error) {
                alert('게시글 등록 중 오류가 발생했습니다. 다시 시도해주세요.');
            }
        });
    });
});
