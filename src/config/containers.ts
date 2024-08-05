import {UserService} from '../services/userServices';
import { container } from 'tsyringe';
import {userRepository} from '../repositories/userRepository';

container.registerSingleton<userRepository>(userRepository);
container.registerSingleton<UserService>(UserService);
