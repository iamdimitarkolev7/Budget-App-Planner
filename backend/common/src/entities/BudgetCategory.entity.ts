import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { Budget } from './Budget.entity'
import { Expense } from './Expense.entity'
import { BaseEntity } from './base'
import { Category } from '../models'

@Entity()
export class BudgetCategory extends BaseEntity {
  @Column()
  name: Category

  @Column('decimal', { precision: 10, scale: 2 })
  monthlyLimit: number

  @ManyToOne(() => Budget, budget => budget.categories)
  budget: Budget

  @OneToMany(() => Expense, expense => expense.category)
  expenses: Expense[]
}
