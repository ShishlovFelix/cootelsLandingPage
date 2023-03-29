export default function myImageLoader({ src, width, quality }) {
  return `https://shishlovfelix.github.io/cootelsLandingPage/${src}?w=${width}&q=${
    quality || 75
  }`;
}
