import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)

    private usersRepository: Repository<User>,
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }
  async update(id: string, updateUsertDto: UpdateUserDto): Promise<User> {
    const todo = await this.usersRepository.findOneOrFail(id);
    if (!todo.id) {
      console.error("Todo doesn't exist");
    }
    const { name, } = updateUsertDto;
    let userEntity: User;
    //userEntity = ..updateUsertDto;
    await this.usersRepository.update(id, userEntity);
    return await this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const userEntity: User = User.create();
    const { name, username, id } = createUserDto;

    userEntity.id = Number(id);
    userEntity.name = name;
    userEntity.username = username;
    await User.save(userEntity);
    return userEntity;


  }


}
