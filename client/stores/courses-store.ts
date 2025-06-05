import { produce } from "immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  level: string;
  isPublished: boolean;
  whatYouLearn: string[];
  requirements: string[];
  targetAudience: string[];
  language: string;
  sections: SectionProps[];
}

export interface SectionProps {
  sectionTitle: string;
  sectionDescription: string;
  chapters: ChapterProps[];
}

export interface ChapterProps {
  type: string;
  title: string;
  content: string;
  videoLength: number;
  videoUrl: string;
  videoUniqueId: string;
  videoType: string;
}

interface CoursesState {
  courses: CourseProps[];
  activeCourseIndex: number;
  setActiveCourseIndex: (index: number) => void;
  removeCourse: (index: number) => void;
  addCourse: () => void;
}

const defaultChapterState = {
  type: "",
  title: "",
  content: "",
  videoLength: 0,
  videoUrl: "",
  videoUniqueId: "",
  videoType: "",
};

const defaultSectionState = {
  sectionTitle: "",
  sectionDescription: "",
  chapters: [defaultChapterState],
};

const defaultCoursesState = {
  id: "",
  title: "Untitled Course",
  description: "",
  category: "Uncategorized",
  image:
    "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png",
  price: 20,
  level: "Intermediate",
  isPublished: false,
  whatYouLearn: [],
  requirements: [],
  targetAudience: [],
  language: "",
  sections: [defaultSectionState],
};

export const useCoursesStore = create<CoursesState>()(
  persist(
    (set) => ({
      courses: [],
      activeCourseIndex: 0,
      addCourse: () =>
        set(
          produce((state: CoursesState) => {
            if (state.courses.length > 2) return; // limit to 3 draft courses for now, can be changed later on
            state.courses = [...state.courses, defaultCoursesState];
          })
        ),
      setActiveCourseIndex: (index: number) =>
        set(
          produce((state: CoursesState) => {
            state.activeCourseIndex = index;
          })
        ),
      removeCourse: (index: number) =>
        set(
          produce((state: CoursesState) => {
            state.courses.splice(index, 1);
            if (index <= state.activeCourseIndex) {
              state.activeCourseIndex = Math.max(
                0,
                state.activeCourseIndex - 1
              );
            }
          })
        ),
    }),
    {
      name: "courses-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCoursesStore;
