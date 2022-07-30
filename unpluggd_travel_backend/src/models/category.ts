import mongoose from 'mongoose';
const { Schema } = mongoose;

interface CategoryAttrs {
  title: string;
}

interface CategoryModel extends mongoose.Model<ICategory> {
  build(attrs: CategoryAttrs): ICategory;
}

interface ICategory extends mongoose.Document {
  title: string;
}

const CategorySchema = new Schema<ICategory>(
  {
    title: {
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
