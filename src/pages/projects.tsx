import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

import Select from '@components/common/Select';
import withConfigContentCard from '@components/hoc-helpers/withConfigContentCard';
import ContentCard from '@components/common/ContentCard';
import PageTitle from '@components/PageTitle';

import { colors, pageWrap, typography } from '@scripts/theme';
import { useDebounce, useMedia } from '@scripts/hooks';
import { CARD_TYPE, PROJECT_INDUSTRY } from '@scripts/enums/common/content-card.enum';

import { projects } from '@mocks/projects';

import { ReactComponent as SearchIcon } from '@icons/search.svg';

const parseIndustry = (industry: PROJECT_INDUSTRY) => {
  switch (industry) {
    case PROJECT_INDUSTRY.FAMILY:
      return 'Семейное право';
    case PROJECT_INDUSTRY.HERITAGE:
      return 'Наследственное право';
    case PROJECT_INDUSTRY.HOUSING:
      return 'Жилищное право';
    case PROJECT_INDUSTRY.CIVIL:
      return 'Гражданское право';
    case PROJECT_INDUSTRY.CORPORATE:
      return 'Корпоративное право';
    case PROJECT_INDUSTRY.CRIMINAL:
      return 'Уголовное право';
    case PROJECT_INDUSTRY.BANKRUPTCY:
      return 'Банкротство';
    case PROJECT_INDUSTRY.ARBITRATION:
      return 'Арбитражная практика';
    default:
      return '';
  }
};

const Projects = () => {
  const { asPath } = useRouter();
  const { tabletLg, tablet, mobileLg } = useMedia();
  const [curAnchor, setCurAnchor] = useState<string | null>();

  useEffect(() => setCurAnchor(asPath.split('#')[1]), [asPath]);

  const industries = Array.from(new Set(projects.map(project => project.industry)))
    .map(industry => ({
      label: parseIndustry(industry),
      value: industry,
    }))
    .sort((a, b) => {
      if (a.label > b.label) return 1;
      if (a.label < b.label) return -1;
      return 0;
    });
  const [filterSearch, setFilterSearch] = useState('');
  const debouncedSearch = useDebounce<string>(filterSearch, 500);
  const [filterIndustry, setFilterIndustry] = useState<PROJECT_INDUSTRY | null>(null);
  const projectCards = useMemo(
    () =>
      projects
        .filter(
          project =>
            (filterIndustry === null && debouncedSearch.length < 3) ||
            (debouncedSearch.length > 3 &&
              new RegExp(debouncedSearch).test(project.header) &&
              project.industry === filterIndustry) ||
            (project.industry === filterIndustry && debouncedSearch.length < 3) ||
            (!filterIndustry && debouncedSearch.length > 3 && new RegExp(debouncedSearch).test(project.header))
        )
        .map(project =>
          withConfigContentCard(
            ContentCard,
            {
              ...project,
              title: parseIndustry(project.industry),
              contentCSS: {
                color: colors.gray700,
              },
            },
            CARD_TYPE.PROJECTS,
            project.id === curAnchor,
            project.header
          )
        ),
    [curAnchor, debouncedSearch, filterIndustry]
  );

  return (
    <main
      css={{
        height: '100%',
        backgroundColor: colors.gray100,
        width: '100%',
      }}
    >
      <PageTitle title="Проекты" css={{ marginBottom: '24px' }}>
        <p>В этом разделе собраны наиболее интересные и показательные дела адвокатов нашей Коллегии</p>
      </PageTitle>
      <div css={{ ...pageWrap }}>
        <section
          css={{
            padding: '32px 40px',
            marginBottom: '24px',
            backgroundColor: colors.white,
            display: 'flex',
            borderRadius: '8px',
            [tablet]: {
              flexDirection: 'column',
            },
            [mobileLg]: { padding: '32px 16px' },
          }}
        >
          <div
            css={{
              flexGrow: 1,
              marginRight: '32px',
              position: 'relative',
              [tablet]: { marginRight: 0, marginBottom: '32px' },
            }}
          >
            <input
              css={{
                ...typography.txt,
                width: '100%',
                height: '49px',
                padding: '12px 46px 12px 12px',
                borderRadius: '4px',
                border: `1px solid ${colors.gray300}`,
                '&::placeholder': {
                  color: colors.gray500,
                },
                '&::focus': {
                  outline: 'none',
                },
                '&::focus-visible': {
                  outline: colors.cyan,
                },
              }}
              type="text"
              placeholder="Поиск по названию"
              onChange={event => {
                setFilterSearch(event.target.value);
              }}
            />
            <SearchIcon css={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-56%)' }} />
          </div>
          <div css={{ minWidth: '378px', [tablet]: { minWidth: 'auto' } }}>
            <Select
              placeholder="Выберите отрасль"
              onChange={value => setFilterIndustry(value as PROJECT_INDUSTRY)}
              items={industries}
            />
          </div>
        </section>
        {projectCards.map((card, index) => (
          <div
            key={projects[index].id}
            id={projects[index].id}
            css={{
              marginBottom: '24px',
              paddingTop: '150px',
              marginTop: '-150px',
              [tabletLg]: { paddingTop: '126px', marginTop: '-126px' },
            }}
          >
            {card()}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
