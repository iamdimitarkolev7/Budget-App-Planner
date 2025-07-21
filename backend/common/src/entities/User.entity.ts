import {
  Entity,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm'
import { Account } from './Account.entity'
import { Expense } from './Expense.entity'
import { Budget } from './Budget.entity'
import { Report } from './Report.entity'
import { BaseEntity } from './base'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  timezone: string

  @OneToOne(() => Account, account => account.user, { cascade: true })
  @JoinColumn()
  account: Account

  @OneToMany(() => Budget, budget => budget.user)
  budgets: Budget[]

  @OneToMany(() => Expense, expense => expense.user)
  expenses: Expense[]

  @OneToMany(() => Report, report => report.user)
  reports: Report[]
}
