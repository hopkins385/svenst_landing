import { MailerService } from './../services/mailer/mailer.service';

const config = useRuntimeConfig();
const mailerService = new MailerService();

export default defineEventHandler(async (event) => {
  const body = await getContactRequestBody(event);

  // debounce
  await new Promise((resolve) => setTimeout(resolve, 500));

  mailerService.sendMail({
    fromName: body.name,
    fromEmail: body.email,
    to: config.admin.email,
    subject: 'Contact Form Submission',
    body: {
      name: body.name,
      email: body.email,
      message: body.message,
      type: body.type,
    },
  });

  return {
    body,
  };
});
