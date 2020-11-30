export interface ICharacter {
    name: string,
    mesh: {
        scale: [x: number, y: number, z: number];
        position: [x: number, y: number, z: number];
        image: {
            url: string
        };
    },
    dialog?: {
        id: number
    }
}
