import { DataSource } from 'typeorm'
import { AppDataSource } from '../typeorm.config'

export const runMigrations = async () => {
  try {
    const dataSource: DataSource = await AppDataSource.initialize()
    console.log('Connected to database. Running migrations...')

    const migrations = await dataSource.runMigrations()
    migrations.forEach(migration =>
      console.log(`Migration executed: ${migration.name}`)
    )

    console.log('All migrations completed successfully.')
    await dataSource.destroy()
  } catch (error) {
    console.error('Error during migration:', error)
    process.exit(1)
  }
}

runMigrations()
