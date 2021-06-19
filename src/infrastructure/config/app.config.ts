import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    port: Number.parseInt(process.env.PORT) || 3000,
    env: process.env.ENV || 'dev'
}));
