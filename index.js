// @ts-nocheck
const cluster = require("cluster");
const os = require("os");

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log(`cpu core length, ${numCPUs}`);
  console.log(`Primary ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  const app = require("./src/app");
  const PORT = process.env?.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} started`);
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}
