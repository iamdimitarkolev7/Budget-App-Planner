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

@Module({
  imports: [
    TypeOrmModule.forFeature([Account, Budget, BudgetCategory, Expense, Report, User]),
    TypeOrmModule,
  ],
  providers: [TimestampSubscriber],
  exports: [
    TypeOrmModule,
    Account,
    Budget,
    BudgetCategory,
    Expense,
    Report,
    User,
  ]
})
export class CommonModule { }
