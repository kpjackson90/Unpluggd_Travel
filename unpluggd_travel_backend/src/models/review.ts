import mongoose from 'mongoose';
const { Schema } = mongoose;

interface ReviewAttrs {
  rating: string;
  visitType: string;
  fromDate: string;
  toDate: string;
  title: string;
  body: string;
  images: [string];
}

interface ReviewModel extends mongoose.Model<IReview> {
  build(attrs: ReviewAttrs): IReview;
}

export interface IReview extends mongoose.Document {
  rating: string;
  visitType: string;
  fromDate: string;
  toDate: string;
  title: string;
  body: string;
  images: [string];
}

const ReviewSchema = new Schema<IReview>(
  {
    rating: {
      type: String,
    },
    visitType: { type: String },
    fromDate: { type: String },
    toDate: { type: String },
    title: { type: String },
    body: { type: String },
    images: [{ type: String }],
  },
  { timestamps: true }
);

ReviewSchema.statics.build = (attrs: ReviewAttrs) => {
  return new Review(attrs);
};

const Review = mongoose.model<IReview, ReviewModel>('Review', ReviewSchema);

export { Review };
