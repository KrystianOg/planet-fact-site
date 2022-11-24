import PlanetMercury from '../assets/planet-mercury.svg';
import PlanetVenus from '../assets/planet-venus.svg';
import PlanetEarth from '../assets/planet-earth.svg';
import PlanetMars from '../assets/planet-mars.svg';
import PlanetJupiter from '../assets/planet-jupiter.svg';
import PlanetSaturn from '../assets/planet-saturn.svg';
import PlanetUranus from '../assets/planet-uranus.svg';
import PlanetNeptune from '../assets/planet-neptune.svg';

const planetMap = new Map<string, string>([
    ['mercury', PlanetMercury],
    ['venus', PlanetVenus],
    ['earth', PlanetEarth],
    ['mars', PlanetMars],
    ['jupiter', PlanetJupiter],
    ['saturn', PlanetSaturn],
    ['uranus', PlanetUranus],
    ['neptune', PlanetNeptune]
])

export const imageSelector = (path: string): string => {
    return planetMap.get(path.toLowerCase()) || '';
}