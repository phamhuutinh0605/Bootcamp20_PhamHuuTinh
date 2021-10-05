// Bài 1
/**
 * khối 1:
 * salaryDay (tiền lương mỗi ngày)
 * workDay (số ngày làm việc)
 * salarySum (tổng tiền lương)
 * 
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: Tính Tổng tiền lương
 *salarySum = parseInt(salaryDay) * parseInt(workDay);
 * B3: tiền tip mỗi người
 *
 * 
 * khối 3:
 * 
 */
function salarysum() {
    var salaryDay = document.getElementById("salaryday").value;
    var workDay = document.getElementById("workday").value;
    //  salaryDay * workDay;
    var salarySum = parseInt(salaryDay) * parseInt(workDay);
    // xuất ra cho thẻ p kết quả đã tính 
    document.getElementById("salary").innerHTML = "Tiền Lương Của Bạn Là: " + salarySum + " VNĐ";
}
document.getElementById("btnSum").onclick = salarysum;


/**
 * khối 1:
 * nhập 5 số từ người dùng (num1,num2,num3,num4,num5)
 * tip (phần trăm tip)
 * people (số người)
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: Tính trung bình cộng
 * averageNumber = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)) / 5;

 * 
 * khối 3:
 * xuất ra màn hình trung bình của 5 số
 */
// Bài 2
function numberSum() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;
    var averageNumber = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)) / 5;
    document.getElementById("sumNumber").innerHTML = "Trung Bình 5 Số Là: " + averageNumber;
}
document.getElementById("btnNumber").onclick = numberSum;


/**
 * khối 1:
 * USD ( tiền USD)
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: Chuyển đổi tiền tệ
 * 23000*USD
 * B3:
 * 
 * khối 3:
 * xuất ra số tiền cần chuyển từ USD sang VNĐ
 */
// Bài 3
function changeMoney(){
    var USD=document.getElementById("moneyUSD").value;
    document.getElementById("moneyVND").innerHTML="Thành Tiền Việt Nam: "+ 23000*USD+" VNĐ";
}
document.getElementById("changeMoney").onclick= changeMoney;


/**
 * khối 1:
 * chiều dài (width)
 * chiều rộng (height)
 * chu vi (perimter)
 * diện tích (area)
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: Tính chu vi
 * perimeter=Number(width)*Number(height);
 * 
 * tính diện tích
 * area=(parseInt(width)+parseInt(height))*2;
 * B3: 
 * 
 * khối 3:
 * Xuất ra cho người dùng thấy chu vi và diện tích
 */
// Bài 4
function HCN(){
    var width=document.getElementById("width").value;
    var height=document.getElementById("height").value;
    var perimeter=Number(width)*Number(height);
    var area=(parseInt(width)+parseInt(height))*2;
    document.getElementById("perimeter").innerHTML="Diện Tích HCN là: "+perimeter+" cm";
    document.getElementById("area").innerHTML="Chu Vi HCN là: "+area+" cm";
}
document.getElementById("countbtn").onclick=HCN;


/**
 * khối 1:
 * number (số từ người dùng nhập vào)
 * number1 (phần nguyên của number kí số đầu tiên)
 * number2 (lấy phần dư từ number)
 * sum (tổng hai kí số)
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: tổng hai kí số
 * sum=parseInt(number1)+ parseInt(number2);
 * B3:
 * 
 * khối 3:
 */
// Bài 5
function sumNumber(){
    var number=document.getElementById("numberN").value;
    var number1=Math.floor(number/10);
    var number2=number%10;
    var sum=parseInt(number1)+ parseInt(number2);
    document.getElementById("result").innerHTML="Tổng 2 Kí Số:"+ sum;
}
document.getElementById("sumN").onclick=sumNumber;