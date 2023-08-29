import { FC, useState } from 'react';
import Link from 'next/link';
import { IMaskInput } from 'react-imask';
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { CSSObject } from '@emotion/react';

import { colors, links, typography } from '@scripts/theme';
import { useMedia } from '@scripts/hooks';

import { Values, sendFeedback } from '@api/feedback';

import Button from '@components/common/Button';
import Checkbox from '@components/common/Checkbox';
import { useCommon } from '@context/common';

export interface IFeedbackFormProps {
  css?: CSSObject;
  className?: string;
  onSuccess: () => void;
}

const FeedbackForm: FC<IFeedbackFormProps> = ({ css, className, onSuccess, ...props }) => {
  const { data } = useCommon();
  const { mobile } = useMedia();
  const [error, setError] = useState(false);

  const labelCSS: CSSObject = {
    ...typography.txt,
    paddingBottom: '20px',
    marginBottom: '8px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    '&::focus': {
      outline: 'none',
    },
    '&::focus-visible': {
      outline: colors.cyan,
    },
    'input, textarea': {
      ...typography.txtSm,
      marginTop: '4px',
      padding: '8px 8px 10px',
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
    },
    textarea: {
      minHeight: '109px',
      resize: 'none',
    },
  };

  return (
    <section
      className={className}
      css={{
        ...css,
        backgroundColor: colors.white,
        color: colors.black,
        paddingTop: '48px',
        paddingBottom: '48px',
        span: {
          ...typography.txtExtraSm,
          color: colors.red,
          position: 'absolute',
          bottom: 0,
        },
      }}
      {...props}
    >
      <h2 css={{ ...typography.h5, marginBottom: '8px', lineHeight: '27px', maxWidth: '85%' }}>
        Заполните форму, и мы с Вами свяжемся
      </h2>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          question: '',
          privacy: false,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Обязательное поле'),
          phone: Yup.string()
            .min(12, 'Неверный формат телефонного номера')
            .matches(/[0-9]/g, 'Неверный формат телефонного номера')
            .required('Обязательное поле'),
          email: Yup.string().email('Неверный формат электронной почты').required('Обязательное поле'),
          question: Yup.string().required('Обязательное поле'),
          privacy: Yup.boolean().not([false], 'Обязательное поле'),
        })}
        onSubmit={async (values: Values) => {
          const isSuccess = await sendFeedback(values);
          if (isSuccess) {
            setError(false);
            if (onSuccess) onSuccess();
          } else setError(true);
        }}
      >
        {({ errors, touched, values }) => (
          <Form
            css={{
              marginBottom: '8px',
              position: 'relative',
            }}
          >
            <label css={labelCSS}>
              Ваше имя*
              <Field name="name" type="text" placeholder="Представьтесь, пожалуйста" />
              {errors.name && touched.name ? <span>{errors.name}</span> : null}
            </label>

            <label css={labelCSS}>
              Телефон*
              <Field name="phone" type="phone">
                {({ field }: FieldProps) => (
                  <IMaskInput mask="+000000000000000000000000000" {...field} placeholder="+7 (999) 999-99-99" />
                )}
              </Field>
              {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}
            </label>

            <label css={labelCSS}>
              Email*
              <Field name="email" type="text" placeholder="mail@mail.com" />
              {errors.email && touched.email ? <span>{errors.email}</span> : null}
            </label>

            <label css={labelCSS}>
              Ваш вопрос*
              <Field name="question">{({ field }: FieldProps) => <textarea {...field} />}</Field>
              {errors.question && touched.question ? <span>{errors.question}</span> : null}
            </label>

            <div css={{ position: 'relative', paddingBottom: '20px' }}>
              <Field name="privacy">
                {({ field }: FieldProps) => (
                  <Checkbox
                    {...field}
                    name={field.name}
                    checked={field.value}
                    labelCSS={{ fontSize: '16px', lineHeight: '20px' }}
                  >
                    Настоящим даю согласие на обработку моих персональных данных, указанных в заполненной форме на сайте
                    bbp.ru, в соответствии с{' '}
                    <Link href={`${data.pages.politics}`} passHref>
                      <a css={{ ...links.blue }} target="_blank">
                        Политикой обработки персональных данных
                      </a>
                    </Link>
                  </Checkbox>
                )}
              </Field>
              {errors.privacy && touched.privacy ? <span>{errors.privacy}</span> : null}
            </div>

            <div css={{ position: 'relative', span: { marginBottom: 0, left: 0, right: 0, top: '-11px' } }}>
              {error && <span>При отправлении формы возникла ошибка, попробуйте позже</span>}
              <Button
                type="submit"
                disabled={!values.privacy}
                css={{
                  marginTop: '8px',
                  width: '100%',
                  ...typography.txtBold,
                  ...(error && { [mobile]: { marginTop: '30px' } }),
                }}
              >
                Отправить
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FeedbackForm;
