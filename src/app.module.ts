import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from "./tasks/tasks.controller";
import { TasksService} from "./tasks/tasks.service";
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import {PrismaService} from "./prisma.service";

@Module({
  imports: [AuthModule, TasksModule, UsersModule, PaymentsModule],
  controllers: [AppController, TasksController, UsersController],
  providers: [AppService, TasksService, UsersService, PrismaService],
})
export class AppModule {}
