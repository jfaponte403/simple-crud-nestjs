import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {LoggerMiddleware} from "./logger/logger.middleware";
import {AuthMiddleware} from "./auth/auth.middleware";

@Module({})
export class UsersModule implements NestModule {

    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes(
                {path: '/users', method: RequestMethod.GET},
                {path: '/users', method: RequestMethod.POST}
            )
            .apply(AuthMiddleware)
            .forRoutes(
                'users'
            )
    }
}
