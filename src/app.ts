import express from 'express'

const app = express()

app.get('/', (_, response) => {
  return response.send({
    status: 200,
    message: `Welcome to Tele-consult` 
  });
});

app.use((_, _req, next) => {
  const error: Error = new Error('You are trying to access a wrong Route');
  next(error);
});

app.use((error: { status: string; name: string; message: string; }, _request: any, response: { status: (arg0: any) => void; json: (arg0: { status: any; error: any; message: any; }) => void; }, next: () => void) => {
  response.status(error.status || 500);
  response.json({
    status: error.status || 500,
    error: error.name,
    message: error.message
  });
  next()
});

export default app