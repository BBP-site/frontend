import { Values } from '@components/FeedbackForm';

export const sendFeedback = async (body: Values): Promise<void> => {
    await fetch('http://195.24.67.78:5000/v1/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        name: body.name,
        phone: body.phone,
        email: body.email,
        question: body.question
      })
    });
  }
