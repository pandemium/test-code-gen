/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import { IsOptional, IsEnum } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumReportReportType } from "./EnumReportReportType";

@InputType()
class ReportUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  content?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumReportReportType,
  })
  @IsEnum(EnumReportReportType)
  @IsOptional()
  @Field(() => EnumReportReportType, {
    nullable: true,
  })
  reportType?: "Option1" | null;
}

export { ReportUpdateInput as ReportUpdateInput };
