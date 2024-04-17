import type { H3Event } from 'h3';
import { validateEmail } from './validateEmail';
import { contactFormSchema } from '~/schemas';

export async function getContactRequestBody(event: H3Event) {
  const result = await readValidatedBody(event, (body) =>
    contactFormSchema.safeParse(body),
  );

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: JSON.stringify(result.error.issues),
    });
  }

  const isValidEmail = await validateEmail(result.data.email);

  if (!isValidEmail) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Invalid email address',
    });
  }

  return result.data;
}
