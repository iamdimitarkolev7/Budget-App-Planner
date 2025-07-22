import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import {
  Account,
  Budget,
  BudgetCategory,
  Expense,
  Report,
  User,
} from './entities'
import { TimestampSubscriber } from './event-subscribers'
import { AppDataSource } from './typeorm.config'

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [Account, Budget, BudgetCategory, Expense, Report, User],
      AppDataSource
    ),
  ],
  providers: [TimestampSubscriber],
  exports: [TypeOrmModule]
})
export class CommonModule { }
