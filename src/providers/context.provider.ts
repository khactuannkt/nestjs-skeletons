import { getValue, setValue } from 'express-ctx';
import { UserEntity } from '../modules/user/domains/entities/user.entity';

export class ContextProvider {
  private static readonly nameSpace = 'request';

  private static readonly authUserKey = 'user_key';

  private static get<T>(key: string): T | undefined {
    return getValue<T>(ContextProvider.getKeyWithNamespace(key));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static set(key: string, value: any): void {
    setValue(ContextProvider.getKeyWithNamespace(key), value);
  }

  private static getKeyWithNamespace(key: string): string {
    return `${ContextProvider.nameSpace}.${key}`;
  }
  static setAuthUser(user: UserEntity): void {
    ContextProvider.set(ContextProvider.authUserKey, user);
  }

  static getAuthUser(): UserEntity | undefined {
    return ContextProvider.get<UserEntity>(ContextProvider.authUserKey);
  }
}
