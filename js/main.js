function layLoaiXe() {
    let grabCar = document.getElementById('grabCar').checked;
    let grabSUV = document.getElementById('grabSUV').checked;
    let grabBlack = document.getElementById('grabBlack').checked;
    let ketQua = '';
    if (grabCar) {
        ketQua = 'Car';
    } else if (grabSUV) {
        ketQua = 'SUV';
    } else if (grabBlack) {
        ketQua = 'Black';
    }
    return ketQua;
}

function getElement(element) {
    return document.getElementById(element);
}

function kiemTraNhapSoKM() {
    let field = getElement('txtSoKM').value;;
    let thongBao = getElement('loiSoKM');
    let regex = '^[0-9]+$'
    if (field.match(regex)) {
        thongBao.innerHTML = ''
    } else {
        thongBao.innerHTML = 'Vui lòng nhập số'
        thanhTien.style.display = 'none';
    }
}

function kiemTraNhapThoiGian() {
    let field = getElement('txtThoiGianCho').value;;
    let thongBao = getElement('loiTG');
    let regex = '^[0-9]+$'
    if (field.match(regex)) {
        thongBao.innerHTML = ''
    } else {
        thongBao.innerHTML = 'Vui lòng nhập số'
        thanhTien.style.display = 'none';
    }
}

function tinhTienTungLoaiXe(thamSo1, thamSo2, thamSo3, thamSo4) {
    let laySoKM = getElement('txtSoKM').value;
    let thoiGianCho = getElement('txtThoiGianCho').value;
    let xuatTien = getElement('xuatTien');
    if (laySoKM <= 1 && thoiGianCho <= 3) {
        xuatTien.value = laySoKM * thamSo1
    } else if (laySoKM <= 1 && thoiGianCho > 3) {
        xuatTien.value = laySoKM * thamSo1 + (thoiGianCho - 3) * thamSo4
    } else if (laySoKM > 1 && laySoKM <= 19 && thoiGianCho <= 3) {
        xuatTien.value = 1 * thamSo1 + (laySoKM - 1) * thamSo2
    } else if (laySoKM > 1 && laySoKM <= 19 && thoiGianCho > 3) {
        xuatTien.value = 1 * thamSo1 + (laySoKM - 1) * thamSo2 + (thoiGianCho - 3) * thamSo4
    } else if (laySoKM > 19 && thoiGianCho <= 3) {
        xuatTien.value = 1 * thamSo1 + 18 * thamSo2 + (laySoKM - 19) * thamSo3
    } else if (laySoKM > 19 && thoiGianCho > 3) {
        xuatTien.value = 1 * thamSo1 + 18 * thamSo2 + (laySoKM - 19) * thamSo3 + (thoiGianCho - 3) * thamSo4
    }
}

function TinhTien() {

    if (getElement('txtSoKM').value == '' || getElement('txtThoiGianCho').value == '') {
        alert('Vui lòng điền đầy đủ thông tin')
    } else {
        let regex = '^[0-9]+$'
        let laySoKM = document.getElementById('txtSoKM').value;
        let thoiGianCho = document.getElementById('txtThoiGianCho').value;
        kiemTraNhapSoKM()
        kiemTraNhapThoiGian()
        let thanhTien = document.getElementById('divThanhTien');
        thanhTien.style.display = 'block';
        // let xuatTien = document.getElementById('xuatTien');

        let loaiXe = layLoaiXe();
        switch (loaiXe) {
            case 'Car':
                tinhTienTungLoaiXe(8000, 7500, 7000, 2000)
                break;
            case 'SUV':
                tinhTienTungLoaiXe(9000, 8500, 8000, 3000)
                break;
            case 'Black':
                tinhTienTungLoaiXe(10000, 9500, 9000, 3500)
                break;
            default:
                alert('Vui long chon loai xe can di')
                thanhTien.style.display = 'none';
        }
    }
    xuatTien.innerHTML = xuatTien.value;
}

function TungDong(thamSo1, thamSo2, thamSo3, thamSo4, thamSo5) {
    getElement(thamSo1).innerHTML = thamSo4
    getElement(thamSo2).innerHTML = thamSo5
    getElement(thamSo3).innerHTML = thamSo4 * thamSo5
}

function DongThoiGianCho(thamSo1, thoiGianCho) {
    getElement('dong4_1').innerHTML = thoiGianCho
    getElement('dong4_2').innerHTML = thamSo1
    getElement('dong4_3').innerHTML = (thoiGianCho - 3) * thamSo1
}

function Sum() {
    let ele = document.getElementsByClassName('tong')
    sum = 0
    for (let i = 0; i < ele.length; i++) {
        sum += parseInt(ele[i].innerHTML)
    }
    getElement('Tien').innerHTML = sum
}

