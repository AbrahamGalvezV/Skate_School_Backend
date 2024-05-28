import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateModifications1716536851477 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "modifications",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "background_image",
            type: "varchar",
            length: "255",
            isNullable: true,
          },
          // {
          //   name: "background_color",
          //   type: "varchar",
          //   isNullable: true,
          // },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('modifications');
  }
}
