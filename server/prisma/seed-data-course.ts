import { userIds } from "./seed-data-user";

// Define 5 common categories
const categories = [
  "Web Development",
  "Data Science",
  "Mobile Development",
  "UI/UX Design",
  "Cloud Computing"
];

// Define common levels
const levels = ["Beginner", "Intermediate", "Advanced"];

// Define common statuses
const statuses = ["Published", "Draft"];

// Predefined course IDs (MongoDB ObjectId format)
export const courseIds = [
  "605f7f777777777777778001", "605f7f777777777777778002", "605f7f777777777777778003",
  "605f7f777777777777778004", "605f7f777777777777778005", "605f7f777777777777778006",
  "605f7f777777777777778007", "605f7f777777777777778008", "605f7f777777777777778009",
  "605f7f777777777777778010", "605f7f777777777777778011", "605f7f777777777777778012",
  "605f7f777777777777778013", "605f7f777777777777778014", "605f7f777777777777778015",
  "605f7f777777777777778016", "605f7f777777777777778017", "605f7f777777777777778018",
  "605f7f777777777777778019", "605f7f777777777777778020", "605f7f777777777777778021",
  "605f7f777777777777778022", "605f7f777777777777778023", "605f7f777777777777778024",
  "605f7f777777777777778025", "605f7f777777777777778026", "605f7f777777777777778027",
  "605f7f777777777777778028", "605f7f777777777777778029", "605f7f777777777777778030"
];

// Pexels image IDs for course thumbnails
const pexelsImageIds = [
  3861958, 1181244, 3183197, 265087, 4348401, 592638, 6476589, 3184339, 1181675, 416405,
  3183150, 7096, 270404, 3184465, 374016, 5256816, 6694543, 2102416, 3184291, 39284,
  4050316, 4500046, 5053740, 546819, 614810, 7413914, 7989700, 3184418, 270348, 577585
];

// Generate 30 courses, distributing them among users (3 courses per user)
export const coursesSeed = Array(30).fill(null).map((_, index) => {
  // Determine which user this course belongs to
  const userIndex = Math.floor(index / 3); // Each user gets 3 courses
  const userId = userIds[userIndex % userIds.length]; // In case we have more courses than can be evenly distributed
  
  // Generate a random price between 0 and 20
  const price = parseFloat((Math.random() * 20).toFixed(2));
  
  // Select a category from our predefined list
  const category = categories[index % categories.length];
  
  // Select a level
  const level = levels[Math.floor(Math.random() * levels.length)];
  
  // Select a status (mostly published)
  const status = Math.random() > 0.2 ? "Published" : "Draft";
  
  // Use predetermined course ID
  const id = courseIds[index];
  
  // Generate a course title based on category and index
  const title = `${category} ${level === "Beginner" ? "Fundamentals" : level === "Intermediate" ? "Mastery" : "Advanced Techniques"} ${index + 1}`;
  
  // Generate a description
  const description = `Learn ${category} from the ground up. This ${level.toLowerCase()} course covers everything you need to know to ${level === "Beginner" ? "get started with" : level === "Intermediate" ? "become proficient in" : "master"} ${category.toLowerCase()}.`;
  
  // Generate whatYouLearn items
  const whatYouLearn = [
    `Understand core ${category} concepts and principles`,
    `Build real-world ${category.toLowerCase()} projects from scratch`,
    `Apply best practices in ${category.toLowerCase()} development`
  ];
  
  // Generate requirements
  const requirements = [
    level === "Beginner" ? "No prior experience required" : `Basic knowledge of ${category}`,
    "A computer with internet access",
    level === "Advanced" ? "Previous experience with related technologies" : "Willingness to learn and practice"
  ];
  
  // Generate target audience
  const targetAudience = [
    `${level} level students interested in ${category}`,
    "Professionals looking to expand their skill set",
    level === "Beginner" ? "Complete newcomers to the field" : "Experienced practitioners seeking to level up"
  ];
  
  // Use a specific Pexels image
  const imageId = pexelsImageIds[index % pexelsImageIds.length];
  const image = `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;
  
  return {
    id,
    userId,
    title,
    description,
    category,
    image,
    price,
    level,
    status,
    whatYouLearn,
    requirements,
    targetAudience,
    language: "English",
    enrollments: [],
    analytics: {},
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
    updatedAt: new Date()
  };
});