import { FC } from 'react';
import Link from 'next/link';
import { IMaskInput } from 'react-imask';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { CSSObject } from '@emotion/react';

import { colors, typography, links } from '@scripts/theme';

import Button from '@components/common/Button';
import Checkbox from '@components/common/Checkbox';

export interface IFeedbackFormProps {
  css?: CSSObject;
  className?: string;
  onSubmit?: () => void;
}

const FeedbackForm: FC<IFeedbackFormProps> = ({ css, className, onSubmit, ...props }) => {
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
      padding: '12px 12px 14px',
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
      <h2 css={{ ...typography.h5, marginBottom: '24px' }}>Заполните форму и мы с Вами свяжемся</h2>
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
            .matches(/^\+7\(\d{3}\) \d{3}(?:-\d{2}){2}$/, 'Неверный формат телефонного номера')
            .required('Обязательное поле'),
          email: Yup.string().email('Неверный формат электронной почты').required('Обязательное поле'),
          question: Yup.string().required('Обязательное поле'),
          privacy: Yup.boolean().not([false], 'Обязательное поле'),
        })}
        onSubmit={() => {
          if (onSubmit) onSubmit();
        }}
      >
        {({ errors, touched, values }) => (
          <Form
            css={{
              marginBottom: '8px',
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
                  <IMaskInput mask="+7(000) 000-00-00" {...field} placeholder="+7 (999) 999-99-99" />
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
                  <Checkbox {...field} name={field.name} checked={field.value}>
                    Настоящим даю согласие на обработку моих персональных данных, указанных в заполненной форме на сайте
                    bbp.ru, в соответствии с{' '}
                    <Link href="/" passHref>
                      <a css={{ ...links.blue }} target="_blank">
                        Политикой обработки персональных данных
                      </a>
                    </Link>
                  </Checkbox>
                )}
              </Field>
              {errors.privacy && touched.privacy ? <span>{errors.privacy}</span> : null}
            </div>
            <Button
              type="submit"
              disabled={!values.privacy}
              css={{ marginTop: '8px', width: '100%', ...typography.txtBold }}
            >
              Отправить
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default FeedbackForm;
