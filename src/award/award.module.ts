import { Module } from '@nestjs/common';
import { AwardService } from './award.service';
import { AwardController } from './award.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Award, AwardSchema, User, UserSchema } from './entities/award.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Award.name, schema: AwardSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [AwardController],
  providers: [AwardService],
})
export class AwardModule {}
