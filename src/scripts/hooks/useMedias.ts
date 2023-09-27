import { useMemo } from 'react';
import { IContentMedia } from '@components/hoc-helpers/withConfigContentCard';
import { medias as mediaMocks } from '@mocks/index';
import { MEDIA_TYPE } from '@scripts/enums/common';

const compareAB = (mediaA: IContentMedia, mediaB: IContentMedia) => {
  const mediaADaysArr = [...mediaA.date.split('.')];
  const mediaBDaysArr = [...mediaB.date.split('.')];

  const dateA = new Date(+`20${mediaADaysArr[2]}`, +mediaADaysArr[1], +mediaADaysArr[0]);
  const dateB = new Date(+`20${mediaBDaysArr[2]}`, +mediaBDaysArr[1], +mediaBDaysArr[0]);

  let index = 0;

  if (dateA < dateB) index = 1;
  else if (dateA > dateB) index = -1;
  return index;
};

export const useMedias = () => {
  const medias = [...mediaMocks].sort(compareAB);
  const mediaTypes = [MEDIA_TYPE.ALL, ...new Set(mediaMocks.map(media => media.type))].sort();
  const years = useMemo(
    () => [
      'all',
      ...new Set(
        mediaMocks
          .map(media => `${media.date.substring(6, 8)}`)
          .sort()
          .reverse()
      ),
    ],
    []
  );
  return useMemo(() => ({ medias, mediaTypes, years }), [medias, mediaTypes, years]);
};
