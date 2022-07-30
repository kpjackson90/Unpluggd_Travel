import mongoose from 'mongoose';
const { Schema } = mongoose;
import { IReview, Review } from './review';
import { ICategory } from './category';

interface AccommodationAttrs {
  name: string;
  website: string;
  address: string;
  number: string;
  photos: [string];
  categories: [ICategory];
  reviews: [IReview];
  amenities: [string];
  rating: string;
  description: string;
  price: string;
}

interface AccommodationModel extends mongoose.Model<IAccommodation> {
  build(attrs: AccommodationAttrs): IAccommodation;
  addReview(
    id: string,
    rating: string,
    visitType: string,
    fromDate: string,
    toDate: string,
    title: string,
    body: string,
    images: [string]
  ): IAccommodation;
}

interface IAccommodation extends mongoose.Document {
  name: string;
  website: string;
  address: string;
  phoneNumber: string;
  photos: [string];
  categories: [ICategory];
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
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
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

AccommodationSchema.statics.addReview = function (
  id,
  rating,
  visitType,
  fromDate,
  toDate,
  title,
  body,
  images
) {
  return this.findById(id).then((accommodation: IAccommodation) => {
    if (accommodation.id) {
      const review = new Review({
        rating,
        visitType,
        fromDate,
        toDate,
        title,
        body,
        images,
      });

      if (typeof accommodation.reviews !== 'undefined') {
        accommodation.reviews.push(review);
      }

      return Promise.all([review.save(), accommodation.save()]).then(
        ([review, accommodation]) => accommodation
      );
    }
  });
};

AccommodationSchema.statics.findReview = function (id) {
  return this.findById(id)
    .populate('review')
    .then((accommodation: IAccommodation) => accommodation.reviews);
};

const Accommodation = mongoose.model<IAccommodation, AccommodationModel>(
  'Accommodation',
  AccommodationSchema
);

export { Accommodation };
