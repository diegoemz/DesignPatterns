import { AbstractNotification } from "./abstract-notification";
import { NotificationInterface } from "./notification.interface";

export class EmailNotification extends AbstractNotification implements NotificationInterface {
  private email: string;

  setReceiver(name: string, email: string): void {
    this.name = name;
    this.email = email;
  }

    send(): string {
    return `Sent to ${this.name} email to ${this.email}`;
  }
}
