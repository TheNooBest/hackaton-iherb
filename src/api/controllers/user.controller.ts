import { Controller, Get, Post, UseGuards, Request, Body, Param, Put } from '@nestjs/common';
import { AuthService } from 'src/modules/auth';
import { LoginDto } from '../dto';
import { JwtAuthGuard, LocalAuthGuard } from '../guards';

@Controller('user')
export class UserController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    public async login(@Request() req, @Body() loginDto: LoginDto): Promise<void> {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':vitamin')
    public async updateVitamin(@Param('vitamin') vitamin: string): Promise<void> {

    }

    @UseGuards(JwtAuthGuard)
    @Get('recommendations')
    public async getRecommendations(): Promise<void> {

    }

    @UseGuards(JwtAuthGuard)
    @Get('contraindications')
    public async getContraindications(): Promise<void> {
        
    }
}
