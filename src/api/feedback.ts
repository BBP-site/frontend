export interface Values {
  name: string;
  phone: string;
  email: string;
  question: string;
}

export const sendFeedback = async (body: Values): Promise<Boolean | undefined> => {
  try {
    const res = await fetch('/v1/feedback/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: body.name,
        phone: body.phone,
        email: body.email,
        question: body.question,
      }),
    });

    return res.ok;
  } catch (e) {
    console.error(e);
  }
};
