export default function checkEmailRegex(email: string): boolean {
  const regExp = /[^@]+@[^\.]+\..+/i;
  return regExp.test(email);
};