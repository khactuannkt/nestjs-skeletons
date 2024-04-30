import { MigrationInterface, QueryRunner } from "typeorm";

export class Individual1713802569657 implements MigrationInterface {
    name = 'Individual1713802569657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "created_by" integer, "updated_by" integer, "alias" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "roles" json NOT NULL, "name" character varying NOT NULL, "avatar" character varying NOT NULL DEFAULT 'https://secure.gravatar.com/avatar/c687200644c17eab5b3b677c9106f2d7?s=800&d=identicon', CONSTRAINT "UQ_f002c336d3299ee4eba00196902" UNIQUE ("alias"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
