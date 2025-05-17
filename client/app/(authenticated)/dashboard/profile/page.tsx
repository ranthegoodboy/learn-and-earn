"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import useCurrentUser from "@/hooks/auth/user-current-user";
import { useUserProfile } from "@/hooks/user/user-user-profile";

const profileFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address").optional(),
  about: z
    .string()
    .max(500, "About section must be less than 500 characters")
    .optional(),
  image: z.string().url("Must be a valid URL").optional(),
  experiences: z.array(z.string()).optional(),
  education: z.array(z.string()).optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function ProfilePage() {
  const user = useCurrentUser();

  const { data, isLoading } = useUserProfile(user?.id || "");
  const userProfile = data?.data;

  console.log("userProfile", userProfile);

  const [userId, setUserId] = useState<string | null>(null);
  const [experiences, setExperiences] = useState<string[]>([]);
  const [education, setEducation] = useState<string[]>([]);
  const [newExperience, setNewExperience] = useState("");
  const [newEducation, setNewEducation] = useState("");

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      email: "",
      about: "",
      image: "",
      experiences: [],
      education: [],
    },
  });

  useEffect(() => {
    if (userProfile) {
      setUserId(userProfile.id);

      form.reset({
        name: userProfile.name || "",
        email: userProfile.email || "",
        about: userProfile.about || "",
        image: userProfile.image || "",
        experiences: userProfile.experiences || [],
        education: userProfile.education || [],
      });
    }
  }, [userProfile, form]);

  const onSubmit = async (data: ProfileFormValues) => {
    if (!userId) return;

    try {
      // Add the experiences and education arrays to the form data
      const updatedData = {
        ...data,
        experiences,
        education,
      };

      await axios.put(`/api/users/${userId}`, updatedData);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update profile");
    } finally {
    }
  };

  const addExperience = () => {
    if (newExperience.trim()) {
      setExperiences([...experiences, newExperience]);
      setNewExperience("");
    }
  };

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const addEducation = () => {
    if (newEducation.trim()) {
      setEducation([...education, newEducation]);
      setNewEducation("");
    }
  };

  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            Manage your personal information and credentials
          </CardDescription>
        </CardHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" {...form.register("name")} />
                  {form.formState.errors.name && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    disabled
                    {...form.register("email")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Profile Image URL</Label>
                <Input
                  id="image"
                  placeholder="https://example.com/your-image.jpg"
                  {...form.register("image")}
                />
                {form.formState.errors.image && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.image.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="about">About</Label>
                <Textarea
                  id="about"
                  placeholder="Tell us about yourself"
                  className="min-h-[100px]"
                  {...form.register("about")}
                />
                {form.formState.errors.about && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.about.message}
                  </p>
                )}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Experience</h3>
              <div className="space-y-2">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-1 rounded-md border p-2">{exp}</div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeExperience(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <div className="flex gap-2">
                  <Input
                    placeholder="Add new experience"
                    value={newExperience}
                    onChange={(e) => setNewExperience(e.target.value)}
                  />
                  <Button type="button" onClick={addExperience}>
                    Add
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Education</h3>
              <div className="space-y-2">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-1 rounded-md border p-2">{edu}</div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeEducation(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <div className="flex gap-2">
                  <Input
                    placeholder="Add new education"
                    value={newEducation}
                    onChange={(e) => setNewEducation(e.target.value)}
                  />
                  <Button type="button" onClick={addEducation}>
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
