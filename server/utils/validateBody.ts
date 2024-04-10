import type { H3Event } from 'h3';
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

  return result.data;
}
