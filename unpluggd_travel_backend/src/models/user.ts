import mongoose from 'mongoose';
const { Schema } = mongoose;

interface UserAttrs {
  email: string;
  role: string;
}

interface UserModel extends mongoose.Model<IUser> {
  build(attrs: UserAttrs): IUser;
}

export interface IUser extends mongoose.Document {
  email: string;
  role: string;
}

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    role: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<IUser, UserModel>('User', UserSchema);

export { User };
