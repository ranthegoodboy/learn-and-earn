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

    res
      .status(200)
      .json({ message: "Course retrieved successfully", data: course });
  } catch (error) {
    console.error("Error retrieving course:", error);
    res.status(500).json({ message: "Error retrieving course", error });
  }
};
