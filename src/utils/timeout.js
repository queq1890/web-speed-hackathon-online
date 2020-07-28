const timeout = (longTask, graceMilliseconds) => {
  const grace = new Promise((resolve, _) => {
    setTimeout(resolve, graceMilliseconds, 'timeout');
  });

  return Promise.race([longTask, grace])
    .then((value) => {
      return value;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export default timeout;
