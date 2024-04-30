import { Column, Entity, Index } from 'typeorm';
import { AbstractEntity } from '../../../../common/abstract.entity';
import { UserRoleType } from '../../../../constants/user-role';
import { USER_AVATAR_URL } from '../../../../constants/user-avatar-url';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity {
  @Column({ type: 'varchar', unique: true })
  alias: string;

  @Index()
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'json' })
  roles: UserRoleType[];

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', default: USER_AVATAR_URL })
  avatar: string;

}
