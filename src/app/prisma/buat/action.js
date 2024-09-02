'use server'

import prisma from "@/lib/prisma";

async function handleClick() {
    const user = await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io',
      },
    })

    return user
}
export default handleClick