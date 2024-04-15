const { exec } = require('child_process');

function echo(input) {
    const command = `echo ${input}`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}

unsafeExec(process.argv[2]);
