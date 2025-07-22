import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateAccountTables1753173958878 implements MigrationInterface {
  private readonly SQL_CREATE_ACCOUNT_TABLE = `
    CREATE TABLE IF NOT EXISTS "public"."account" (
      "id" SERIAL PRIMARY KEY,
      "email" VARCHAR NOT NULL UNIQUE,
      "password" VARCHAR NOT NULL,
      "userId" INTEGER UNIQUE,
      "created_at" TIMESTAMP,
      "updated_at" TIMESTAMP
    );
  `

  private readonly SQL_DROP_ACCOUNT_TABLE = `
    DROP TABLE IF EXISTS "public"."account";
  `

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_CREATE_ACCOUNT_TABLE)
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_DROP_ACCOUNT_TABLE)
  }
}
