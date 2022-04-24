import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAwardDto, CreateUserDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import {
  Award,
  AwardDocument,
  User,
  UserDocument,
} from './entities/award.entity';
import { Model } from 'mongoose';

@Injectable()
export class AwardService {
  constructor(
    @InjectModel(Award.name) private awardModel: Model<AwardDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  create(createAwardDto: CreateAwardDto) {
    return this.awardModel.create(createAwardDto);
  }

  createUser(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  async login(createUserDto: CreateUserDto) {
    const data = await this.userModel.findOne({ email: createUserDto.email });
    console.log(data);
    if (data === null)
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return data;
  }

  async findAll(type?, min?, max?) {
    if (typeof type !== 'string' && min && max) {
      return this.awardModel.find({
        type: { $in: type },
        point: { $gte: min, $lte: max },
      });
    } else if (type && min && max) {
      return this.awardModel.find({
        type: type,
        point: { $gte: min, $lte: max },
      });
    } else if (type) {
      return this.awardModel.find({ type: { $in: type } });
    }
    const data = await this.awardModel.find();
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} award`;
  }

  update(id: number, updateAwardDto: UpdateAwardDto) {
    return `This action updates a #${id} award`;
  }

  remove(id: number) {
    return `This action removes a #${id} award`;
  }
}
