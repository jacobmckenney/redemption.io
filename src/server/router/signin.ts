import { z } from 'zod';
import { createRouter } from './context';
import { prisma } from "../../server/db/client"
export const userRouter = createRouter()
    .mutation("signup", {
        input: z.object({
            email: z.string(),
            password: z.string(),
        }),
        async resolve({ input }) {
            return await prisma.redemptionUser.create({ data: {...input}});
        }
    })
    .query("login", {
        input: z.object({
            email: z.string(),
            password: z.string(),
        }),
        async resolve({ input }) {
            return await prisma.redemptionUser.findUnique({ where: {
                email: input.email,
            }});
        }
    });