import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'
import { join } from 'path'
import { Account, Budget, BudgetCategory, Expense, Report, User } from './entities'

dotenv.config({ path: process.env.ENV_PATH || '.env' })

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '5432'),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Account, Budget, BudgetCategory, Expense, Report, User],
  migrations: [join(__dirname, 'migrations/*.ts')],
})
