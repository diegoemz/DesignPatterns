import { AbstractNotification } from "./abstract-notification";
import { NotificationInterface } from "./notification.interface";

export class EmailNotification extends AbstractNotification implements NotificationInterface {
  send(): string {
    return `Sent to ${this.name} email to ${this.receiver}`;
  }

  setReceiver(name: string, email: string): void {
    this.name = name;
    this.receiver = email;
  }
}
