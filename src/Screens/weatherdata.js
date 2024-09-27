import sun from '../assets/sun.png'
import clouds from '../assets/clouds.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import thunder from '../assets/thunder.png'


export const WEATHER_INTERPRATIONS = [
    {
      codes: [0],
      label: "Sunny",
      image: sun,
    },
    {
      codes: [1, 2, 3, 45, 48],
      label: "Cloudy",
      image: clouds,
    },
    {
      codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
      label: "Rainy",
      image: rain
    },
    {
      codes: [71, 73, 75, 77],
      label: "Snowy",
      image: snow
    },
    {
      codes: [95,96, 99],
      label: "Thunderous",
      image:thunder
    },
  ];