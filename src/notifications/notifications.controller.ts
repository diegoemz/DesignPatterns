import { Body, Controller, Get, Post } from '@nestjs/common';
import { SmsNotification } from './sms-notification';
import { EmailNotification } from './email-notification';
import { WhatsappNotification } from './whatsapp-notification';
import { SmsNotificationDto } from './dto/sms-notification.dto';
import { EmailNotificationDto } from './dto/email-notification.dto';
import { WhatsappNotificationDto } from './dto/whatsapp-notification.dto';

@Controller('notifications')
export class NotificationsController {
  private smsSent: string[] = [];
  private emailSent: string[] = [];
  private whatsappSent: string[] = [];

  @Post('sms')
  sendSms(@Body() body: SmsNotificationDto): string {
    const sms = new SmsNotification();
    sms.setReceiver(body.name, body.phone, body.area);
    const result = sms.send();
    this.smsSent.push(result);
    return result;
  }

  @Post('email')
  sendEmail(@Body() body: EmailNotificationDto): string {
    const email = new EmailNotification();
    email.setReceiver(body.name, body.email);
    const result = email.send();
    this.emailSent.push(result);
    return result;
  }

  @Post('whatsapp')
  sendWhatsapp(@Body() body: WhatsappNotificationDto): string {
    const whatsapp = new WhatsappNotification();
    whatsapp.setReceiver(body.name, body.phone, body.area);
    const result = whatsapp.send();
    this.whatsappSent.push(result);
    return result;
  }
  
  @Get('sms')
  getSms(): string[] {
    return this.smsSent;
  }

  @Get('email')
  getEmails(): string[] {
    return this.emailSent;
  }

  @Get('whatsapp')
  getWhatsapps(): string[] {
    return this.whatsappSent;
  }
}
