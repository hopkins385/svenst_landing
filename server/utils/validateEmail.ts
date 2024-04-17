import { verifyEmail } from '@devmehq/email-validator-js';

export async function validateEmail(email: string): Promise<boolean> {
  const { validFormat, validSmtp, validMx } = await verifyEmail({
    emailAddress: email,
    verifyMx: true,
    verifySmtp: true,
    timeout: 3000,
  });
  return (validFormat && validSmtp && validMx) || false;
}
