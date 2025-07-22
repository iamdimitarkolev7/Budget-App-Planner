import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddForeignKeyConstraints1753182324433 implements MigrationInterface {
  private readonly SQL_ADD_FKS = `
    -- Account → User (OneToOne)
    ALTER TABLE "public"."account"
    ADD CONSTRAINT "fk_account_user"
    FOREIGN KEY ("userId") REFERENCES "public"."users"("id")
    ON DELETE SET NULL;

    -- Budget → User (ManyToOne)
    ALTER TABLE "public"."budget"
    ADD CONSTRAINT "fk_budget_user"
    FOREIGN KEY ("userId") REFERENCES "public"."users"("id")
    ON DELETE SET NULL;

    -- BudgetCategory → Budget (ManyToOne)
    ALTER TABLE "public"."budget_category"
    ADD CONSTRAINT "fk_category_budget"
    FOREIGN KEY ("budgetId") REFERENCES "public"."budget"("id")
    ON DELETE SET NULL;

    -- Expense → User (ManyToOne)
    ALTER TABLE "public"."expense"
    ADD CONSTRAINT "fk_expense_user"
    FOREIGN KEY ("userId") REFERENCES "public"."users"("id")
    ON DELETE SET NULL;

    -- Expense → BudgetCategory (ManyToOne)
    ALTER TABLE "public"."expense"
    ADD CONSTRAINT "fk_expense_category"
    FOREIGN KEY ("categoryId") REFERENCES "public"."budget_category"("id")
    ON DELETE SET NULL;

    -- Report → User (ManyToOne)
    ALTER TABLE "public"."report"
    ADD CONSTRAINT "fk_report_user"
    FOREIGN KEY ("userId") REFERENCES "public"."users"("id")
    ON DELETE SET NULL;
  `

  private readonly SQL_DROP_FKS = `
    ALTER TABLE "public"."account" DROP CONSTRAINT IF EXISTS "fk_account_user";
    ALTER TABLE "public"."budget" DROP CONSTRAINT IF EXISTS "fk_budget_user";
    ALTER TABLE "public"."budget_category" DROP CONSTRAINT IF EXISTS "fk_category_budget";
    ALTER TABLE "public"."expense" DROP CONSTRAINT IF EXISTS "fk_expense_user";
    ALTER TABLE "public"."expense" DROP CONSTRAINT IF EXISTS "fk_expense_category";
    ALTER TABLE "public"."report" DROP CONSTRAINT IF EXISTS "fk_report_user";
  `

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_ADD_FKS)
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_DROP_FKS)
  }
}
