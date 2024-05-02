function appendToResult(value) {
    document.getElementById('result').value += value;
}

function csquare() {
    var currentResult = document.getElementById('result').value;
    var squaredNumber = Math.pow(parseFloat(currentResult), 2);
    document.getElementById('result').value = squaredNumber;
}

function deleteCharacter() {
    var currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}