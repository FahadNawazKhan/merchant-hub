import z from 'zod'

export const addtoCartSchema = z.object({
    productId : z.string().min(1),
    quantity: z.number().positive()
})

