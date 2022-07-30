import mongoose from 'mongoose';
const { Schema } = mongoose;
import { IReview } from './review';

interface AccommodationAttrs {
  name: string;
  website: string;
  address: string;
  number: string;
  photos: [string];
  reviews: [IReview];
  amenities: [string];
  rating: string;
  description: string;
  price: string;
}

interface AccommodationModel extends mongoose.Model<IAccommodation> {
  build(attrs: AccommodationAttrs): IAccommodation;
}

interface IAccommodation extends mongoose.Document {
  name: string;
  website: string;
  address: string;
  phoneNumber: string;
  photos: [string];
  reviews: [IReview];
  amenities: [string];
  rating: string;
  description: string;
  price: string;
}

const AccommodationSchema = new Schema<IAccommodation>(
  {
    name: {
      type: String,
    },
    website: {
      type: String,
    },
    address: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    photos: [
      {
        type: String,
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
    amenities: [
      {
        type: String,
      },
    ],
    rating: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

AccommodationSchema.statics.build = (attrs: AccommodationAttrs) => {
  return new Accommodation(attrs);
};

const Accommodation = mongoose.model<IAccommodation, AccommodationModel>(
  'Accommodation',
  AccommodationSchema
);

export { Accommodation };
