const y = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"];

const x = 5;

switch (x) {
  case 0:
    console.log(y[0]); // Thứ Hai
    break;
  case 1:
    console.log(y[1]); // Thứ Ba
    break;
  case 2:
    console.log(y[2]); // Thứ Tư
    break;
  case 3:
    console.log(y[3]); // Thứ Năm
    break;
  case 4:
    console.log(y[4]); // Thứ Sáu
    break;
  case 5:
    console.log(y[5]); // Thứ Bảy
    break;
  case 6:
    console.log(y[6]); // Chủ Nhật
    break;
  default:
    console.log("X không phải là một số từ 0 đến 6");
}
