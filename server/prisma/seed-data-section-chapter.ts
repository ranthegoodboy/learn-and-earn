import { ObjectId } from "mongodb";
import { coursesSeed } from "./seed-data-course";

// Generate valid MongoDB ObjectIds for sections
const generateSectionIds = () => {
  const sectionIds: string[] = [];
  for (let i = 0; i < coursesSeed.length * 3; i++) {
    sectionIds.push(new ObjectId().toString());
  }
  return sectionIds;
};

// Generate valid MongoDB ObjectIds for chapters
const generateChapterIds = () => {
  const chapterIds: string[] = [];
  for (let i = 0; i < coursesSeed.length * 3 * 5; i++) {
    chapterIds.push(new ObjectId().toString());
  }
  return chapterIds;
};

const sectionIds = generateSectionIds();
const chapterIds = generateChapterIds();

// Section seed data
export const sectionsSeed = coursesSeed.flatMap((course, courseIndex) => {
  return Array(3).fill(null).map((_, sectionIndex) => {
    const sectionId = sectionIds[courseIndex * 3 + sectionIndex];
    
    // Create different section titles based on course category and section index
    let sectionTitle = "";
    let sectionDescription = "";
    
    if (course.category === "Web Development") {
      if (sectionIndex === 0) {
        sectionTitle = "Introduction to Web Development Fundamentals";
        sectionDescription = "Learn the core concepts and tools needed to start your web development journey.";
      } else if (sectionIndex === 1) {
        sectionTitle = "Building Interactive Web Applications";
        sectionDescription = "Discover how to create dynamic and responsive web applications using modern techniques.";
      } else {
        sectionTitle = "Advanced Web Development Concepts";
        sectionDescription = "Master advanced topics and best practices in professional web development.";
      }
    } else if (course.category === "Data Science") {
      if (sectionIndex === 0) {
        sectionTitle = "Data Analysis Foundations";
        sectionDescription = "Establish a solid foundation in data analysis methodologies and tools.";
      } else if (sectionIndex === 1) {
        sectionTitle = "Statistical Methods and Visualization";
        sectionDescription = "Learn to apply statistical techniques and create compelling data visualizations.";
      } else {
        sectionTitle = "Machine Learning Applications";
        sectionDescription = "Implement machine learning algorithms to solve real-world data problems.";
      }
    } else if (course.category === "Mobile Development") {
      if (sectionIndex === 0) {
        sectionTitle = "Mobile App Architecture";
        sectionDescription = "Understand the fundamental architecture patterns for building mobile applications.";
      } else if (sectionIndex === 1) {
        sectionTitle = "UI/UX Design for Mobile";
        sectionDescription = "Create intuitive and engaging user interfaces for mobile platforms.";
      } else {
        sectionTitle = "Advanced Mobile Features";
        sectionDescription = "Implement advanced features like geolocation, push notifications, and offline capabilities.";
      }
    } else {
      if (sectionIndex === 0) {
        sectionTitle = `${course.title} Fundamentals`;
        sectionDescription = `Learn the essential concepts and principles of ${course.title}.`;
      } else if (sectionIndex === 1) {
        sectionTitle = `Intermediate ${course.title} Techniques`;
        sectionDescription = `Build upon the fundamentals with more advanced ${course.title.toLowerCase()} techniques.`;
      } else {
        sectionTitle = `Advanced ${course.title} Mastery`;
        sectionDescription = `Master complex topics and professional workflows in ${course.title.toLowerCase()}.`;
      }
    }
    
    return {
      id: sectionId,
      sectionTitle,
      sectionDescription,
      courseId: course.id
    };
  });
});

// Chapter seed data
export const chaptersSeed = sectionsSeed.flatMap((section, sectionIndex) => {
  return Array(5).fill(null).map((_, chapterIndex) => {
    const globalChapterIndex = sectionIndex * 5 + chapterIndex;
    const chapterId = chapterIds[globalChapterIndex];
    
    // Create different chapter content based on section title and chapter index
    let title = "";
    let content = "";
    let videoLength = 0;
    let videoUrl = "";
    let videoUniqueId = "";
    
    if (chapterIndex === 0) {
      title = `Introduction to ${section.sectionTitle}`;
      content = `This chapter provides an overview of what you'll learn in this section about ${section.sectionTitle}.`;
      videoLength = 8.5;
      videoUniqueId = `intro-${new ObjectId().toString().substring(0, 8)}`;
      videoUrl = `https://images.pexels.com/videos/3045163/free-video-3045163.mp4`;
    } else if (chapterIndex === 1) {
      title = `Core Concepts of ${section.sectionTitle.split(' ').slice(0, 3).join(' ')}`;
      content = `Learn the fundamental principles and concepts that form the foundation of ${section.sectionTitle}.`;
      videoLength = 12.3;
      videoUniqueId = `concepts-${new ObjectId().toString().substring(0, 8)}`;
      videoUrl = `https://images.pexels.com/videos/3706/free-video-3706.mp4`;
    } else if (chapterIndex === 2) {
      title = `Practical Examples in ${section.sectionTitle.split(' ').slice(0, 2).join(' ')}`;
      content = `See real-world examples and applications of the concepts covered in this section.`;
      videoLength = 15.7;
      videoUniqueId = `examples-${new ObjectId().toString().substring(0, 8)}`;
      videoUrl = `https://images.pexels.com/videos/1409899/free-video-1409899.mp4`;
    } else if (chapterIndex === 3) {
      title = `Advanced Techniques for ${section.sectionTitle.split(' ').slice(0, 3).join(' ')}`;
      content = `Discover advanced methods and techniques to take your skills to the next level.`;
      videoLength = 18.2;
      videoUniqueId = `advanced-${new ObjectId().toString().substring(0, 8)}`;
      videoUrl = `https://images.pexels.com/videos/1448735/free-video-1448735.mp4`;
    } else {
      title = `${section.sectionTitle} - Putting It All Together`;
      content = `Consolidate your knowledge with comprehensive exercises and projects that integrate all concepts from this section.`;
      videoLength = 22.5;
      videoUniqueId = `summary-${new ObjectId().toString().substring(0, 8)}`;
      videoUrl = `https://images.pexels.com/videos/3045163/free-video-3045163.mp4`;
    }
    
    return {
      id: chapterId,
      type: chapterIndex === 4 ? "project" : "video",
      title,
      content,
      videoLength,
      videoUrl,
      videoUniqueId,
      videoType: "mp4",
      sectionId: section.id
    };
  });
});