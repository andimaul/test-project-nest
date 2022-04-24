import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AwardService } from './award.service';
import { CreateAwardDto, CreateUserDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';

@Controller('award')
export class AwardController {
  constructor(private readonly awardService: AwardService) {}

  @Post()
  create(@Body() createAwardDto: CreateAwardDto) {
    return this.awardService.create(createAwardDto);
  }

  @Post('/user')
  async createEmail(@Body() createUserDto: CreateUserDto) {
    return this.awardService.createUser(createUserDto);
  }

  @Post('/login')
  async login(@Body() createUserDto: CreateUserDto) {
    return this.awardService.login(createUserDto);
  }

  @Get()
  findAll(
    @Query('type') type: string,
    @Query('min') min: number,
    @Query('max') max: number,
  ) {
    return this.awardService.findAll(type, min, max);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.awardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAwardDto: UpdateAwardDto) {
    return this.awardService.update(+id, updateAwardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.awardService.remove(+id);
  }
}
