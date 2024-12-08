import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export const saltAndHashPassword = async (
  password: string,
): Promise<string> => {
  return await bcrypt.hash(password, SALT_ROUNDS)
}

export const verifyPassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword)
}
