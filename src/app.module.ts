import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsController } from './notifications/notifications.controller';
import { NotificationsService } from './notifications/notifications.service';

@Module({
  imports: [],
  controllers: [AppController, NotificationsController],
  providers: [AppService, NotificationsService],
})
export class AppModule {}
