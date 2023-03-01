import { User } from "./AuthContextRequirements"

type category = {
  id: string
  title: string
}

type photo = {
  Category: category
  User: User
  categoryId  : string
  created_at: string
  description: string
  id: string
  photo: string
  title: string
  updated_at: string
  userId: string
  views : number
}

export type {category, photo}