let demoArray = [];

function createArray() {
    demoArray = addNumberArray(demoArray);
    document.getElementById('input-array').innerHTML = "Mảng được tạo là: " +
        "[" + demoArray.join(", ") + "]";
    document.getElementById('result').innerHTML = "";
}

function startFunc() {
    demoArray = reverseArray(demoArray);
    document.getElementById('result').innerHTML = "Mảng sau khi đảo ngược là: " +
        "[" + demoArray.join(", ") + "]";
    demoArray = [];
}

function addNumberArray(array) {
    let index = 1;
    let input = 0;
    while (input !== null) {
        input = prompt("Nhập vào số thứ: " + index + " của mảng. Nhấn cancel để lưu lại mảng");
        if (isNaN(input)) {
            alert("Số không hợp lệ do dữ liệu nhập vào là ký tự. Vui lòng nhập lại.");
        } else if (input === "") {
            alert("Trường không được để trống, vui lòng nhập số vào")
        } else {
            array.push(input);
            index++;
        }
    }
    array.pop();
    return array;
}

function reverseArray(array) {
    let first = 0;
    let last = array.length - 1;
    while (first < last) {
        let b = array[first];
        array[first] = array[last];
        array[last] = b;
        first++;
        last--;
    }
    return array;
}