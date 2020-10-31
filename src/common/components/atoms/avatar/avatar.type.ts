interface AvatarInterface {
    name: string,
    img: {
        src: string,
        alt?: string
    },
    background?: any,
    animation?: any
}

export type {AvatarInterface};
