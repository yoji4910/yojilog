import bycrypt from 'bcryptjs'

const SALT_ROUNDS = 10

export const saltAndHashPassword = async (
  password: string,
): Promise<string> => {
  return await bycrypt.hash(password, SALT_ROUNDS)
}

export const verifyPassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bycrypt.compare(password, hashedPassword)
}
