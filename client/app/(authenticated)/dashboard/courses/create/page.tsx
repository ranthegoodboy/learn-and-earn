"use client";
import SectionChapterFrom from "@/components/create-course/section-chapter-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { categories, languages, levels } from "@/config/course-config";
import { debounce } from "@/lib/utils";
import { courseFormSchema } from "@/schemas/course-schemas";
import useCoursesStore from "@/stores/courses-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { produce } from "immer";
import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

type CourseFormValues = z.infer<typeof courseFormSchema>;

const CreateNewCoursePage = () => {
  const { courses, activeCourseIndex, addCourse } = useCoursesStore(
    (state) => state
  );
  const isInitialized = useRef(false);
  const [newItem, setNewItem] = useState("");
  const [activeArrayField, setActiveArrayField] = useState<string | null>(null);

  useEffect(() => {
    if (courses.length < 1 && !isInitialized.current) {
      addCourse();
      isInitialized.current = true;
    }
  }, [courses, addCourse]);

  const course = courses[activeCourseIndex];

  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      title: course?.title || "",
      description: course?.description || "",
      category: course?.category || "uncategorized",
      image: course?.image || "",
      price: course?.price || 0,
      level: course?.level || "intermediate",
      language: course?.language || "",
    },
  });

  // Update form when course changes
  // useEffect(() => {
  //   if (course) {
  //     console.log("22222222222222222");
  //     form.reset({
  //       title: course.title,
  //       description: course.description,
  //       category: course.category,
  //       image: course.image,
  //       price: course.price,
  //       level: course.level,
  //       language: course.language,
  //     });
  //   }
  // }, [course, form]);

  // Function to update course field
  const updateCourseField = (field: string, value: unknown) => {
    useCoursesStore.setState(
      produce((state) => {
        state.courses[state.activeCourseIndex][field] = value;
      })
    );
  };

  const debouncedUpdateCourseField = debounce(updateCourseField, 500);

  // Function to add item to array field
  const addItemToArrayField = (field: string, item: string) => {
    if (!item.trim()) return;

    useCoursesStore.setState(
      produce((state) => {
        state.courses[state.activeCourseIndex][field].push(item.trim());
      })
    );
    setNewItem("");
  };

  // Function to remove item from array field
  const removeItemFromArrayField = (field: string, index: number) => {
    useCoursesStore.setState(
      produce((state) => {
        state.courses[state.activeCourseIndex][field].splice(index, 1);
      })
    );
  };

  const onSubmit = (data: CourseFormValues) => {
    // Update all form fields in the store
    Object.entries(data).forEach(([key, value]) => {
      debouncedUpdateCourseField(key, value);
    });
  };

  if (!course) return null;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Course</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Course Details Column */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Course title"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              debouncedUpdateCourseField(
                                "title",
                                e.target.value
                              );
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Course description"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              debouncedUpdateCourseField(
                                "description",
                                e.target.value
                              );
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              debouncedUpdateCourseField("category", value);
                            }}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem
                                  key={category.value}
                                  value={category.value}
                                >
                                  {category.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Level</FormLabel>
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              debouncedUpdateCourseField("level", value);
                            }}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {levels.map((level) => (
                                <SelectItem
                                  key={level.value}
                                  value={level.value}
                                >
                                  {level.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price ($)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Course price"
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                debouncedUpdateCourseField(
                                  "price",
                                  parseFloat(e.target.value)
                                );
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="language"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Language</FormLabel>
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              debouncedUpdateCourseField("language", value);
                            }}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select language" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {languages.map((language) => (
                                <SelectItem
                                  key={language.value}
                                  value={language.value}
                                >
                                  {language.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Course image URL"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              debouncedUpdateCourseField(
                                "image",
                                e.target.value
                              );
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter a URL for the course thumbnail image
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Array fields */}
                  <div className="space-y-4">
                    {/* What You'll Learn */}
                    <div>
                      <FormLabel>{`What You'll Learn`}</FormLabel>
                      <div className="flex flex-wrap gap-2 mt-2 mb-2">
                        {course.whatYouLearn.map((item, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="px-3 py-1"
                          >
                            {item}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="ml-1 h-4 w-4 p-0"
                              onClick={() =>
                                removeItemFromArrayField("whatYouLearn", index)
                              }
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add learning objective"
                          value={
                            activeArrayField === "whatYouLearn" ? newItem : ""
                          }
                          onChange={(e) => {
                            setActiveArrayField("whatYouLearn");
                            setNewItem(e.target.value);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              addItemToArrayField("whatYouLearn", newItem);
                            }
                          }}
                        />
                        <Button
                          type="button"
                          onClick={() =>
                            addItemToArrayField("whatYouLearn", newItem)
                          }
                          size="sm"
                        >
                          Add
                        </Button>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <FormLabel>Requirements</FormLabel>
                      <div className="flex flex-wrap gap-2 mt-2 mb-2">
                        {course.requirements.map((item, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="px-3 py-1"
                          >
                            {item}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="ml-1 h-4 w-4 p-0"
                              onClick={() =>
                                removeItemFromArrayField("requirements", index)
                              }
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add requirement"
                          value={
                            activeArrayField === "requirements" ? newItem : ""
                          }
                          onChange={(e) => {
                            setActiveArrayField("requirements");
                            setNewItem(e.target.value);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              addItemToArrayField("requirements", newItem);
                            }
                          }}
                        />
                        <Button
                          type="button"
                          onClick={() =>
                            addItemToArrayField("requirements", newItem)
                          }
                          size="sm"
                        >
                          Add
                        </Button>
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <FormLabel>Target Audience</FormLabel>
                      <div className="flex flex-wrap gap-2 mt-2 mb-2">
                        {course.targetAudience.map((item, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="px-3 py-1"
                          >
                            {item}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="ml-1 h-4 w-4 p-0"
                              onClick={() =>
                                removeItemFromArrayField(
                                  "targetAudience",
                                  index
                                )
                              }
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add target audience"
                          value={
                            activeArrayField === "targetAudience" ? newItem : ""
                          }
                          onChange={(e) => {
                            setActiveArrayField("targetAudience");
                            setNewItem(e.target.value);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              addItemToArrayField("targetAudience", newItem);
                            }
                          }}
                        />
                        <Button
                          type="button"
                          onClick={() =>
                            addItemToArrayField("targetAudience", newItem)
                          }
                          size="sm"
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Save Course Details
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Sections and Chapters Column */}
        <SectionChapterFrom />
      </div>
    </div>
  );
};

export default CreateNewCoursePage;
