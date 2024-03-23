import shelljs from 'shelljs';

const clearDist = () => new Promise((resolve) => {
  shelljs.rm('-rf', 'dist');
  resolve();
})


const clearTmp = () => new Promise((resolve) => {
  shelljs.rm('-rf', '.tmp');
  resolve();
})

export const clearBeforeBuild = async () => {
  // await clearDist();
  await clearTmp();
}

export const clearAfterBuild = async () => {
  await clearTmp();
}

process.argv.forEach(function (val, index) {
  if (index === 2 || index === 3) {
    if (val === '-d') {
      clearDist();
    }
    if (val === '-t') {
      clearTmp();
    }
  }
});