import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class client1633980416365 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'client',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true
                    },
                    {
                        name: 'name_client',
                        type: 'varchar(200)',
                    },
                    {
                        name: 'cpf_client',
                        type: 'varchar(200)',
                    },
                ],

            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('client');
    }

}
