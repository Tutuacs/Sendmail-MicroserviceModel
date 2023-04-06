import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { CreateMailDto } from './dtos/create-mail.dto';
import { MailService } from './mail.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('mail')
export class MailController {
  constructor(private readonly service: MailService) {}

  @Get()
  @Render('index')
  root() {
    return;
  }

  @Post('send')
  @Redirect('/mail')
  async sendMail(@Body() { email, url }: CreateMailDto) {
    return this.service.sendmail(email, url);
  }

  @EventPattern('sendEmail')
  async sendRmqMail(content: CreateMailDto){
    this.service.sendmailRmqMail(content);
  }

}
