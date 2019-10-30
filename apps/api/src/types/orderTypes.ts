import { Schema, Document } from 'mongoose'
import { User } from '.'

export enum OrderStatus {
  WAITING_PAYMENT,
  IN_QUEUE,
  PREPARING,
  READY,
  ON_THE_WAY,
  DELIVERED,
}

export interface Order {
  id: Schema.Types.ObjectId
  user: User
  total: number
  status: OrderStatus
  createdAt: string
  updateAt: string
}

export interface OrderDocument extends Order, Document {
  id: Schema.Types.ObjectId
}
