import { Column, PrimaryGeneratedColumn } from 'typeorm'

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'created_at', type: 'timestamp', nullable: true })
  createdAt: Date

  @Column({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt: Date
}