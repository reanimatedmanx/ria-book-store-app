export const withDebounce = (
  timer: NodeJS.Timeout,
  func: Function,
  delay: number
) => {
  if (timer) {
    return;
  }

  timer = setTimeout(function () {
    func();
    timer = undefined;
  }, delay);
};
