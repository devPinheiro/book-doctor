import app from "./app";

const PORT = process.env.PORT || 3088; 

// finally, let's start our server...
app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`);
  
});