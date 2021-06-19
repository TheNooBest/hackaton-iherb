import { Controller, Get } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class IndexController {
    constructor() {}

    @ApiExcludeEndpoint()
    @Get()
    public async index(): Promise<string> {
        return 'Hello, world!';
    }
}
