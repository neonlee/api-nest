import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class products1634081518744 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                    },
                    {
                        name: 'name_product',
                        type: 'varchar(200)',
                    },
                ]
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await  queryRunner.dropTable("products")
    }

}
