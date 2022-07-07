import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../../server/db/client"

export const itemsRouter = createRouter()
  .mutation("create", {
    input: z.object({
      name: z.string(),
      make: z.string(),
      description: z.string(),
      price: z.number(),
      quantity: z.number()
    }),
    async resolve({ input }) {
      return await prisma.item.create({
        data: {...input}
      });
    },
  })
  .query("all", {
    async resolve({ ctx }) {
      return await ctx.prisma.item.findMany();
    },
  });
