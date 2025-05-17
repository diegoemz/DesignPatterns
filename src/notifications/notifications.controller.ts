// src/notifications/notifications.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { SmsNotification } from './sms-notification';
import { EmailNotification } from './email-notification';
import { WhatsappNotification } from './whatsapp-notification';
import { SmsNotificationDto } from './dto/sms-notification.dto';
import { EmailNotificationDto } from './dto/email-notification.dto';
import { WhatsappNotificationDto } from './dto/whatsapp-notification.dto';

@Controller('notifications')
export class NotificationsController {
  @Post('sms')
  sendSms(@Body() body: SmsNotificationDto): string {
    const sms = new SmsNotification();
    sms.setReceiver(body.name, body.phone, body.area);
    return sms.send();
  }

  @Post('email')
  sendEmail(@Body() body: EmailNotificationDto): string {
    const email = new EmailNotification();
    email.setReceiver(body.name, body.emailAddress);
    return email.send();
  }

  @Post('whatsapp')
  sendWhatsapp(@Body() body: WhatsappNotificationDto): string {
    const whatsapp = new WhatsappNotification();
    whatsapp.setReceiver(body.name, body.phone, body.area);
    return whatsapp.send();
  }
}
