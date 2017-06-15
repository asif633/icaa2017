import { RouterModule, Routes } from '@angular/router';
import { PlenaryComponent } from '../plenary/plenary.component';
import { ContainerComponent } from '../container/container.component';
import { AdminParticipantsComponent } from '../participants/participants.component';
import { AdminInvitedSpeakersComponent } from '../admin-invited-speakers/admin-invited-speakers.component';
import { CommitteeComponent } from '../committee/committee.component';

const routes: Routes = [
    {path: '', component: ContainerComponent, children: [
        {path: '', component: AdminParticipantsComponent},
        {path: 'plenarySpeakers', component: PlenaryComponent},
        {path: 'manageinvitedSpeakers', component: AdminInvitedSpeakersComponent},
        {path: 'manageCommitee', component: CommitteeComponent}
    ]}
];

export const adminRoutes = RouterModule.forChild(routes);