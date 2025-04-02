import { Migration } from '@mikro-orm/migrations';

export class Migration20250402175852 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "project" ("id" serial primary key, "create_at" timestamptz not null, "updated_at" timestamptz not null, "title" varchar(255) not null);`);

    this.addSql(`drop table if exists "post" cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`create table "post" ("id" serial primary key, "create_at" timestamptz(6) not null, "updated_at" timestamptz(6) not null, "title" varchar(255) not null);`);

    this.addSql(`drop table if exists "project" cascade;`);
  }

}
