const { execSync } = require('child_process');
execSync(`ls ${process.argv[2]}`, { stdio: 'inherit' });
