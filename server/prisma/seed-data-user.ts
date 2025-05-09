import bcrypt from "bcrypt";

const saltRounds = 10;
const plainPassword = "123456";
const hashedPassword = bcrypt.hashSync(plainPassword, saltRounds);

const now = new Date();

export const usersSeed = [
  {
    id: "605f7f777777777777777701", // Predefined ObjectId
    googleId: null,
    email: "alice.johnson@example.com",
    name: "Alice Johnson",
    password: hashedPassword,
    emailVerified: new Date(now.setDate(now.getDate() - 10)), // 10 days ago
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    about:
      "A passionate software developer with 5 years of experience in web technologies. Loves hiking and photography.",
    experiences: [
      "Senior Frontend Developer at TechSolutions Inc. (2021-Present)",
      "Software Engineer at WebWorks Co. (2019-2021)",
      "Junior Developer at StartApp (2018-2019)",
    ],
    education: [
      "M.Sc. in Computer Science - Stanford University (2018)",
      "B.Sc. in Software Engineering - MIT (2016)",
    ],
    createdAt: new Date(now.setDate(now.getDate() - 30)), // 30 days ago
    updatedAt: new Date(now.setDate(now.getDate() - 5)), // 5 days ago
  },
  {
    id: "605f7f777777777777777702", // Predefined ObjectId
    googleId: null,
    email: "bob.smith@example.com",
    name: "Bob Smith",
    password: hashedPassword,
    emailVerified: new Date(now.setDate(now.getDate() - 12)),
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    about:
      "Data scientist enthusiastic about machine learning and AI. Enjoys playing chess and reading sci-fi novels.",
    experiences: [
      "Lead Data Scientist at DataCorp (2020-Present)",
      "Machine Learning Engineer at AI Innovations (2017-2020)",
    ],
    education: [
      "Ph.D. in Artificial Intelligence - Carnegie Mellon University (2017)",
      "M.Sc. in Data Science - University of California, Berkeley (2014)",
    ],
    createdAt: new Date(now.setDate(now.getDate() - 45)),
    updatedAt: new Date(now.setDate(now.getDate() - 3)),
  },
  {
    id: "605f7f777777777777777703", // Predefined ObjectId
    googleId: null,
    email: "carol.white@example.com",
    name: "Carol White",
    password: hashedPassword,
    emailVerified: new Date(now.setDate(now.getDate() - 5)),
    image:
      "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    about:
      "UX/UI designer focused on creating intuitive and beautiful user experiences. Avid traveler and foodie.",
    experiences: [
      "Principal UX Designer at Creative Designs LLC (2022-Present)",
      "UI/UX Specialist at UserFirst Ltd. (2019-2022)",
    ],
    education: [
      "Master of Design (MDes) in Interaction Design - Rhode Island School of Design (2019)",
      "Bachelor of Fine Arts (BFA) in Graphic Design - Pratt Institute (2017)",
    ],
    createdAt: new Date(now.setDate(now.getDate() - 20)),
    updatedAt: new Date(now.setDate(now.getDate() - 1)),
  },
  {
    id: "605f7f777777777777777704", // Predefined ObjectId
    googleId: null,
    email: "david.brown@example.com",
    name: "David Brown",
    password: hashedPassword,
    emailVerified: new Date(now.setDate(now.getDate() - 25)),
    image:
      "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    about:
      "Full-stack engineer with a knack for problem-solving and building scalable applications. Enjoys cycling and cooking.",
    experiences: [
      "Staff Engineer at ScaleUp Technologies (2021-Present)",
      "Full Stack Developer at DevHub (2018-2021)",
    ],
    education: [
      "B.Eng. in Computer Engineering - University of Waterloo (2018)",
    ],
    createdAt: new Date(now.setDate(now.getDate() - 60)),
    updatedAt: new Date(now.setDate(now.getDate() - 10)),
  },
  {
    id: "605f7f777777777777777705", // Predefined ObjectId
    googleId: null,
    email: "eva.green@example.com",
    name: "Eva Green",
    password: hashedPassword,
    emailVerified: new Date(now.setDate(now.getDate() - 8)),
    image:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    about:
      "Digital marketing specialist with expertise in SEO, SEM, and content strategy. Loves yoga and painting.",
    experiences: [
      "Digital Marketing Manager at MarketGrowth Agency (2020-Present)",
      "SEO Analyst at TopRank Solutions (2018-2020)",
    ],
    education: [
      "MBA in Marketing - Northwestern University, Kellogg School of Management (2018)",
      "B.A. in Communications - University of Southern California (2016)",
    ],
    createdAt: new Date(now.setDate(now.getDate() - 15)),
    updatedAt: new Date(now.setDate(now.getDate() - 2)),
  },
  {
    id: "605f7f777777777777777706", // Predefined ObjectId
    googleId: null,
    email: "frank.miller@example.com",
    name: "Frank Miller",
    password: hashedPassword,
    emailVerified: new Date(now.setDate(now.getDate() - 18)),
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    about:
      "Cybersecurity expert dedicated to protecting digital assets. Amateur astronomer and history buff.",
    experiences: [
      "Senior Security Analyst at SecureNet Corp (2019-Present)",
      "IT Security Specialist at ProtectData Ltd. (2016-2019)",
    ],
    education: [
      "M.S. in Cybersecurity - Georgia Institute of Technology (2016)",
      "B.S. in Information Technology - Purdue University (2014)",
    ],
    createdAt: new Date(now.setDate(now.getDate() - 35)),
    updatedAt: new Date(now.setDate(now.getDate() - 7)),
  },
  {
    id: "605f7f777777777777777707", // Predefined ObjectId
    googleId: null,
    email: "grace.lee@example.com",
    name: "Grace Lee",
    password: hashedPassword,
    emailVerified: new Date(now.setDate(now.getDate() - 22)),
    image:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    about:
      "Product manager with a passion for building user-centric products. Enjoys rock climbing and learning new languages.",
    experiences: [
      "Head of Product at InnovateX (2021-Present)",
      "Product Owner at AgileCreations (2018-2021)",
    ],
    education: [
      "Master of Business Administration (MBA) - Harvard Business School (2018)",
      "B.A. in Economics - Yale University (2015)",
    ],
    createdAt: new Date(now.setDate(now.getDate() - 50)),
    updatedAt: new Date(now.setDate(now.getDate() - 4)),
  },
  {
    id: "605f7f777777777777777708", // Predefined ObjectId
    googleId: null,
    email: "henry.wilson@example.com",
    name: "Henry Wilson",
    password: hashedPassword,
    emailVerified: new Date(now.setDate(now.getDate() - 1)),
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    about:
      "Cloud solutions architect specializing in AWS and Azure. Loves playing guitar and brewing craft beer.",
    experiences: [
      "Principal Cloud Architect at Cloudify Inc. (2020-Present)",
      "DevOps Engineer at Serverless Solutions (2017-2020)",
    ],
    education: [
      "B.S. in Cloud Computing - Western Governors University (2017)",
    ],
    createdAt: new Date(now.setDate(now.getDate() - 28)),
    updatedAt: new Date(now.setDate(now.getDate() - 6)),
  },
  {
    id: "605f7f777777777777777709", // Predefined ObjectId
    googleId: null,
    email: "isabel.garcia@example.com",
    name: "Isabel Garcia",
    password: hashedPassword,
    emailVerified: new Date(now.setDate(now.getDate() - 16)),
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    about:
      "Mobile app developer (iOS & Android) with a keen eye for detail. Enjoys photography and volunteering.",
    experiences: [
      "Lead Mobile Developer at AppMakers Co. (2022-Present)",
      "iOS Developer at SwiftApps (2019-2022)",
      "Android Developer Intern at MobileFirst (2018-2019)",
    ],
    education: [
      "Certificate in Mobile Development - Udacity Nanodegree (2018)",
      "B.Sc. in Computer Science - University of Texas at Austin (2017)",
    ],
    createdAt: new Date(now.setDate(now.getDate() - 40)),
    updatedAt: new Date(now.setDate(now.getDate() - 8)),
  },
  {
    id: "605f7f777777777777777710", // Predefined ObjectId
    googleId: null,
    email: "jack.martin@example.com",
    name: "Jack Martin",
    password: hashedPassword,
    emailVerified: new Date(now.setDate(now.getDate() - 3)),
    image:
      "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    about:
      "Game developer and designer, passionate about creating immersive gaming experiences. Loves eSports and board games.",
    experiences: [
      "Senior Game Designer at Playful Interactive (2020-Present)",
      "Unity Developer at IndieGame Studio (2017-2020)",
    ],
    education: [
      "M.A. in Game Design - New York University (NYU) Tisch School of the Arts (2017)",
      "B.S. in Computer Science with Game Development focus - DigiPen Institute of Technology (2015)",
    ],
    createdAt: new Date(now.setDate(now.getDate() - 10)),
    updatedAt: new Date(now.setDate(now.getDate() - 1)),
  },
];

export const userIds = usersSeed.map((user) => user.id);
