import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';
import { CreateMailDto } from './dtos/create-mail.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailer: MailerService) {}

  async sendmail(email: string, url: string) {
    await this.mailer.sendMail({
      subject: 'Arquivo Mail.Service',
      to: email,
      template: 'index', //template: 'index',
      context: {
        url: url,
        email: email,
      },
    });
    return { msg: 'enviado com suscesso' };
  }

  async sendmailRmqMail(content: CreateMailDto) {
    await this.mailer.sendMail({
      subject: 'Arquivo Mail.Service',
      to: content.email,
      template: 'index', //template: 'index',
      context: {
        url: content.url,
        email: content.email,
      },
    });
    return { msg: 'enviado com suscesso' };
  }
  
}
