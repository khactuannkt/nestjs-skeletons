import { type ValueOf } from '../interfaces';
export const USER_ROLE = {
  ADMIN: 'admin',
  USER: 'user',
} as const;

export type UserRoleType = ValueOf<typeof USER_ROLE>;
