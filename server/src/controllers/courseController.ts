import { Request, Response } from "express";
import { db } from "../lib/db";

export const listCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const keyword = req.query.keyword as string | undefined;

    const categories = req.query.category
      ? Array.isArray(req.query.category)
        ? (req.query.category as string[])
        : [req.query.category as string]
      : undefined;

    const level = req.query.level as string | undefined;
    const priceFilter = req.query.price as string | undefined;
    const sortBy = req.query.sortBy as string | undefined;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 9;
    const skip = (page - 1) * limit;

    let where: any = { isPublished: true };
    let orderBy: any = { createdAt: "desc" };

    if (keyword) {
      where.OR = [
        { title: { contains: keyword, mode: "insensitive" } },
        { description: { contains: keyword, mode: "insensitive" } },
      ];
    }

    switch (sortBy) {
      case "price_asc":
        orderBy = { price: "asc" };
        break;
      case "price_desc":
        orderBy = { price: "desc" };
        break;
      default:
        orderBy = { createdAt: "desc" };
    }

    if (categories) {
      where.category = {
        in: categories,
      };
    }

    switch (level) {
      case "advanced":
        where.level = "Advanced";
        break;
      case "intermediate":
        where.level = "Intermediate";
        break;
      case "beginner":
        where.level = "Beginner";
        break;
    }

    if (priceFilter) {
      switch (priceFilter) {
        case "free":
          where.price = 0;
          break;
        case "paid":
          where.price = {
            gt: 0,
          };
          break;
      }
    }

    const [courses, total] = await Promise.all([
      db.course.findMany({
        where,
        select: {
          id: true,
          title: true,
          description: true,
          category: true,
          image: true,
          price: true,
          level: true,
          createdAt: true,
          updatedAt: true,
          whatYouLearn: true,
          requirements: true,
          targetAudience: true,
          language: true,
          sections: {
            select: {
              sectionDescription: true,
              sectionTitle: true,
              chapters: {
                select: {
                  title: true,
                  videoLength: true,
                },
              },
            },
          },
          author: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
        orderBy,
        skip,
        take: limit,
      }),
      db.course.count({ where }),
    ]);

    res.status(200).json({
      message: "Courses retrieved successfully",
      data: courses,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error retrieving courses:", error);
    res.status(500).json({ message: "Error retrieving courses", error });
  }
};

export const myCourses = async (req: Request, res: Response) => {
  const user = req.user as any;
  const userId = user.id;

  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 9;
  const skip = (page - 1) * limit;

  try {
    const courses = await db.course.findMany({
      where: {
        userId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        sections: {
          select: {
            sectionDescription: true,
            sectionTitle: true,
            chapters: {
              select: {
                title: true,
                videoLength: true,
              },
            },
          },
        },
        enrollments: {
          select: {
            id: true,
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      skip,
      take: limit,
    });

    res.status(200).json({
      message: "Courses retrieved successfully",
      data: {
        courses,
        total: courses.length,
        page,
        limit,
        totalPages: Math.ceil(courses.length / limit),
      },
    });
  } catch (error) {
    console.error("Error retrieving courses:", error);
    res.status(500).json({ message: "Error retrieving courses", error });
  }
};

export const getCourseOverview = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { courseId } = req.params;

  try {
    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        image: true,
        price: true,
        level: true,
        createdAt: true,
        updatedAt: true,
        whatYouLearn: true,
        requirements: true,
        targetAudience: true,
        language: true,
        sections: {
          select: {
            sectionDescription: true,
            sectionTitle: true,
            chapters: {
              select: {
                title: true,
                videoLength: true,
              },
            },
          },
        },
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }

    res.status(200).json({
      message: "Course overview retrieved successfully",
      data: course,
    });
  } catch (error) {
    console.error("Error retrieving course:", error);
    res
      .status(500)
      .json({ message: "Error retrieving course overview", error });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  const {
    userId,
    title,
    description,
    category,
    image,
    price,
    level,
    isPublished,
    whatYouLearn,
    requirements,
    targetAudience,
    language,
    embeddings,
  } = req.body;

  if (!userId) {
    res.status(404).json({ message: "UserId required" });
    return;
  }

  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const createCourse = await db.$transaction(async (tx) => {
      const course = await tx.course.create({
        data: {
          title,
          description,
          category,
          image,
          price,
          level,
          isPublished,
          whatYouLearn,
          requirements,
          targetAudience,
          language,
          embeddings,
          userId: userId,
          sections: {
            create: req.body.sections.map((section: any) => ({
              sectionTitle: section.sectionTitle,
              sectionDescription: section.sectionDescription,
              chapters: {
                create: section.chapters.map((chapter: any) => ({
                  type: chapter.type,
                  title: chapter.title,
                  content: chapter.content,
                  videoLength: chapter.videoLength,
                  videoUrl: chapter.videoUrl,
                  videoUniqueId: chapter.videoUniqueId,
                  videoType: chapter.videoType,
                })),
              },
            })),
          },
        },
        include: {
          sections: {
            include: {
              chapters: true,
            },
          },
        },
      });

      return course;
    });

    res.status(200).json({
      message: "Course created successfully",
      data: createCourse,
    });
  } catch (error) {
    console.error("Error creating a course:", error);
    res.status(500).json({ message: "Error creating a course", error });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  const { courseId } = req.body;
  const user = req.user as any;
  const userId = user.id;

  if (!courseId) {
    res.status(404).json({ message: "UserId required" });
    return;
  }

  try {
    const course = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
    });

    if (!course) {
      res.status(404).json({
        message: "Course not found or you don't have permission to delete it.",
      });
      return;
    }

    await db.$transaction(async (tx) => {
      await tx.enrollment.deleteMany({
        where: { courseId },
      });

      await tx.userCourseProgress.deleteMany({
        where: {
          course: { id: courseId },
        },
      });

      await tx.comment.deleteMany({
        where: {
          chapter: {
            Section: {
              courseId: courseId,
            },
          },
        },
      });

      await tx.course.delete({
        where: { id: courseId },
      });
    });

    await db.course.delete({
      where: {
        id: courseId,
      },
    });

    res.status(200).json({
      message: "Course deleted successfully",
      data: {
        id: course.id,
        title: course.title,
      },
    });
  } catch (error) {
    console.error("Error deleting a course:", error);
    res.status(500).json({ message: "Error deleting a course", error });
  }
};
