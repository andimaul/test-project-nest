import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AwardDocument = Document & Award;
export type UserDocument = Document & User;

@Schema()
export class Award {
  @Prop()
  type: string;
  @Prop()
  point: number;
  @Prop()
  image: string;
  @Prop()
  name: string;
}

export const AwardSchema = SchemaFactory.createForClass(Award);

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
