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

export const parseMediaTypeQuery = (mediaType: MEDIA_TYPE) => {
  switch (mediaType) {
    case MEDIA_TYPE.COMMENT_MEDIA:
      return 'comment_media';
    case MEDIA_TYPE.PUBLICATION:
      return 'publication';
    case MEDIA_TYPE.NEWS_EVENT:
      return 'news_event';
    case MEDIA_TYPE.PODCAST:
      return 'podcast';
    default:
      return 'all';
  }
};

export const parseMediaTypeQueryReverse = (mediaType: string) => {
  switch (mediaType) {
    case 'comment_media':
      return MEDIA_TYPE.COMMENT_MEDIA;
    case 'publication':
      return MEDIA_TYPE.PUBLICATION;
    case 'news_event':
      return MEDIA_TYPE.NEWS_EVENT;
    case 'podcast':
      return MEDIA_TYPE.PODCAST;
    default:
      return MEDIA_TYPE.ALL;
  }
};
