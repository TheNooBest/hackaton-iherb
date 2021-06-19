import { Controller, Get } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { HealthCheckService, HealthCheckResult } from '@nestjs/terminus';

@Controller('health')
export class HealthCheckController {
    constructor(private readonly healthCheckService: HealthCheckService) {}

    @ApiExcludeEndpoint()
    @Get()
    public healthCheck(): Promise<HealthCheckResult> {
        return this.healthCheckService.check([]);
    }
}
