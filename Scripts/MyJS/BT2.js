function validateRequired(inputId, errorMessage) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById('error-' + inputId);

    if (inputElement.value.trim() === "") {
        errorElement.innerText = errorMessage;
        return false;
    } else {
        errorElement.innerText = "";
        return true;
    }
}

function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const errorPhone = document.getElementById('error-phone');
    const phoneValue = phoneInput.value.trim();

    if (phoneValue === "") {
        errorPhone.innerText = "Số điện thoại không được để trống";
        return false;
    }

    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(phoneValue)) {
        errorPhone.innerText = "Số điện thoại phải từ 10 ký số trở lên";
        return false;
    } else {
        errorPhone.innerText = "";
        return true;
    }
}

function selectAddressType(type) {
    if (type === "Văn phòng") {
        alert("Bạn chọn giao hàng tại văn phòng");
    } else if (type === "Nhà riêng") {
        alert("Bạn chọn giao hàng tại nhà riêng");
    }
}

function handleSave(event) {
    event.preventDefault();

    const isNameValid = validateRequired('name', 'Tên không được để trống');
    const isAddressValid = validateRequired('address', 'Địa chỉ không được để trống');
    const isPhoneValid = validatePhone();
    const isProvinceValid = validateRequired('province', 'Tỉnh/Thành phố không được để trống');
    const isDistrictValid = validateRequired('district', 'Quận/Huyện không được để trống');
    const isWardValid = validateRequired('ward', 'Phường/Xã không được để trống');

    if (!isNameValid || !isAddressValid || !isPhoneValid || !isProvinceValid || !isDistrictValid || !isWardValid) {
        alert("Thông tin nhập không hợp lệ");
        return false;
    }

    alert("Lưu thông tin thành công");
    return true;
}