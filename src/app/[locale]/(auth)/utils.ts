import { createHash, randomBytes } from "crypto";

/**
 * Hashes a password using a randomly generated salt and SHA256 algorithm.
 * @param password - The password to be hashed.
 * @returns An object containing the salt and hash of the password.
 */
export async function hashPassword(
  password: string
): Promise<{ salt: string; hash: string }> {
  const salt = randomBytes(16).toString("hex");
  const hash = createHash("sha256")
    .update(password + salt)
    .digest("hex");
  return { salt, hash } as const;
}

/**
 * Verifies if a given password matches the stored hash and salt.
 * @param storedHash - The stored hash to compare with.
 * @param storedSalt - The stored salt to use in the comparison.
 * @param passwordAttempt - The password attempt to compare with the stored hash and salt.
 * @returns A Promise that resolves to a boolean indicating whether the password attempt matches the stored hash and salt.
 */
export async function verifyPassword(
  storedHash: string,
  storedSalt: string,
  passwordAttempt: string
): Promise<boolean> {
  const hash = createHash("sha256")
    .update(passwordAttempt + storedSalt)
    .digest("hex");
  return storedHash === hash;
}
