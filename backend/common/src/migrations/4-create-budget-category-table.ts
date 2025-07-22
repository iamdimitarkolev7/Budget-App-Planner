import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateBudgetCategoryTable1753181999399 implements MigrationInterface {
  private readonly SQL_CREATE_BUDGET_CATEGORY_TABLE = `
    CREATE TABLE IF NOT EXISTS "public"."budget_category" (
      "id" SERIAL PRIMARY KEY,
      "name" VARCHAR NOT NULL,
      "monthlyLimit" DECIMAL(10, 2) NOT NULL,
      "budgetId" INTEGER,
      "created_at" TIMESTAMP,
      "updated_at" TIMESTAMP
    );
  `

  private readonly SQL_DROP_BUDGET_CATEGORY_TABLE = `
    DROP TABLE IF EXISTS "public"."budget_category";
  `

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_CREATE_BUDGET_CATEGORY_TABLE)
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_DROP_BUDGET_CATEGORY_TABLE)
  }
}
