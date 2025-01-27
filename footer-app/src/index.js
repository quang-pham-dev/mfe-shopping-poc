// Initialize the app
import("./bootstrap")
  .then(() => {
    console.log("Footer app bootstrapped successfully");
  })
  .catch(err => {
    console.error("Error bootstrapping footer app:", err);
  });