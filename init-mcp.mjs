import { spawn } from 'child_process';

const child = spawn('npx', ['-y', '@_davideast/stitch-mcp', 'init', '-c', 'antigravity'], {
  stdio: ['pipe', 'inherit', 'inherit']
});

const sendEnter = (delay) => {
  return new Promise(resolve => {
    setTimeout(() => {
      child.stdin.write('\n');
      resolve();
    }, delay);
  });
};

(async () => {
  await sendEnter(2000); // Select Auth Mode
  await sendEnter(1000); // Where to store API Key
  await sendEnter(1000); // Enter API Key (empty)
  await sendEnter(1000); // Enter Project ID
  await sendEnter(1000); // Another prompt?
  await sendEnter(1000); // Another prompt?
  
  setTimeout(() => {
    child.stdin.end();
  }, 2000);
})();
