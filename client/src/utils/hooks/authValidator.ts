export default function authValidator(name: string, value: string) {
  if (name === 'email') {
    const result = value.includes('@') && value.includes('.');
    return result ? true : false;
  }
  if (name === 'password') {
    const result = value.length >= 4;
    return result ? true : false;
  }
}
