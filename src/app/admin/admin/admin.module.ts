import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminRoutes } from './admin.routing.module';
import { FormsModule } from '@angular/forms';
import { InvitedspeakersComponent } from '../../invitedspeakers/invitedspeakers.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PlenaryComponent } from '../plenary/plenary.component';
import { PlenaryTableComponent } from '../plenary-table/plenary-table.component';
import { PlenaryFormComponent } from '../plenary-form/plenary-form.component';
import { ContainerComponent } from '../container/container.component';
import { ControllistComponent } from '../controllist/controllist.component';
import { TableComponent } from '../table/table.component';
import { AdminParticipantsComponent } from '../participants/participants.component';
import { TopbarComponent } from '../../topbar/topbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { PaginatorModule } from 'primeng/components/paginator/paginator';
import { AdminInvitedSpeakersComponent } from '../admin-invited-speakers/admin-invited-speakers.component';
import { AdminInvitedSpeakerTableComponent } from '../admin-invited-speaker-table/admin-invited-speaker-table.component';
import { AdminInvitedSpeakerFormComponent } from '../admin-invited-speaker-form/admin-invited-speaker-form.component';
import { LocalCommitteeFormComponent } from '../local-committee-form/local-committee-form.component';
import { LocalCommitteeTableComponent } from '../local-committee-table/local-committee-table.component';
import { IntCommitteeFormComponent } from '../int-committee-form/int-committee-form.component';
import { IntCommitteeTableComponent } from '../int-committee-table/int-committee-table.component';
import { CommitteeComponent } from '../committee/committee.component';

@NgModule({
  imports: [
    CommonModule,
    adminRoutes,
    FormsModule,
    PaginatorModule,
    DataTableModule
  ],
  declarations: [
    ContainerComponent,
    NavbarComponent,
    PlenaryComponent,
    PlenaryTableComponent,
    PlenaryFormComponent,
    ControllistComponent,
    TableComponent,
    AdminParticipantsComponent,
    AdminInvitedSpeakersComponent,
    AdminInvitedSpeakerTableComponent,
    AdminInvitedSpeakerFormComponent,
    LocalCommitteeFormComponent,
    LocalCommitteeTableComponent,
    IntCommitteeFormComponent,
    IntCommitteeTableComponent,
    CommitteeComponent
  ]
})
export class AdminModule { }
