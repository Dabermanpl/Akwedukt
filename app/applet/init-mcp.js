import { spawn } from 'child_process';

const child = spawn('npx', ['-y', '@_davideast/stitch-mcp', 'init', '-c', 'antigravity'], {
  stdio: ['pipe', 'inherit', 'inherit']
});

setTimeout(() => {
  // Send Enter for Authentication Mode (API Key)
  child.stdin.write('\n');
  
  setTimeout(() => {
    // Send Enter for API Key prompt (empty or default)
    child.stdin.write('\n');
    
    setTimeout(() => {
      // Send Enter for Project ID prompt
      child.stdin.write('\n');
      
      setTimeout(() => {
        child.stdin.end();
      }, 1000);
    }, 1000);
  }, 1000);
}, 2000);
