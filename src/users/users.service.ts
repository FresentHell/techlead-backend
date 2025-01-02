import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Task } from '../tasks/entities/task.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['tasks'] });
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id }, relations: ['tasks'] });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const { tasks, ...userData } = updateUserDto;

    await this.userRepository.update(id, userData);

    if (tasks) {
      const user = await this.findOne(id);
      if (!user) {
        throw new Error(`Usuario con ID ${id} no encontrado`);
      }

      const taskEntities = tasks.map((task) => {
        const taskEntity = this.taskRepository.create(task);
        taskEntity.user = user;
        return taskEntity;
      });

      await this.taskRepository.save(taskEntities);
    }

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error(`Usuario con ID ${id} no encontrado`);
    }

    await this.taskRepository.delete({ user: { id } });
    await this.userRepository.delete(id);
  }
}
