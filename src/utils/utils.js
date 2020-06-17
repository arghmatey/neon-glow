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
    let rgbMiddle = "rgb(" + +r * .536 + "," + +g * .65 + "," + +b * .924 + ")";
    let rgbOutside = "rgb(" + +r * .48 + "," + +g * .68 + "," + +b * .966 + ")";

    const textOutput = document.getElementById('textOutput');
    textOutput.style.color = rgbInside;
    textOutput.style.textShadow = `2px 2px 3px ${rgbInside}, 0px 0px 4px ${rgbMiddle}, 0px 0px 5px ${rgbMiddle}, 0px 0px 6px ${rgbOutside}, 0px 0px 8px ${rgbOutside}, 0px 0px 10px ${rgbOutside}, 0px 0px 20px ${rgbOutside}, 1px 1px 30px ${rgbOutside}`;
}