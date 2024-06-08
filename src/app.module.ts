import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
@Module({
  imports: [TasksModule, UsersModule, PaymentsModule],
})
export class AppModule {}
