import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class teste1634567475606 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({ name: 'teste', columns: [
            {name: 'id', type: 'integer', isPrimary: true,}
        ] }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
