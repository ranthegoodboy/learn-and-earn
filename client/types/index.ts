export type User = {
  id: string;
  name?: string | null;
  email: string;
  image?: string | null;
};

export type Author = Pick<User, "id" | "name" | "image">;

export type CourseComment = {
  id: string; // was commentId
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
  status: string;
  enrollments: CourseEnrollment[];
  analytics?: unknown;
  sections: CourseSection[];
  createdAt?: string;
  updatedAt?: string;
};

export type CourseListResponse = {
  message: string;
  data: Course[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type CourseDetailResponse = {
  message: string;
  data: Course;
};
