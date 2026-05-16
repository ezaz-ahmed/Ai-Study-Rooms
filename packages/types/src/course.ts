import { z } from 'zod';

export const courseSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(200),
  description: z.string().optional(),
  slug: z.string(),
  thumbnailUrl: z.string().url().optional(),
  instructorId: z.string(),
  published: z.boolean().default(false),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const createCourseSchema = courseSchema.omit({
  id: true,
  slug: true,
  published: true,
  createdAt: true,
  updatedAt: true,
});

export const sectionSchema = z.object({
  id: z.string(),
  courseId: z.string(),
  title: z.string().min(1),
  order: z.number().int().nonnegative(),
});

export const lessonSchema = z.object({
  id: z.string(),
  sectionId: z.string(),
  title: z.string().min(1),
  videoKey: z.string().optional(),
  order: z.number().int().nonnegative(),
  duration: z.number().int().nonnegative().optional(),
});

export type Course = z.infer<typeof courseSchema>;
export type CreateCourse = z.infer<typeof createCourseSchema>;
export type Section = z.infer<typeof sectionSchema>;
export type Lesson = z.infer<typeof lessonSchema>;
