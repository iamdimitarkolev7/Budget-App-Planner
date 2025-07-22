import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateReportTable1753182146345 implements MigrationInterface {
  private readonly SQL_CREATE_REPORT_TABLE = `
    CREATE TABLE IF NOT EXISTS "public"."report" (
      "id" SERIAL PRIMARY KEY,
      "month" INTEGER NOT NULL,
      "year" INTEGER NOT NULL,
      "s3Url" VARCHAR NOT NULL,
      "type" VARCHAR NOT NULL,
      "userId" INTEGER,
      "created_at" TIMESTAMP,
      "updated_at" TIMESTAMP
    );
  `

  private readonly SQL_DROP_REPORT_TABLE = `
    DROP TABLE IF EXISTS "public"."report";
  `

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_CREATE_REPORT_TABLE)
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_DROP_REPORT_TABLE)
  }
}
