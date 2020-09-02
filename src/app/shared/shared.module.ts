import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "./service/auth.service";
import { DashboardService } from "./service/dashboard.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, DashboardService],
})
export class SharedModule {}
