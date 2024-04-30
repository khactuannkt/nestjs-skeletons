import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';
import { UserEntity } from '../domains/entities/user.entity';
import { Injectable } from '@nestjs/common';
import UserRegisterDto from '../domains/dtos/user-register.dto';
import { generateHash } from '../../../common/utils';

@Injectable()
export class UserRepository {
  private readonly userRepository: Repository<UserEntity>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(UserEntity);
  }

  findOneByEmail = (email: string) =>
    this.userRepository.findOneBy({ email: email });

  findOneById = (id: number) => this.userRepository.findOneBy({ id: id });

  findByIds = (ids: number[]) => this.userRepository.findBy({ id: In(ids) });

  register = async (userRegisterDto: UserRegisterDto) => {
    const user = new UserEntity();
    user.email = userRegisterDto.email;
    user.alias = userRegisterDto.alias;
    user.password = await generateHash(userRegisterDto.password);
    user.roles = userRegisterDto.roles;
    user.name = userRegisterDto.name || '';
    user.avatar = userRegisterDto.avatar || '';

    return this.userRepository.save(user);
  };
}
