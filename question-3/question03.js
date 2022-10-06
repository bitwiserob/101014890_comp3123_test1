const fs = require("fs");
const createLogs = () => {
  const dir = "../logs";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  process.chdir(dir);
  for (let i = 0; i < 10; i++) {
    fs.writeFile(`log${i}.txt`, `log file number ${i}`, (err) =>
      err ? console.error(`Error creating file 'log${i}.txt'`) : console.log(`Create file -> log${i}.txt`)
    );
  }
};
const removeLogs = () => {
  const dir = "../logs";
  if (fs.existsSync(dir)) {
    process.chdir(dir);
    fs.readdir(process.cwd(), (err, files) => {
      files.forEach((file) => {
        fs.unlink(file, (err) =>
          err ? console.error(`Error deleting file '${file}'`) : console.log(`Delete file -> ${file}`)
        );

      });

    });
  }

  
};

createLogs();
removeLogs();
