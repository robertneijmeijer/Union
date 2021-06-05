export function debounce(func: Function, delay: number): Function {
  let timeout: number | undefined = undefined;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}
