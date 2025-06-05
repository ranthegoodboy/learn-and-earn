export type ApiResponseType<T> = {
  success: boolean;
  data: T;
  error: string | null;
  // pagination: {
  //   total: number;
  //   page: number;
  //   limit: number;
  //   totalPages: number;
  // };
};

export type User = {
  id: string;
  name?: string | null;
  email: string;
  image?: string | null;
};

export type Author = Pick<User, "id" | "name" | "image">;

export type CourseComment = {
  id: string;
  userId: string;
  chapterId: string;
  text: string;
  timestamp: string;
};

export type CourseChapter = {
  id: string;
  type: string;
  title: string;
  content: string;
  videoUrl: string;
  videoLength: number;
  videoType: string;
  videoUniqueId: string;
  comments: CourseComment[];
  sectionId: string;
};

export type CourseSection = {
  id: string;
  sectionTitle: string;
  sectionDescription: string;
  chapters: CourseChapter[];
  courseId: string;
};

export type CourseEnrollment = string;

export type Course = {
  id: string;
  userId: string;
  author: Author;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  level: string;
  isPublished: boolean;
  enrollments: CourseEnrollment[];
  analytics?: unknown;
  sections: CourseSection[];
  createdAt?: string;
  updatedAt?: string;
};

export type CourseListResponse = {
  message: string;
  data: CourseOverview[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type MyCourseListResponse = {
  message: string;
  data: {
    courses: MyCourseDetails[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type CourseOverview = {
  id: string;
  author?: Author;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  level: string;
  whatYouLearn: string[];
  requirements: string[];
  targetAudience: string[];
  language: string;
  sections: CourseSectionOverview[];
  createdAt?: string;
  updatedAt?: string;
};

export type MyCourseDetails = {
  isPublished: boolean;
  enrollments?: {
    id: string;
    user: {
      id: string;
      name: string;
    }[];
  }[];
} & CourseOverview;

export type CourseChapterOverview = Pick<
  CourseChapter,
  "title" | "videoLength"
>;

export type CourseSectionOverview = {
  sectionTitle: string;
  sectionDescription: string;
  chapters: CourseChapterOverview[];
};

export type UserProfile = {
  id: string;
  googleId?: string | null;
  email: string;
  name?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  about?: string | null;
  experiences: string[];
  education: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type UserBillingTransaction = {
  courseId: string;
  createdAt: Date;
  amount: number;
  id: string;
  paymentProvider: string;
  transactionId: string;
  updatedAt: Date;
  userId: string;
  course: {
    id: string;
    title: string;
  };
};
