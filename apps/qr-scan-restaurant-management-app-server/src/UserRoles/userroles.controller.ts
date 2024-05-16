import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserRolesService } from "./userroles.service";

@swagger.ApiTags("userRoles")
@common.Controller("userRoles")
export class UserRolesController {
  constructor(protected readonly service: UserRolesService) {}
}
