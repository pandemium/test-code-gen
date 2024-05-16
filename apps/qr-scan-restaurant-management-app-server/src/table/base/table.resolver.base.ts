/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Table } from "./Table";
import { TableCountArgs } from "./TableCountArgs";
import { TableFindManyArgs } from "./TableFindManyArgs";
import { TableFindUniqueArgs } from "./TableFindUniqueArgs";
import { CreateTableArgs } from "./CreateTableArgs";
import { UpdateTableArgs } from "./UpdateTableArgs";
import { DeleteTableArgs } from "./DeleteTableArgs";
import { TableService } from "../table.service";
@graphql.Resolver(() => Table)
export class TableResolverBase {
  constructor(protected readonly service: TableService) {}

  async _tablesMeta(
    @graphql.Args() args: TableCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Table])
  async tables(@graphql.Args() args: TableFindManyArgs): Promise<Table[]> {
    return this.service.tables(args);
  }

  @graphql.Query(() => Table, { nullable: true })
  async table(
    @graphql.Args() args: TableFindUniqueArgs
  ): Promise<Table | null> {
    const result = await this.service.table(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Table)
  async createTable(@graphql.Args() args: CreateTableArgs): Promise<Table> {
    return await this.service.createTable({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Table)
  async updateTable(
    @graphql.Args() args: UpdateTableArgs
  ): Promise<Table | null> {
    try {
      return await this.service.updateTable({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Table)
  async deleteTable(
    @graphql.Args() args: DeleteTableArgs
  ): Promise<Table | null> {
    try {
      return await this.service.deleteTable(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}