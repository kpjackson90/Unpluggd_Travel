import mongoose from 'mongoose';
const { Schema } = mongoose;

interface CategoryAttrs {
  title: string;
  icon: string;
}

interface CategoryModel extends mongoose.Model<ICategory> {
  build(attrs: CategoryAttrs): ICategory;
}

export interface ICategory extends mongoose.Document {
  title: string;
  icon: string;
}

const CategorySchema = new Schema<ICategory>(
  {
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

CategorySchema.statics.build = (attrs: CategoryAttrs) => {
  return new Category(attrs);
};

const Category = mongoose.model<ICategory, CategoryModel>(
  'Category',
  CategorySchema
);

export { Category };
