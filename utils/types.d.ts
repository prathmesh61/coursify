export type CartType = {
  description: string;
  quantity: number;
  courseName: string;
  banner: string;
  category: string;
  price: string | number;
  createdAt: string | Date;
  updatedAt: string | Date;
  __v: number;
  _id: string;
  autherID: {
    purchasedCourses: string[];
    courses: string[];
    email: string;
    isSeller: boolean;
    password: string;
    username: string;
    __v: number;
    _id: string;
  };
};

export type Course_Type = {
  description: string;
  quantity: number;
  courseName: string;
  banner: string;
  category: string;
  price: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  __v: number;
  _id: string;
  autherID: {
    purchasedCourses: string[];
    courses: string[];
    email: string;
    isSeller: boolean;
    password: string;
    username: string;
    __v: number;
    _id: string;
  };
};
export type Course_Card_Type = {
  item: {
    description: string;
    quantity: number;
    courseName: string;
    banner: string;
    category: string;
    price: string | number;
    createdAt: string | Date;
    updatedAt: string | Date;
    __v: number;
    _id: string;
    autherID: {
      purchasedCourses: string[];
      courses: string[];
      email: string;
      isSeller: boolean;
      password: string;
      username: string;
      __v: number;
      _id: string;
    };
  };
};

export type User_Type = {
  user: {
    purchasedCourses: string[];
    courses: string[];
    email: string;
    isSeller: boolean;
    username: string;
    __v: number;
    _id: string;
  };
};

export type StoreState_Type = {
  cart: CartType[];
  user: User_Type[];
};

export type Error_Type = {
  message: string;
};
export type Category_Type = {
  category: string[];
};
type FilterCourseType = {
  data: Course_Type[];
};
export type Single_Course_Type = {
  course: {
    description: string;
    quantity: number;
    courseName: string;
    category: string;
    banner: string;
    price: number | string;
    createdAt: string | Date;
    updatedAt: string | Date;
    __v: number;
    _id: string;
    autherID: {
      purchasedCourses: string[];
      courses: string[];
      email: string;
      isSeller: boolean;
      password: string;
      username: string;
      __v: number;
      _id: string;
    };
  };
};
