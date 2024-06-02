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
            name: "background",
            type: "varchar",
            length: "255",
          },
          {
            name: "backgroundColor",
            type: "varchar",
            length: "20",
          },
          {
            name: "fontColor",
            type: "varchar",
            length: "20",
          },
          {
            name: "fontColorText",
            type: "varchar",
            length: "20",
          },
          {
            name: "fontColorButton",
            type: "varchar",
            length: "20",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('modifications');
  }
}
