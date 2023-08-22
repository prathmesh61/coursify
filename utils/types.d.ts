export type CartType = {
  description: string;
  quantity: number;
  coursename: string;
  banner: string;
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
  coursename: string;
  banner: string;
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

export type User_Type = {
  purchasedCourses: string[];
  courses: string[];
  email: string;
  isSeller: boolean;
  password: string;
  username: string;
  __v: number;
  _id: string;
};

export type Error_Type = {
  message: string;
};
export type Category_Type = {
  category: string[];
};
