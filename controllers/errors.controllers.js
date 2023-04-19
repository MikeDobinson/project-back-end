exports.handlePsqlErrors = (err, req, res, next) => {
  if (err.code === '22P02') {
    res.status(400).send({ msg: 'Bad request' });
  } else if (err.code === '23502') {
    res.status(400).send({ msg: 'Bad request' });
  } else if (err.code === '23503') {
    res.status(400).send({ msg: 'Bad request' });
  } else {
    next(err);
  }
};

exports.handleCustomErrors = (err, req, res, next) => {
  const { status, msg } = err;
  if (status && msg) {
    res.status(status).send({ msg });
  } else {
    next(err);
  }
};

exports.handleServerErrors = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: 'Internal server error' });
};
