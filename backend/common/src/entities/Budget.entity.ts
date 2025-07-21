import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { BudgetCategory } from './BudgetCategory.entity'
import { User } from './User.entity'
import { BaseEntity } from './base'

@Entity()
export class Budget extends BaseEntity {
  @Column()
  month: number

  @Column()
  year: number

  @ManyToOne(() => User, user => user.budgets)
  user: User

  @OneToMany(() => BudgetCategory, category => category.budget, { cascade: true })
  categories: BudgetCategory[]
}
