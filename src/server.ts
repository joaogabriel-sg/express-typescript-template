import { app } from './app';

app.listen(process.env.PORT, () =>
  console.log(`🔥 Server started at http://localhost:${process.env.PORT}`),
);
