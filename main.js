// Bài 1
function salarysum() {
    var salaryDay = document.getElementById("salaryday").value;
    var workDay = document.getElementById("workday").value;
    //  salaryDay * workDay;
    var salarySum = parseInt(salaryDay) * parseInt(workDay);
    // xuất ra cho thẻ p kết quả đã tính 
    document.getElementById("salary").innerHTML = "Tiền Lương Của Bạn Là: " + salarySum + " VNĐ";
}
document.getElementById("btnSum").onclick = salarysum;

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

// Bài 3
function changeMoney(){
    var USD=document.getElementById("moneyUSD").value;
    document.getElementById("moneyVND").innerHTML="Thành Tiền Việt Nam: "+ 23000*USD+" VNĐ";
}
document.getElementById("changeMoney").onclick= changeMoney;

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

// Bài 5
function sumNumber(){
    var number=document.getElementById("numberN").value;
    var number1=Math.floor(number/10);
    var number2=number%10;
    var sum=parseInt(number1)+ parseInt(number2);
    document.getElementById("result").innerHTML="Tổng 2 Kí Số:"+ sum;
}
document.getElementById("sumN").onclick=sumNumber;