import { Options } from 'python-shell';
import { Logger } from '@nestjs/common'

const logger = new Logger('Python Shell', true)

export const config: Options = {
  mode: 'json',
  pythonPath: '/usr/local/anaconda3/envs/ig_django_app/bin/python', // Path to your local python virtual environment
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: './apps/backend/src/app/scripts', // Relative path is not ideal - set absolute path in tsconfig.ts
  stderrParser: (log) => logger.verbose(log), 
}
