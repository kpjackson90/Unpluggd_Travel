import mongoose from 'mongoose';
const { Schema } = mongoose;
import { IUser } from './user';
import { ICategory } from './category';

interface SouvenirAttrs {
  title: string;
  price: string;
  description: string;
  image: string;
  categories: [ICategory];
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
  categories: [ICategory];
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
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
      },
    ],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
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