function XuatHoaDon() {
    if (getElement('xuatTien').innerHTML == '') {
        alert('Vui lòng thanh toán trước')
    } else {
        if (getElement('txtSoKM').value == '' || getElement('txtThoiGianCho').value == '') {
            alert('Vui lòng điền đầy đủ thông tin')
        } else {
            let loaiXe = layLoaiXe();
            laySoKM = getElement('txtSoKM').value;
            thoiGianCho = getElement('txtThoiGianCho').value;
            switch (loaiXe) {
                case 'Car':
                    if (laySoKM <= 1 && thoiGianCho <= 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', laySoKM, 8000)
                        Sum()
                    } else if (laySoKM <= 1 && thoiGianCho > 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', laySoKM, 8000)
                        DongThoiGianCho(2000, thoiGianCho)
                        Sum()
                    } else if (laySoKM > 1 && laySoKM <= 19 && thoiGianCho <= 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', 1, 8000)
                        TungDong('dong2_1', 'dong2_2', 'dong2_3', laySoKM - 1, 7500)
                        Sum()
                    } else if (laySoKM > 1 && laySoKM <= 19 && thoiGianCho > 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', 1, 8000)
                        TungDong('dong2_1', 'dong2_2', 'dong2_3', laySoKM - 1, 7500)
                        DongThoiGianCho(2000, thoiGianCho)
                        Sum()
                    } else if (laySoKM > 19 && thoiGianCho <= 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', 1, 8000)
                        TungDong('dong2_1', 'dong2_2', 'dong2_3', 18, 7500)
                        TungDong('dong3_1', 'dong3_2', 'dong3_3', laySoKM - 19, 7000)
                        Sum()
                    } else if (laySoKM > 19 && thoiGianCho > 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', 1, 8000)
                        TungDong('dong2_1', 'dong2_2', 'dong2_3', 18, 7500)
                        TungDong('dong3_1', 'dong3_2', 'dong3_3', laySoKM - 19, 7000)
                        DongThoiGianCho(2000, thoiGianCho)
                        Sum()
                    }
                    break;
                case 'SUV':
                    if (laySoKM <= 1 && thoiGianCho <= 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', laySoKM, 9000)
                        Sum()
                    } else if (laySoKM <= 1 && thoiGianCho > 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', laySoKM, 9000)
                        DongThoiGianCho(3000, thoiGianCho)
                        Sum()
                    } else if (laySoKM > 1 && laySoKM <= 19 && thoiGianCho <= 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', 1, 9000)
                        TungDong('dong2_1', 'dong2_2', 'dong2_3', laySoKM - 1, 8500)
                        Sum()
                    } else if (laySoKM > 1 && laySoKM <= 19 && thoiGianCho > 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', 1, 9000)
                        TungDong('dong2_1', 'dong2_2', 'dong2_3', laySoKM - 1, 8500)
                        DongThoiGianCho(3000, thoiGianCho)
                        Sum()
                    } else if (laySoKM > 19 && thoiGianCho <= 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', 1, 9000)
                        TungDong('dong2_1', 'dong2_2', 'dong2_3', 18, 8500)
                        TungDong('dong3_1', 'dong3_2', 'dong3_3', laySoKM - 19, 8000)
                        Sum()
                    } else if (laySoKM > 19 && thoiGianCho > 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', 1, 9000)
                        TungDong('dong2_1', 'dong2_2', 'dong2_3', 18, 8500)
                        TungDong('dong3_1', 'dong3_2', 'dong3_3', laySoKM - 19, 8000)
                        DongThoiGianCho(3000, thoiGianCho)
                        Sum()
                    }
                    break;
                case 'Black':
                    if (laySoKM <= 1 && thoiGianCho <= 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', laySoKM, 10000)
                        Sum()
                    } else if (laySoKM <= 1 && thoiGianCho > 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', laySoKM, 10000)
                        DongThoiGianCho(3500, thoiGianCho)
                        Sum()
                    } else if (laySoKM > 1 && laySoKM <= 19 && thoiGianCho <= 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', 1, 10000)
                        TungDong('dong2_1', 'dong2_2', 'dong2_3', laySoKM - 1, 9500)
                        Sum()
                    } else if (laySoKM > 1 && laySoKM <= 19 && thoiGianCho > 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', 1, 10000)
                        TungDong('dong2_1', 'dong2_2', 'dong2_3', laySoKM - 1, 9500)
                        DongThoiGianCho(3500, thoiGianCho)
                        Sum()
                    } else if (laySoKM > 19 && thoiGianCho <= 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', 1, 10000)
                        TungDong('dong2_1', 'dong2_2', 'dong2_3', 18, 9500)
                        TungDong('dong3_1', 'dong3_2', 'dong3_3', laySoKM - 19, 9000)
                        Sum()
                    } else if (laySoKM > 19 && thoiGianCho > 3) {
                        TungDong('dong1_1', 'dong1_2', 'dong1_3', 1, 10000)
                        TungDong('dong2_1', 'dong2_2', 'dong2_3', 18, 9500)
                        TungDong('dong3_1', 'dong3_2', 'dong3_3', laySoKM - 19, 9000)
                        DongThoiGianCho(3500, thoiGianCho)
                        Sum()
                    }
                    break;
            }

        }
    }

}