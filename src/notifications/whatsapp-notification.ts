import { AbstractNotification } from "./abstract-notification";
import { NotificationInterface } from "./notification.interface";

export class WhatsappNotification extends AbstractNotification implements NotificationInterface {
  private phone: string;
  private area: string;

  setReceiver(name: string, phone: string, area: string): void {
    this.name = name;
    this.phone = phone;
    this.area = area;
  }

  send(): string {
    return `Sent to ${this.name} WhatsApp message to ${this.area}${this.phone}`;
  }
}
