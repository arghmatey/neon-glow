export const colorCSS = hex => {
    let r = 0, g = 0, b = 0;

    if (hex.length === 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];
    } else if (hex.length === 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }

    let rgbInside = "rgb(" + +r + "," + +g + "," + +b + ")";
    let rgbMiddle = "rgb(" + Math.round(+r * .536) + "," + Math.round(+g * .65) + "," + Math.round(+b * .924) + ")";
    let rgbOutside = "rgb(" + Math.round(+r * .48) + "," + Math.round(+g * .68) + "," + Math.round(+b * .966) + ")";

    const textOutput = document.getElementById('textOutput');
    const shadowOutput = document.getElementById('shadowOutput');
    const colorOutput = document.getElementById('colorOutput');
    textOutput.style.color = rgbInside;
    textOutput.style.textShadow = `2px 2px 3px ${rgbInside}, 0px 0px 4px ${rgbMiddle}, 0px 0px 5px ${rgbMiddle}, 0px 0px 6px ${rgbOutside}, 0px 0px 8px ${rgbOutside}, 0px 0px 10px ${rgbOutside}, 0px 0px 20px ${rgbOutside}, 1px 1px 30px ${rgbOutside}`;
    shadowOutput.innerHTML = `2px 2px 3px ${rgbInside},<br/>0px 0px 4px ${rgbMiddle},<br/>0px 0px 5px ${rgbMiddle},<br/>0px 0px 6px ${rgbOutside},<br/>0px 0px 8px ${rgbOutside},<br/>0px 0px 10px ${rgbOutside},<br/>0px 0px 20px ${rgbOutside},<br/>1px 1px 30px ${rgbOutside}`;
    colorOutput.innerHTML = `${rgbInside};`;
}