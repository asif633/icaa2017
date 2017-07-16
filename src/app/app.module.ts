import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { PaginatorModule } from 'primeng/components/paginator/paginator';
import { AdsenseModule } from 'ng2-adsense';

import { AppComponent } from './app.component';
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
import { HomeComponent } from './home/home.component';
import { routes } from './app.routes';
import { NavlistComponent } from './navlist/navlist.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorService } from './shared/models/author.service';
import { LoginComponent } from './login/login.component';
import { ControllistComponent } from './admin/controllist/controllist.component';
import { TableComponent } from './admin/table/table.component';
import { ContainerComponent } from './admin/container/container.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginService } from './shared/login.service';
import { AuthGuard } from './shared/authguard.service';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { TripComponent } from './trip/trip.component';
import { InvitedspeakersComponent } from './invitedspeakers/invitedspeakers.component';

import { PlenaryService } from './shared/models/plenary.service';
import { InvitedService } from './shared/models/invited.services';
import { LocalComService } from './shared/models/localcom.service';
import { IntComService } from './shared/models/intcom.service';
import { IntComResolver } from './shared/models/intcom.resolver';
import { LocalComResolver } from './shared/models/localcom.resolver';
import { PlenarysResolver } from './shared/models/plenary.resolver';
import { InvitedResolver } from './shared/models/invited.resolver';
import { SortByPipe } from './shared/sortby.pipe';

export const fireConfig = {
  apiKey: "AIzaSyBruRP2pFrk0dfCE3Su0irHtITdQgXimwk",
  authDomain: "cpm-app.firebaseapp.com",
  databaseURL: "https://cpm-app.firebaseio.com",
  projectId: "cpm-app",
  storageBucket: "cpm-app.appspot.com",
  messagingSenderId: "779702431809"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    CommittieesComponent,
    TopicsComponent,
    KeynotespeakersComponent,
    JournalsComponent,
    RegistrationComponent,
    RegistrationfeeComponent,
    ParticipantsComponent,
    AbstractsComponent,
    ImportantComponent,
    AccommodationComponent,
    ConferencevenueComponent,
    SponsorsComponent,
    ContactComponent,
    HomeComponent,
    NavlistComponent,
    TopbarComponent,
    SlideshowComponent,
    FooterComponent,
    LoginComponent,
    NotfoundComponent,
    RegistrationsuccessComponent,
    TripComponent,
    InvitedspeakersComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(fireConfig, myFirebaseAuthConfig),
    DataTableModule,
    PaginatorModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-2748445173208518',
      adSlot: 9660629583
    }),
    routes,
  ],
  providers: [AuthorService, 
              LoginService, 
              AuthGuard, 
              PlenaryService, 
              InvitedService, 
              LocalComService, 
              IntComService,
              IntComResolver,
              LocalComResolver,
              PlenarysResolver,
              InvitedResolver,
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
