interface ContentSource {
    content: string;
    source: string;
}

interface Images {
    planet: string;
    internal: string;
    geology: string;
}

interface Planet { 
    name: string;
    overview: ContentSource;
    structure: ContentSource;
    geology: ContentSource;
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: Images;
}


type PlanetType = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupyter' | 'saturn' | 'uranus' | 'neptune';

export type {
    ContentSource,
    Planet,
    PlanetType
}