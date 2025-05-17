export abstract class AbstractNotification {
  protected name: string;

  abstract setReceiver(...args: any[]): void;
  abstract send(): string;
}
