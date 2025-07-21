import { Column, Entity, ManyToOne } from 'typeorm'
import { User } from './User.entity'
import { ReportType } from '../models'
import { BaseEntity } from './base'

@Entity()
export class Report extends BaseEntity {
  @Column()
  month: number

  @Column()
  year: number
  
  @Column()
  s3Url: string

  @Column()
  type: ReportType

  @ManyToOne(() => User, user => user.reports)
  user: User
}
