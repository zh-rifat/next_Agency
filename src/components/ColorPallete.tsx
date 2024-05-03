import React from 'react'

type Props = {
  hexColor:string;
  title:string;

}

const ColorPallete = ({hexColor,title}: Props) => {
  function hexToHSL(hex:string) {
    var r = parseInt(hex.substring(1, 3), 16) / 255;
    var g = parseInt(hex.substring(3, 5), 16) / 255;
    var b = parseInt(hex.substring(5, 7), 16) / 255;

    // Find greatest and smallest channel values
    var cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    if (delta === 0)
        h = 0;
    else if (cmax === r)
        h = ((g - b) / delta) % 6;
    else if (cmax === g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive
    if (h < 0) h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply s and l by 100 to get percentage values
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return  h + " " + s + "% " + l + "%";
}
  return (
    <div className='flex flex-row space-x-3 items-center'>
      <div className={`h-3 w-5 bg-[${hexColor}]`} style={{background:hexColor}}></div>
      <span>--{title}: </span>
      <span>{hexToHSL(hexColor)};</span>
      {/* <span>{hexColor}</span> */}
    </div>
  )
}

export default ColorPallete
