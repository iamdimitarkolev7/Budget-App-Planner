import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateBudgetTable1753174702554 implements MigrationInterface {
  private readonly SQL_CREATE_BUDGET_TABLE = `
    CREATE TABLE IF NOT EXISTS "public"."budget" (
      "id" SERIAL PRIMARY KEY,
      "month" INTEGER NOT NULL,
      "year" INTEGER NOT NULL,
      "userId" INTEGER,
      "created_at" TIMESTAMP,
      "updated_at" TIMESTAMP
    );
  `

  private readonly SQL_DROP_BUDGET_TABLE = `
    DROP TABLE IF EXISTS "public"."budget";
  `

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_CREATE_BUDGET_TABLE)
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_DROP_BUDGET_TABLE)
  }
}
