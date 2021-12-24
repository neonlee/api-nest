import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('products')
export class Product extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
}
