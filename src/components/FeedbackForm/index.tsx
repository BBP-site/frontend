import { FC } from 'react';
import { IMaskInput } from 'react-imask';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { CSSObject } from '@emotion/react';

import { pageWrap, colors, typography, links } from '@scripts/theme';

import Button from '@components/common/Button';

export interface IFeedbackFormProps {
  css?: CSSObject;
  onSubmit?: () => void;
}

const FeedbackForm: FC<IFeedbackFormProps> = ({ css, onSubmit, ...props }) => (
  <section
    css={{
      ...pageWrap,
      backgroundColor: colors.white,
      color: colors.black,
      paddingTop: '48px',
      paddingBottom: '48px',
      ...css,
    }}
    {...props}
  >
    <h2 css={{ ...typography.h5, marginBottom: '24px' }}>Обратная связь</h2>
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        question: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Обязательное поле'),
        phone: Yup.string()
          .matches(/^\+7\(\d{3}\) \d{3}(?:-\d{2}){2}$/, 'Неверный формат телефонного номера')
          .required('Обязательное поле'),
        email: Yup.string().email('Неверный формат электронной почты').required('Обязательное поле'),
        question: Yup.string().required('Обязательное поле'),
      })}
      onSubmit={() => {
        if (onSubmit) onSubmit();
      }}
    >
      {({ errors, touched }) => (
        <Form
          css={{
            marginBottom: '8px',
            label: {
              ...typography.txt,
              marginBottom: '16px',
              display: 'flex',
              flexDirection: 'column',
              '&::focus': {
                outline: 'none',
              },
              '&::focus-visible': {
                outline: colors.cyan,
              },
              span: {
                ...typography.txtExtraSm,
                color: colors.red,
              },
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
          }}
        >
          <label>
            ФИО
            <Field name="name" type="text" placeholder="Представьтесь, пожалуйста" />
            {errors.name && touched.name ? <span>{errors.name}</span> : null}
          </label>
          <label>
            Телефон
            <Field name="phone" type="phone">
              {({ field }: FieldProps) => (
                <IMaskInput mask="+7(000) 000-00-00" {...field} placeholder="+7 (999) 999-99-99" />
              )}
            </Field>
            {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}
          </label>
          <label>
            Email
            <Field name="email" type="text" placeholder="mail@mail.com" />
            {errors.email && touched.email ? <span>{errors.email}</span> : null}
          </label>
          <label>
            Ваш вопрос
            <Field name="question">
              {({ field }: FieldProps) => (
                <textarea
                  {...field}
                  placeholder="Задайте интересующий вас вопрос, и мы с радостью ответим вам на почту или перезвоним"
                />
              )}
            </Field>
            {errors.question && touched.question ? <span>{errors.question}</span> : null}
          </label>
          <Button type="submit" css={{ marginTop: '8px', width: '100%', ...typography.txtBold }}>
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
    <p css={{ ...typography.txtSm, textAlign: 'center' }}>
      Нажимая на кнопку «Отправить», вы соглашаетесь с{' '}
      <a css={{ ...links.blue }} href="/" target="_blank">
        условиями обработки персональных данных
      </a>
    </p>
  </section>
);

export default FeedbackForm;
