import { AppDataSource } from '../typeorm.config'

async function revertLastMigration() {
  try {
    const dataSource = await AppDataSource.initialize()
    console.log('Reverting last migration...')

    await dataSource.undoLastMigration()
    console.log('Last migration reverted successfully.')

    await dataSource.destroy()
  } catch (error) {
    console.error('Error during revert:', error)
    process.exit(1)
  }
}

revertLastMigration()
