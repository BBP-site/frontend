import { MEDIA_TYPE } from '@scripts/enums/common/content-card.enum';

export const parseMediaType = (mediaType: MEDIA_TYPE) => {
  switch (mediaType) {
    case MEDIA_TYPE.COMMENT_MEDIA:
      return 'Комментарии в СМИ';
    case MEDIA_TYPE.PUBLICATION:
      return 'Публикации';
    case MEDIA_TYPE.NEWS_EVENT:
      return 'Новости и события';
    case MEDIA_TYPE.PODCAST:
      return 'Подкасты';
    default:
      return 'Все';
  }
};
