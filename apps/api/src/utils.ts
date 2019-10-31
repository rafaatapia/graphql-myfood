import { Types } from 'mongoose'
import { CheckExistenceOptions } from './types'

const isMongoId = (value: string): boolean => Types.ObjectId.isValid(value)

const checkExistence = async (
  opts: CheckExistenceOptions,
): Promise<boolean> => {
  const { model, models, field, value, where, message } = opts

  if (field === '_id' && !isMongoId(value)) {
    throw new Error(`Invalid ID value for '${value}'!`)
  }

  const exists = await models[model].exists(where || { [field]: value })

  if (!exists) {
    throw new Error(message || `${model} with ${field} '${value}' not found!`)
  }

  return exists
}

export { isMongoId, checkExistence }
