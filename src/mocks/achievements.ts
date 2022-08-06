import bestURL from '@images/best.webp';
import bestLawyerURL from '@images/rating3.webp';
import globalURL from '@images/global.webp';
import achievementsURL from '@images/achievements.jpg';
import {StaticImageData} from "next/image";

interface IAchievements {
    id: string;
    img: StaticImageData;
}

export const achievements: IAchievements[] = [
    {
        id: '1',
        img: globalURL,
    },
    {
        id: '2',
        img: bestLawyerURL,
    },
    {
        id: '3',
        img: bestURL,
    },
    {
        id: '4',
        img: achievementsURL,
    },
]
