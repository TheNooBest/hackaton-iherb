import { Controller, Get, Post, UseGuards, Request, Body, Param, Put, ForbiddenException } from '@nestjs/common';
import { AuthService, User, UsersService } from 'src/modules/auth';
import { Product, ProductAndCount } from 'src/modules/product';
import { ProductService } from 'src/modules/product/services';
import { LoginDto } from '../dto';
import { EditVitaminDto } from '../dto/edit-vitamin.dto';
import { JwtAuthGuard, LocalAuthGuard } from '../guards';

@Controller('user')
export class UserController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
        private readonly productService: ProductService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    public async login(@Request() req, @Body() loginDto: LoginDto): Promise<void> {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    public async updateVitamin(
        @Request() req,
        @Body() dto: EditVitaminDto,
    ): Promise<void> {
        const user: User = req.user;

        for (const vitamin of dto.payload) {
            if (user[vitamin.name] === undefined) {
                throw new ForbiddenException(`Unknown vitamin: ${vitamin.name}`);
            }
            user[vitamin.name] = vitamin.count;
        }

        await this.usersService.save(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('recommendations')
    public async getRecommendations(@Request() req): Promise<ProductAndCount[]> {
        const user: User = req.user;
        return this.productService.getRecommendations(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('contraindications')
    public async getContraindications(@Request() req): Promise<Product[]> {
        const user: User = req.user;
        return this.productService.getContraindications(user);
    }
}
