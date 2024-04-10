import { createTransport } from 'nodemailer';
import type { Transporter, TransportOptions } from 'nodemailer';
import type { RuntimeConfig } from 'nuxt/schema';
import handlebars from 'handlebars';
import { SendMailDto } from './send-mail.dto';
import { template } from './mail-template';
import { useRuntimeConfig } from '#imports';

export class MailerService {
  private readonly transporter: Transporter;
  private readonly config: RuntimeConfig['mailer'];

  constructor() {
    this.config = useRuntimeConfig().mailer;
    this.transporter = createTransport({
      host: this.config.host,
      port: this.config.port,
      secure: false,
      auth: {
        user: this.config.username,
        pass: this.config.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    } as TransportOptions);
  }

  async sendMail(payload: SendMailDto) {
    const compileSource = handlebars.compile(template);
    try {
      return await this.transporter.sendMail({
        from: `${payload.fromName} ${payload.fromEmail}`,
        to: payload.to,
        subject: payload.subject,
        html: compileSource({
          app_name: payload.subject,
          ...payload.body,
        }),
      });
    } catch (error) {
      console.error('[Mailservice] [transporter sendMail error] ', error);
      throw new Error('Email transporter error');
    }
  }
}
