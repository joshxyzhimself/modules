import * as postgres from 'postgres';

export type sql = postgres.Sql<{ date: string }>;

export interface column {
  name: string;
  type: string;
  parameters: string;
}

export interface table {
  name: string;
  columns: column[];
}

export type item = Record<string, any>;

export type drop_table = (sql: sql, table: table) => Promise<void>;
export const drop_table: drop_table;

export type create_table = (sql: sql, table: table) => Promise<void>;
export const create_table: create_table;

export type validate_item = (table: table, item: item, null_id: boolean) => void;
export const validate_item: validate_item;

export type create_items = (sql: sql, table: table, items: item[]) => Promise<item[]>;
export const create_items: create_items;

export type read_items = (sql: sql, table: table, limit: number, offset: number) => Promise<item[]>;
export const read_items: read_items;

export type read_items_where = (sql: sql, table: table, name: string, operator: string, value: boolean|string|number, limit: number, offset: number) => Promise<item[]>;
export const read_items_where: read_items_where;

export type read_item = (sql: sql, table: table, id: string) => Promise<item>;
export const read_item: read_item;

export type update_item = (sql: sql, table: table, item: item) => Promise<item>;
export const update_item: update_item;

export type delete_item = (sql: sql, table: table, id: string) => Promise<void>;
export const update_item: update_item;