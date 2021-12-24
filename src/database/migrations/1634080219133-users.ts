import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class users1634080219133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar(200)',
                    },
                    {
                        name: 'username',
                        type: 'varchar(200)',
                    },
                ]
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
