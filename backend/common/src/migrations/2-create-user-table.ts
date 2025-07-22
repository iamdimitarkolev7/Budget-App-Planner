import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateUsersTable1753174601721 implements MigrationInterface {
  private readonly SQL_CREATE_USERS_TABLE = `
    CREATE TABLE IF NOT EXISTS "public"."users" (
      "id" SERIAL PRIMARY KEY,
      "name" VARCHAR,
      "timezone" VARCHAR,
      "created_at" TIMESTAMP,
      "updated_at" TIMESTAMP
    );
  `

  private readonly SQL_DROP_USERS_TABLE = `
    DROP TABLE IF EXISTS "public"."users";
  `

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_CREATE_USERS_TABLE)
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(this.SQL_DROP_USERS_TABLE)
  }
}
