import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CommittieesComponent } from './committiees/committiees.component';
import { TopicsComponent } from './topics/topics.component';
import { KeynotespeakersComponent } from './keynotespeakers/keynotespeakers.component';
import { JournalsComponent } from './journals/journals.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationfeeComponent } from './registrationfee/registrationfee.component';
import { ParticipantsComponent } from './participants/participants.component';
import { AbstractsComponent } from './abstracts/abstracts.component';
import { ImportantComponent } from './important/important.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { ConferencevenueComponent } from './conferencevenue/conferencevenue.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './admin/container/container.component';
import { AuthGuard } from './shared/authguard.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { TripComponent } from './trip/trip.component';
import { InvitedspeakersComponent } from './invitedspeakers/invitedspeakers.component';
import { LocalComResolver } from './shared/models/localcom.resolver';
import { IntComResolver } from './shared/models/intcom.resolver';
import { PlenarysResolver } from './shared/models/plenary.resolver';

const appRoutes: Routes = [
    {
        path: '', component: AppComponent, children: [
            {
                path: '', component: HomeComponent, children: [
                    { path: '', component: FrontpageComponent },
                    { path: 'committiees', component: CommittieesComponent, resolve: {
                                              locmems: LocalComResolver,
                                              //intmems: IntComResolver
                                            } },
                    { path: 'topics', component: TopicsComponent },
                    { path: 'plenaryspeakers', component: KeynotespeakersComponent, resolve:{
                                                //plenary: PlenarysResolver
                    } },
                    { path: 'invitedspeakers', component: InvitedspeakersComponent },
                    { path: 'journals', component: JournalsComponent },
                    { path: 'registration', component: RegistrationComponent },
                    { path: 'registrationfee', component: RegistrationfeeComponent },
                    { path: 'participants', component: ParticipantsComponent },
                    { path: 'callforpapers', component: AbstractsComponent },
                    { path: 'important', component: ImportantComponent },
                    { path: 'accommodation', component: AccommodationComponent },
                    { path: 'conferencevenue', component: ConferencevenueComponent },
                    { path: 'sponsors', component: SponsorsComponent },
                    { path: 'trip', component: TripComponent },
                    { path: 'contact', component: ContactComponent },
                    {path: 'admin', component: LoginComponent },
                    {path: 'registrationsuceess', component: RegistrationsuccessComponent}
                ]
            },
            { path: 'manageusers', loadChildren: './admin/admin/admin.module#AdminModule', canLoad: [AuthGuard] }
        ]
    },
    { path: '**', component: NotfoundComponent }
]

export const routes = RouterModule.forRoot(appRoutes, { useHash: false });