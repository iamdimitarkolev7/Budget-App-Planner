import { Column, Entity, OneToOne, RelationId } from 'typeorm'
import { User } from './User.entity'
import { BaseEntity } from './base'

@Entity()
export class Account extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  email: string

  @Column({ type: 'varchar' })
  password: string

  @OneToOne(() => User)
  user: User

  @RelationId((account: Account) => account.user)
  userId: number
}