function inchtocm([inchValue]) {
    let inch = parseFloat(inchValue);
    let cm = inch * 2.54;
    console.log(cm + " centimeters");
}
inchtocm("4.9");