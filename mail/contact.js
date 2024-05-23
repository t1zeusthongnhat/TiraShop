// Bắt sự kiện submit của form
$("#contactForm").submit(function(event) {
    event.preventDefault(); // Ngăn chặn việc submit form mặc định

    // Kiểm tra xem form có hợp lệ không
    if (validateForm()) {
        // Nếu form hợp lệ, hiển thị thông báo thành công
        $("#successMessage").show();
        // Hoặc có thể gửi form thông qua Ajax hoặc xử lý yêu cầu theo cách của bạn ở đây...
        // Sau đó reset form
        resetForm();
    } else {
        // Nếu form không hợp lệ, không làm gì cả hoặc có thể hiển thị thông báo lỗi
        alert("Please fill in all required fields.");
    }
});

// Hàm validateForm để kiểm tra xem các trường đã được điền đủ chưa
function validateForm() {
    var isValid = true;
    // Duyệt qua các trường input trong form
    $("#contactForm input, #contactForm textarea").each(function() {
        if ($(this).prop("required") && $(this).val() === "") {
            isValid = false;
            return false; // Dừng vòng lặp khi gặp trường không hợp lệ đầu tiên
        }
    });
    return isValid;
}

// Hàm resetForm để reset các trường trong form sau khi gửi thành công
function resetForm() {
    $("#contactForm")[0].reset(); // Sử dụng [0] để lấy ra DOM element từ jQuery object
}
