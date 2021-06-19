import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('product')
export class ProductController {
    constructor() {}

    @Get(':id')
    public async getProduct(@Param('id', ParseIntPipe) id: number): Promise<void> {

    }
}
