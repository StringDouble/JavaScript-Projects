function circleArea ([arg1]) {
    let r = parseFloat(arg1);
    let area = Math.PI * r * r;
    let p = 2 * Math.PI * r;
    console.log("Area = " + area);
    console.log("Perimeter = " + p);
}

circleArea("3");