import { Module } from "@nestjs/common";
import { UserRolesService } from "./userroles.service";
import { UserRolesController } from "./userroles.controller";
import { UserRolesResolver } from "./userroles.resolver";

@Module({
  controllers: [UserRolesController],
  providers: [UserRolesService, UserRolesResolver],
  exports: [UserRolesService],
})
export class UserRolesModule {}
