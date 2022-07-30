import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';
import { NotFoundError } from '../middlewares';
import { UserType } from './user_type';
import { RestaurantType } from './restaurant_type';
import { ReviewType } from './review_type';
import { AccommodationType } from './accommodation_type';
import { ActivityType } from './activity_type';
import { CategoryType } from './category_type';
import { SouvenirType } from './souvenir_type';
import {
  User,
  Restaurant,
  Review,
  Souvenir,
  Category,
  Activity,
  Accommodation,
} from '../models';

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        role: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, role, password }) {
        return new User({ email, password, role }).save();
      },
    },
    editUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        email: { type: GraphQLString },
        role: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parentValue, { id, email, role, password }) {
        const user = await User.findById(id);
        if (!user) {
          throw new NotFoundError();
        }

        user.set({ email, password, role });
        return user.save();
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parentValue, { id }) {
        const user = await User.findById(id);
        if (!user) {
          throw new NotFoundError();
        }

        return user.remove();
      },
    },
    addCategory: {
      type: CategoryType,
      args: {
        title: { type: GraphQLString },
        icon: { type: GraphQLString },
      },
      resolve(parentValue, { title, icon }) {
        return new Category({ title, icon }).save();
      },
    },
    editCategory: {
      type: CategoryType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        icon: { type: GraphQLString },
      },
      async resolve(parentValue, { id, title, icon }) {
        const category = await Category.findById(id);
        if (!category) {
          throw new NotFoundError();
        }

        category.set({ title, icon });
        return category.save();
      },
    },
    deleteCategory: {
      type: CategoryType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        icon: { type: GraphQLString },
      },
      async resolve(parentValue, { id }) {
        const category = await Category.findById(id);
        if (!category) {
          throw new NotFoundError();
        }

        return category.remove();
      },
    },
    addRestaurant: {
      type: RestaurantType,
      args: {
        name: { type: GraphQLString },
        website: { type: GraphQLString },
        address: { type: GraphQLString },
        status: { type: GraphQLBoolean },
        rating: { type: GraphQLString },
        hours: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        description: { type: GraphQLString },
        categories: { type: new GraphQLList(GraphQLString) },
        cuisines: { type: new GraphQLList(GraphQLString) },
        serving: { type: new GraphQLList(GraphQLString) },
        latitude: { type: GraphQLString },
        longitude: { type: GraphQLString },
      },
      resolve(
        parentValue,
        {
          name,
          website,
          address,
          status,
          rating,
          hours,
          phoneNumber,
          categories,
          description,
          cuisines,
          serving,
          latitude,
          longitude,
        }
      ) {
        return new Restaurant({
          name,
          website,
          address,
          status,
          rating,
          hours,
          phoneNumber,
          categories,
          description,
          cuisines,
          serving,
          latitude,
          longitude,
        }).save();
      },
    },
    addReviewToRestaurant: {
      type: RestaurantType,
      args: {
        restaurantId: { type: new GraphQLNonNull(GraphQLID) },
        rating: { type: GraphQLString },
        visitType: { type: GraphQLString },
        fromDate: { type: GraphQLString },
        toDate: { type: GraphQLString },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        images: { type: new GraphQLList(GraphQLString) },
      },
      resolve(
        parentValue,
        {
          restaurantId,
          rating,
          visitType,
          fromDate,
          toDate,
          title,
          body,
          images,
        }
      ) {
        return Restaurant.addReview(
          restaurantId,
          rating,
          visitType,
          fromDate,
          toDate,
          title,
          body,
          images
        );
      },
    },
    editRestaurant: {
      type: RestaurantType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        website: { type: GraphQLString },
        address: { type: GraphQLString },
        status: { type: GraphQLBoolean },
        rating: { type: GraphQLString },
        hours: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        description: { type: GraphQLString },
        categories: { type: new GraphQLList(GraphQLString) },
        cuisines: { type: new GraphQLList(GraphQLString) },
        serving: { type: new GraphQLList(GraphQLString) },
        latitude: { type: GraphQLString },
        longitude: { type: GraphQLString },
      },
      async resolve(
        parentValue,
        {
          id,
          name,
          website,
          address,
          status,
          rating,
          hours,
          phoneNumber,
          categories,
          description,
          cuisines,
          serving,
          latitude,
          longitude,
        }
      ) {
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
          throw new NotFoundError();
        }

        restaurant.set({
          name,
          website,
          address,
          status,
          rating,
          hours,
          phoneNumber,
          categories,
          description,
          cuisines,
          serving,
          latitude,
          longitude,
        });
        restaurant.save();
      },
    },
    deleteRestaurant: {
      type: RestaurantType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parentValue, { id }) {
        const restaurant = Restaurant.findById(id);
        if (!restaurant) {
          throw new NotFoundError();
        }

        return restaurant.remove();
      },
    },
    addAccommodation: {
      type: AccommodationType,
      args: {
        name: { type: GraphQLString },
        website: { type: GraphQLString },
        address: { type: GraphQLString },
        number: { type: GraphQLString },
        photos: { type: new GraphQLList(GraphQLString) },
        amenities: { type: new GraphQLList(GraphQLString) },
        categories: { type: new GraphQLList(GraphQLString) },
        rating: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLString },
      },
      resolve(
        parentValue,
        {
          name,
          websites,
          address,
          number,
          photos,
          amenities,
          categories,
          rating,
          description,
          price,
        }
      ) {
        return new Accommodation({
          name,
          websites,
          address,
          number,
          photos,
          amenities,
          categories,
          rating,
          description,
          price,
        }).save();
      },
    },
    addReviewToAccommodation: {
      type: AccommodationType,
      args: {
        accommodationId: { type: new GraphQLNonNull(GraphQLID) },
        rating: { type: GraphQLString },
        visitType: { type: GraphQLString },
        fromDate: { type: GraphQLString },
        toDate: { type: GraphQLString },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        images: { type: new GraphQLList(GraphQLString) },
      },
      resolve(
        parentValue,
        {
          accommodationId,
          rating,
          visitType,
          fromDate,
          toDate,
          title,
          body,
          images,
        }
      ) {
        return Accommodation.addReview(
          accommodationId,
          rating,
          visitType,
          fromDate,
          toDate,
          title,
          body,
          images
        );
      },
    },
    editAccommodation: {
      type: AccommodationType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        rating: { type: GraphQLString },
        visitType: { type: GraphQLString },
        fromDate: { type: GraphQLString },
        categories: { type: new GraphQLList(GraphQLString) },
        toDate: { type: GraphQLString },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        images: { type: new GraphQLList(GraphQLString) },
      },
      async resolve(
        parentValue,
        {
          id,
          rating,
          visitType,
          fromDate,
          categories,
          toDate,
          title,
          body,
          images,
        }
      ) {
        const accommodation = await Accommodation.findById(id);
        if (!accommodation) {
          throw new NotFoundError();
        }

        accommodation.set({
          rating,
          visitType,
          fromDate,
          categories,
          toDate,
          title,
          body,
          images,
        });
        accommodation.save();
      },
    },
    deleteAccommodation: {
      type: AccommodationType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parentValue, { id }) {
        const accommodation = await Accommodation.findById(id);
        if (!accommodation) {
          throw new NotFoundError();
        }

        return accommodation.remove();
      },
    },
    addActivity: {
      type: ActivityType,
      args: {
        name: { type: GraphQLString },
        rating: { type: GraphQLString },
        date: { type: GraphQLString },
        time: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        price: { type: GraphQLString },
        description: { type: GraphQLString },
        categories: { type: new GraphQLList(GraphQLString) },
        activities: { type: new GraphQLList(GraphQLString) },
        meetingPoint: { type: GraphQLString },
        longitude: { type: GraphQLString },
        latitude: { type: GraphQLString },
      },
      resolve(
        parentValue,
        {
          name,
          rating,
          date,
          time,
          phoneNumber,
          price,
          description,
          categories,
          activities,
          meetingPoint,
          longitude,
          latitude,
        }
      ) {
        return new Activity({
          name,
          rating,
          date,
          time,
          phoneNumber,
          price,
          description,
          categories,
          activities,
          meetingPoint,
          longitude,
          latitude,
        }).save();
      },
    },
    addReviewToActivity: {
      type: ActivityType,
      args: {
        activityId: { type: new GraphQLNonNull(GraphQLID) },
        rating: { type: GraphQLString },
        visitType: { type: GraphQLString },
        fromDate: { type: GraphQLString },
        toDate: { type: GraphQLString },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        images: { type: new GraphQLList(GraphQLString) },
      },
      resolve(
        parentValue,
        { activityId, rating, visitType, fromDate, toDate, title, body, images }
      ) {
        return Activity.addReview(
          activityId,
          rating,
          visitType,
          fromDate,
          toDate,
          title,
          body,
          images
        );
      },
    },
    editActivity: {
      type: ActivityType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        rating: { type: GraphQLString },
        date: { type: GraphQLString },
        time: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        price: { type: GraphQLString },
        description: { type: GraphQLString },
        categories: { type: new GraphQLList(GraphQLString) },
        activities: { type: new GraphQLList(GraphQLString) },
        meetingPoint: { type: GraphQLString },
        longitude: { type: GraphQLString },
        latitude: { type: GraphQLString },
      },
      async resolve(
        parentValue,
        {
          id,
          name,
          rating,
          date,
          time,
          phoneNumber,
          price,
          description,
          categories,
          activities,
          meetingPoint,
          longitude,
          latitude,
        }
      ) {
        const activity = await Activity.findById(id);
        if (!activity) {
          throw new NotFoundError();
        }

        activity.set({
          name,
          rating,
          date,
          time,
          phoneNumber,
          price,
          description,
          categories,
          activities,
          meetingPoint,
          longitude,
          latitude,
        });
        return activity.save();
      },
    },
    deleteActivity: {
      type: ActivityType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parentValue, { id }) {
        const activity = await Activity.findById(id);
        if (!activity) {
          throw new NotFoundError();
        }

        return activity.remove();
      },
    },
    addSouvenir: {
      type: SouvenirType,
      args: {
        title: { type: GraphQLString },
        price: { type: GraphQLString },
        description: { type: GraphQLString },
        categories: { type: new GraphQLList(GraphQLString) },
        image: { type: GraphQLString },
        creator: { type: GraphQLString },
        owner: { type: GraphQLString },
      },
      resolve(
        parentValue,
        { title, price, description, categories, image, creator, owner }
      ) {
        return new Souvenir({
          title,
          price,
          description,
          categories,
          image,
          creator,
          owner,
        }).save();
      },
    },
    editSouvenir: {
      type: SouvenirType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLString },
        price: { type: GraphQLString },
        description: { type: GraphQLString },
        categories: { type: new GraphQLList(GraphQLString) },
        image: { type: GraphQLString },
        owner: { type: GraphQLString },
      },
      async resolve(
        parentValue,
        { id, title, price, description, categories, image, owner }
      ) {
        const souvenir = await Souvenir.findById(id);
        if (!souvenir) {
          throw new NotFoundError();
        }

        souvenir.set({ title, price, description, categories, image, owner });
        return souvenir.save();
      },
    },
    deleteSouvenir: {
      type: SouvenirType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { id }) {
        const souvenir = await Souvenir.findById(id);
        if (!souvenir) {
          throw new NotFoundError();
        }

        return souvenir.remove();
      },
    },
  },
});
