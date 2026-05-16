import { z } from 'zod';

export const enrollmentSchema = z.object({
  id: z.string(),
  userId: z.string(),
  courseId: z.string(),
  enrolledAt: z.coerce.date(),
  lastWatchedAt: z.coerce.date().nullish(),
  reminderSentAt: z.coerce.date().nullish(),
});

export const createEnrollmentSchema = z.object({
  courseId: z.string(),
});

export const progressSchema = z.object({
  id: z.string(),
  enrollmentId: z.string(),
  lessonId: z.string(),
  completed: z.boolean().default(false),
  completedAt: z.coerce.date().nullish(),
  watchedSeconds: z.number().int().nonnegative().default(0),
});

export type Enrollment = z.infer<typeof enrollmentSchema>;
export type CreateEnrollment = z.infer<typeof createEnrollmentSchema>;
export type Progress = z.infer<typeof progressSchema>;
