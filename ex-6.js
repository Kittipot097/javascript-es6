let height = undefined;
let result = checkHight(height);

function checkHight (height) {
    return height ?? "Height is not defined";
}

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
