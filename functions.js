function orange() {
    console.log('i am an orange');
}

// orange();

let red = function() {
    console.log('left on red');
}

//red();

function callbackFunc(func) {
    func();
}

callbackFunc(red);