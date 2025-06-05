import useCoursesStore from "@/stores/courses-store";
import { produce } from "immer";
import { Plus, X } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const SectionChapterFrom = () => {
  const { courses, activeCourseIndex } = useCoursesStore((state) => state);
  const course = courses[activeCourseIndex];

  // Function to add new section
  const addSection = () => {
    useCoursesStore.setState(
      produce((state) => {
        state.courses[state.activeCourseIndex].sections.push({
          sectionTitle: "New Section",
          sectionDescription: "",
          chapters: [],
        });
      })
    );
  };

  // Function to update section field
  const updateSectionField = (
    sectionIndex: number,
    field: string,
    value: string
  ) => {
    useCoursesStore.setState(
      produce((state) => {
        state.courses[state.activeCourseIndex].sections[sectionIndex][field] =
          value;
      })
    );
  };

  // Function to add chapter to section
  const addChapter = (sectionIndex: number) => {
    useCoursesStore.setState(
      produce((state) => {
        state.courses[state.activeCourseIndex].sections[
          sectionIndex
        ].chapters.push({
          type: "video",
          title: "New Chapter",
          content: "",
          videoLength: 0,
          videoUrl: "",
          videoUniqueId: "",
          videoType: "",
        });
      })
    );
  };

  // Function to update chapter field
  const updateChapterField = (
    sectionIndex: number,
    chapterIndex: number,
    field: string,
    value: unknown
  ) => {
    useCoursesStore.setState(
      produce((state) => {
        state.courses[state.activeCourseIndex].sections[sectionIndex].chapters[
          chapterIndex
        ][field] = value;
      })
    );
  };

  // Function to remove chapter
  const removeChapter = (sectionIndex: number, chapterIndex: number) => {
    useCoursesStore.setState(
      produce((state) => {
        state.courses[state.activeCourseIndex].sections[
          sectionIndex
        ].chapters.splice(chapterIndex, 1);
      })
    );
  };

  // Function to remove section
  const removeSection = (sectionIndex: number) => {
    useCoursesStore.setState(
      produce((state) => {
        state.courses[state.activeCourseIndex].sections.splice(sectionIndex, 1);
      })
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Course Content</CardTitle>
          <Button onClick={addSection} size="sm">
            <Plus className="mr-2 h-4 w-4" /> Add Section
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {course.sections.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="border border-gray-200">
                <CardHeader className="flex flex-row items-center justify-between py-3">
                  <div className="space-y-2 w-full">
                    <Input
                      value={section.sectionTitle}
                      onChange={(e) =>
                        updateSectionField(
                          sectionIndex,
                          "sectionTitle",
                          e.target.value
                        )
                      }
                      placeholder="Section Title"
                      className="font-semibold"
                    />
                    <Textarea
                      value={section.sectionDescription}
                      onChange={(e) =>
                        updateSectionField(
                          sectionIndex,
                          "sectionDescription",
                          e.target.value
                        )
                      }
                      placeholder="Section Description"
                      className="text-sm"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => addChapter(sectionIndex)}
                      size="sm"
                      variant="outline"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => removeSection(sectionIndex)}
                      size="sm"
                      variant="destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {section.chapters.length === 0 ? (
                    <div className="text-center py-4 text-muted-foreground">
                      No chapters yet. Add your first chapter.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {section.chapters.map((chapter, chapterIndex) => (
                        <div
                          key={chapterIndex}
                          className="flex items-center justify-between border p-3 rounded-md"
                        >
                          <div className="flex-1">
                            <Input
                              value={chapter.title}
                              onChange={(e) =>
                                updateChapterField(
                                  sectionIndex,
                                  chapterIndex,
                                  "title",
                                  e.target.value
                                )
                              }
                              placeholder="Chapter Title"
                              className="mb-2"
                            />
                            <div className="grid grid-cols-2 gap-2">
                              <Input
                                value={chapter.videoUrl}
                                onChange={(e) =>
                                  updateChapterField(
                                    sectionIndex,
                                    chapterIndex,
                                    "videoUrl",
                                    e.target.value
                                  )
                                }
                                placeholder="Video URL"
                                className="text-xs"
                              />
                              <Input
                                type="number"
                                value={chapter.videoLength.toString()}
                                onChange={(e) =>
                                  updateChapterField(
                                    sectionIndex,
                                    chapterIndex,
                                    "videoLength",
                                    parseInt(e.target.value)
                                  )
                                }
                                placeholder="Duration (minutes)"
                                className="text-xs"
                              />
                            </div>
                          </div>
                          <Button
                            onClick={() =>
                              removeChapter(sectionIndex, chapterIndex)
                            }
                            size="sm"
                            variant="ghost"
                            className="ml-2"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {course.sections.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No sections yet. Add your first section to get started.
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button size="lg" className="w-full">
          Save Course
        </Button>
      </div>
    </div>
  );
};

export default SectionChapterFrom;
