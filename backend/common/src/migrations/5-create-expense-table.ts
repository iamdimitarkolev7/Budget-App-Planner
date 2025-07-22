import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateExpenseTable1753182079486 implements MigrationInterface {
  private readonly SQL_CREATE_EXPENSE_TABLE = `
    CREATE TABLE IF NOT EXISTS "public"."expense" (
      "id" SERIAL PRIMARY KEY,
      "description" VARCHAR NOT NULL,
      "amount" DECIMAL(10, 2) NOT NULL,
      "date" TIMESTAMP NOT NULL,
      "userId" INTEGER,
      "categoryId" INTEGER,
      "created_at" TIMESTAMP,
      "updated_at" TIMESTAMP
    );
  `

  private readonly SQL_DROP_EXPENSE_TABLE = `
    DROP TABLE IF EXISTS "public"."expense";
  `

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_CREATE_EXPENSE_TABLE)
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_DROP_EXPENSE_TABLE)
  }
}
