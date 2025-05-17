// src/notifications/abstract-notification.ts
export abstract class AbstractNotification {
  protected name: string;
  protected receiver: string;

  abstract setReceiver(...args: any[]): void;
  abstract send(): string;
}
