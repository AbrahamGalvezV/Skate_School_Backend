import { MigrationInterface, QueryRunner, Table } from "typeorm";

//----------------------------------------------------------------

export class CreateUsersTable1710158908486 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
      await queryRunner.createTable(
          new Table({
            name: "users",
            columns: [
              {
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
              },
              {
                name: "first_name",
                type: "varchar",
                length: "255",
              },
              {
                name: "last_name",
                type: "varchar",
                length: "255",
                isNullable: true,
              },
              {
                name: "email",
                type: "varchar",
                length: "255",
                isUnique: true,
              },
              {
                name: "password",
                type: "varchar",
                length: "255",
              },
              {
                name: "is_active",
                type: "boolean",
                default: true,
              },
              {
                name: "role_id",
                type: "int",
              },
              {
                name: "background",
                type: "varchar",
                length: "255",
                default: "'src/assets/img/air.jpg'",
              },
              {
                name: "backgroundColor",
                type: "varchar",
                length: "20",
                default: "'rgb(0, 0, 0)'",
              },
              {
                name: "fontColor",
                type: "varchar",
                length: "20",
                default: "'rgb(0, 198, 165)'",
              },
              {
                name: "fontColorText",
                type: "varchar",
                length: "20",
                default: "'rgb(246, 223, 207)'",
              },
              {
                name: "fontColorButton",
                type: "varchar",
                length: "20",
                default: "'rgb(0, 198, 165)'",
              },
            ],
            foreignKeys: [
              {
                columnNames: ["role_id"],
                referencedTableName: "roles",
                referencedColumnNames: ["id"],
              },
            ],
          }),
        true
     );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
  
        await queryRunner.dropTable("users");

    }

}
