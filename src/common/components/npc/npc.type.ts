import {INpcPosition} from "./npcPosition/npcPosition.type";
import {INpcImage} from "./npcImage/npcImage.type";

export interface INpc {
    name: string,
    image: INpcImage,
    position: INpcPosition,
    dialog?: {
        id: number
    }
}
