import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

//----------------------------------------------------------------

export class CreateAppointmentsTable1710158938298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createTable(
          new Table({
            name: "appointments",
            columns: [
              {
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
              },
              {
                name: "appointment_date",
                type: "datetime",
              },
              {
                name: "client_id",
                type: "int",
              },
              {
                name: "service_id",
                type: "int",
              },
              {
                name: "artist_id",
                type: "int",
              },

              {
                name: "status",
                type: "varchar",
                length: "20",
                default: "'pending'",
            },

              
             ],
             foreignKeys: [
              {
                columnNames: ["client_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
              },
              {
                columnNames: ["service_id"],
                referencedTableName: "services",
                referencedColumnNames: ["id"],
              },
              {
                columnNames: ["artist_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
              },
            ],
            uniques: [
              new TableUnique({
                name: "user_service_date_unique",
                columnNames: ["client_id", "service_id",'artist_id', "appointment_date", 'status'],
              }),
            ],
            }),
        true
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("appointments");
    }

}
