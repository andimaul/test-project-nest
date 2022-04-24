import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwardModule } from './award/award.module';

@Module({
  imports: [
    AwardModule,
    MongooseModule.forRoot('mongodb://localhost:27017/member'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
