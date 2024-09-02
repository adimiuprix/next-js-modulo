"use server"

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function newUser({ name, email }) {
    try {
        await prisma.user.create({
            data: { name, email },
        })
        revalidatePath('/prisma/tampil')
        redirect('/prisma/tampil');
    } catch (error) {
        console.log(error);
    }
    redirect('/prisma/tampil');
}