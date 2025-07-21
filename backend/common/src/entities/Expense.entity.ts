import { Column, Entity, ManyToOne } from 'typeorm'
import { BudgetCategory } from './BudgetCategory.entity'
import { User } from './User.entity'
import { BaseEntity } from './base'

@Entity()
export class Expense extends BaseEntity {
  @Column()
  description: string

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number

  @Column()
  date: Date

  @ManyToOne(() => User, user => user.expenses)
  user: User

  @ManyToOne(() => BudgetCategory, category => category.expenses)
  category: BudgetCategory
}
