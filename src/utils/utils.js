// New function to use hsl instead of rbg.
// This allows passing of color without having to do conversion math first. 7/19/21
export const hslCSS = hsl => {
    let hslInside = `hsl(${hsl}, 100%, 90%)`;
    let hslMiddle = `hsl(${hsl}, 100%, 70%)`;
    let hslOutside = `hsl(${hsl}, 100%, 50%)`;

    const textOutput = document.getElementById('textOutput');
    textOutput.style.color = hslInside;
    textOutput.style.textShadow = 
    `0px 0px 5px ${hslInside}, 
    0px 0px 10px ${hslMiddle}, 
    0px 0px 10px ${hslMiddle}, 
    0px 0px 15px ${hslOutside}, 
    0px 0px 20px ${hslOutside}, 
    0px 0px 30px ${hslOutside}, 
    0px 0px 30px ${hslOutside}, 
    0px 0px 30px ${hslOutside}`;

    const shadowOutput = document.getElementById('shadowOutput');
    shadowOutput.innerHTML = 
    `0px 0px 5px ${hslInside},<br/>
    0px 0px 10px ${hslMiddle},<br/>
    0px 0px 10px ${hslMiddle},<br/>
    0px 0px 15px ${hslOutside},<br/>
    0px 0px 20px ${hslOutside},<br/>
    0px 0px 30px ${hslOutside},<br/>
    0px 0px 30px ${hslOutside},<br/>
    0px 0px 30px ${hslOutside};`;
    
    const colorOutput = document.getElementById('colorOutput');
    colorOutput.innerHTML = `${hslInside};`;
}