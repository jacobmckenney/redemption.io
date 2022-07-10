import { z } from 'zod';
import { createRouter } from './context';
import { prisma } from "../../server/db/client"
export const notesRouter = createRouter()
    .mutation("create", {
        input: z.object({
            userId: z.string(),
            title: z.string(),
            content: z.string(),
        }),
        async resolve({ input }) {
            return await prisma.note.create({ data: {...input}})
        }
    })
    .query("getByUser", {
        input: z.object({
            userId: z.string()
        }),
        async resolve({ input }) {
            return await prisma.note.findMany({ where: {
                userId: input.userId
            }});
        }
    })
    .mutation("delete", {
        input: z.object({
            id: z.string()
        }),
        async resolve({ input }) {
            return await prisma.note.delete({ where: { id: input.id}})
        }
    })
    .mutation("update", {
        input: z.object({
            id: z.string(),
            title: z.string(),
            content: z.string(),
        }),
        async resolve({ input }) {
            return await prisma.note.update({
                where: {
                    id: input.id
                },
                data: {
                    title: input.title,
                    content: input.content
                }
            })
        }
    })