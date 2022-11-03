export const useMaskingName = (name: string | undefined) => {
  if (!name) return;
  if (name.length === 2) {
    return name.replace(name.slice(-1), '*');
  } else if (name.length === 3) {
    return name.replace(name.slice(1, 2), '*');
  } else {
    const first = name.slice(0, 1);
    const middle = name.slice(1, -1);
    const last = name.slice(-1);
    let masking = '';

    for (let i = 0; i < middle.length; i++) {
      if (middle.charAt(i) === ' ') {
        masking += ' ';
      } else {
        masking += '*';
      }
    }

    return first + masking + last;
  }
};
