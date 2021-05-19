import bcrypt from 'bcryptjs'

export const generateHash = async (text: string) => await bcrypt.hash(text, 10)

export const compareHash = async (password: string, hash: string) => await bcrypt.compare(password, hash)
