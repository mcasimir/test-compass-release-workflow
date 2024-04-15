const { execSync } = require('child_process');

function ls(input) {
    const command = `ls ${input}`;
    console.log(execSync(command, { encoding: 'utf-8' }));
}

ls(process.argv[2]);
