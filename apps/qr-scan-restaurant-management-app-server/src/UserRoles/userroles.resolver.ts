import * as graphql from "@nestjs/graphql";
import { UserRolesService } from "./userroles.service";

export class UserRolesResolver {
  constructor(protected readonly service: UserRolesService) {}
}
