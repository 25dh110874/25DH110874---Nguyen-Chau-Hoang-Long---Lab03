function capNhatSoTruong() {
    var chuyenNganh = document.getElementById("chuyenNganh").value;
    var soTruongText = document.getElementById("soTruong");

    if (chuyenNganh === "Hệ thống") {
        soTruongText.innerText = "Phân tích & Thiết kế";
    } else if (chuyenNganh === "Phần mềm") {
        soTruongText.innerText = "Lập trình";
    } else if (chuyenNganh === "Mạng máy tính") {
        soTruongText.innerText = "Quản lý mạng";
    } else {
        soTruongText.innerText = "";
    }
}

function dangKy() {
    var maSV = document.getElementById("maSV").value.trim();
    var hoTen = document.getElementById("hoTen").value.trim();
    var tuoi = document.getElementById("tuoi").value.trim();

    var ngoaiNguCheckboxes = document.getElementsByName("ngoaiNgu");
    var danhSachNgoaiNgu = [];
    for (var i = 0; i < ngoaiNguCheckboxes.length; i++) {
        if (ngoaiNguCheckboxes[i].checked) {
            danhSachNgoaiNgu.push(ngoaiNguCheckboxes[i].value);
        }
    }

    var hopLe = true;

    var errMaSV = document.getElementById("errMaSV");
    if (maSV.length !== 10) {
        errMaSV.innerText = "Mã sinh viên gồm 10 ký tự";
        hopLe = false;
    } else {
        errMaSV.innerText = "";
    }

    var errHoTen = document.getElementById("errHoTen");
    if (hoTen === "" || hoTen.length >= 30) {
        errHoTen.innerText = "Họ tên không rỗng và < 30 ký tự";
        hopLe = false;
    } else {
        errHoTen.innerText = "";
    }

    var errTuoi = document.getElementById("errTuoi");
    var tuoiSo = parseInt(tuoi, 10);
    if (isNaN(tuoiSo) || tuoiSo < 18) {
        errTuoi.innerText = "Tuổi phải 18 trở lên";
        hopLe = false;
    } else {
        errTuoi.innerText = "";
    }

    var txtNgoaiNgu = document.getElementById("txtNgoaiNgu");
    if (danhSachNgoaiNgu.length > 0) {
        txtNgoaiNgu.innerText = danhSachNgoaiNgu.join(" và ");
    } else {
        txtNgoaiNgu.innerText = "";
    }

    var msgKetQua = document.getElementById("msgKetQua");
    if (hopLe) {
        msgKetQua.innerText = "Bạn đã đăng ký thành công";
        msgKetQua.style.color = "green";
    } else {
        msgKetQua.innerText = "Bạn phải nhập lại cho đúng";
        msgKetQua.style.color = "blue";
    }

    return hopLe;
}
