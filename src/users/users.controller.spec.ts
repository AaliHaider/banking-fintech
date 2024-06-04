import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../../src/users/users.controller';
import { UsersService } from '../../src/users/users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    usersController = module.get<UsersController>(UsersController);
  });

  describe('create', () => {
    it('should create a user', async () => {
      const result = { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' };
      jest.spyOn(usersService, 'create').mockImplementation(() => Promise.resolve(result));

      expect(await usersController.create({ name: 'John Doe', email: 'john@example.com', password: 'password123' })).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const result = { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' };
      jest.spyOn(usersService, 'findOne').mockImplementation(() => Promise.resolve(result));

      expect(await usersController.findOne('1')).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = [
        { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'password456' }
      ];
      jest.spyOn(usersService, 'findAll').mockImplementation(() => Promise.resolve(result));

      expect(await usersController.findAll()).toBe(result);
    });
  });
});
