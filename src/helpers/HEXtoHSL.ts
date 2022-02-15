const HEXtoHSL = (
  hexColor: string
): {
  hue: number;
  saturation: number;
  lightness: number;
} => {
  const HEXtoRGB = (color: string) => {
    if (color) {
      color = color.replaceAll('#', '');
      const HEX: {
        red: number;
        green: number;
        blue: number;
      } = {
        red: parseInt(color.substring(0, 2), 16),
        green: parseInt(color.substring(2, 4), 16),
        blue: parseInt(color.substring(4, 6), 16),
      };

      return HEX;
    } else
      return {
        red: 0,
        green: 0,
        blue: 0,
      };
  };

  const RGB = HEXtoRGB(hexColor);

  RGB.red /= 255;
  RGB.green /= 255;
  RGB.blue /= 255;

  const minBetweenColors = Math.min(RGB.red, RGB.green, RGB.blue);
  const maxBetweenColors = Math.max(RGB.red, RGB.green, RGB.blue);
  const differenceBetweenValues = maxBetweenColors - minBetweenColors;
  const HSL = {
    hue: 0,
    saturation: 0,
    lightness: 0,
  };
  // some checks to assign value to hue
  if (differenceBetweenValues === 0) {
    HSL.hue = 0;
  } else if (maxBetweenColors === RGB.red) {
    HSL.hue = ((RGB.green - RGB.blue) / differenceBetweenValues) % 6;
  } else if (maxBetweenColors === 0) {
    HSL.hue = (RGB.blue - RGB.red) / differenceBetweenValues + 2;
  } else {
    HSL.hue = (RGB.red - RGB.green) / differenceBetweenValues + 4;
  }
  HSL.hue = Math.round(HSL.hue * 60);
  if (HSL.hue < 0) {
    HSL.hue += 360;
  }
  // calc of lightness
  HSL.lightness = (maxBetweenColors + minBetweenColors) / 2;
  HSL.saturation = //calc of saturation
    differenceBetweenValues === 0
      ? 0
      : differenceBetweenValues / (1 - Math.abs(2 * HSL.lightness - 1));
  // ending of conversion to hsl
  HSL.saturation = +(HSL.saturation * 100).toFixed(1);
  HSL.lightness = +(HSL.lightness * 100).toFixed(1);
  HSL.hue = HSL.hue === 239 ? 179 : HSL.hue;
  return HSL;
};

export default HEXtoHSL;
