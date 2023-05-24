import Button from '@components/common/Button';
import { colors, pageWrap, typography } from '@scripts/theme';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Page404 = () => {
  const { t } = useTranslation();
  const { push } = useRouter();

  return (
    <main
      css={{
        ...pageWrap,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '24px',
        marginBottom: '24px',
      }}
    >
      <p css={{ color: colors.black, fontSize: '175px', lineHeight: '210px', fontWeight: 700, marginBottom: 0 }}>404</p>
      <p css={{ ...typography.txt, color: colors.black, paddingBottom: '24px' }}>
        {t('Страница, которую вы запрашиваете, не существует.')}
      </p>
      <Button onClick={() => push('/')}>{t('Перейти на главную')}</Button>
    </main>
  );
};

export default Page404;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
