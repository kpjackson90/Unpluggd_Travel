import mongoose from 'mongoose';
const { Schema } = mongoose;
import { IUser } from './user';

interface SouvenirAttrs {
  title: string;
  price: string;
  description: string;
  image: string;
  creator: IUser;
  owner: IUser;
}

interface SouvenirModel extends mongoose.Model<ISouvenir> {
  build(attrs: SouvenirAttrs): ISouvenir;
}

interface ISouvenir extends mongoose.Document {
  title: string;
  price: string;
  description: string;
  image: string;
  creator: IUser;
  owner: IUser;
}

const SouvenirSchema = new Schema<ISouvenir>(
  {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    creator: {
      type: String,
    },
    owner: { type: String },
  },
  {
    timestamps: true,
  }
);

SouvenirSchema.statics.build = (attrs: SouvenirAttrs) => {
  return new Souvenir(attrs);
};

const Souvenir = mongoose.model<ISouvenir, SouvenirModel>(
  'Souvenir',
  SouvenirSchema
);

export { Souvenir };
