import { PrismaClient } from "db"
import { PrismaD1 } from "@prisma/adapter-d1"

const prisma = new PrismaClient()

export { prisma, PrismaD1 }
export * from "../generated/prisma"
