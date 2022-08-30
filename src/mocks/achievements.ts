import {StaticImageData} from "next/image";
import globalURL from '@images/global.webp';
import rating1URL from "@images/rating1.webp";
import rating2URL from "@images/rating2.webp";
import rating3URL from "@images/rating3.webp";

interface IAchievements {
    id: string;
    img: StaticImageData;
    width?: string;
    height?: string;
    isHaveSize?: boolean;
}

export const achievements: IAchievements[] = [
    {
        id: '1',
        img: rating1URL,
        width: '140px',
        height: '100px',
        isHaveSize: true,
    },
    {
        id: '2',
        img: rating2URL,
    },
    {
        id: '3',
        img: rating3URL,
    },
    {
        id: '4',
        img: globalURL,
    },
]
