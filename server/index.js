const { app } = require('../dist/server');
const PORT = process.env.PORT || 5001;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, (err) => {
  if (err) {
    return console.error(chalk.red(err));
  }

  return console.info(
      `Server running on port ${PORT}`
  );
});