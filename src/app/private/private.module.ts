import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imports from dependencies
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import {MatNativeDateModule} from '@angular/material/core';
import { NgxSpinnerModule } from 'ngx-spinner';

// local imports
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ParticipantsComponent } from './participants/participants.component';
import { ParticipanstAddComponent } from './participants/add/participantsadd.component';
import { ParticipantsListComponent } from './participants/list/participantslist.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramsListComponent } from './programs/list/programlist.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { DAOService } from './dao/dao.service';
import { ProgramsAddComponent } from './programs/add/programsadd.component';
import { ObserversComponent } from './observers/observers.component';
import { ObserversService } from './observers/observers.service';
import { NgbDateAdapter, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter, CustomDateParserFormatter, DateConverterService } from '../util/util.date.converter.service';
import { Step1Component } from './programs/add/step1/step1.component';
import { Step2Component } from './programs/add/step2/step2.component';
import { Step3Component } from './programs/add/step3/step3.component';
import { ProgramsAddService } from './programs/add/programsadd.service';
import { EventComponent } from './programs/add/step4/event/event.component';
import { ActiveEventComponent } from './programs/add/step4/active-event/active-event.component';
import { TriggerComponent } from './programs/add/step4/trigger/trigger.component';
import { ResultsComponent } from './results/results.component';
import { UserCheckBoxComponent } from './programs/add/user-checkbox/user-checkbox.component';
import { Step4Component } from './programs/add/step4/step4.component';
import { InterventionsComponent } from './programs/intervention/interventions.component';
import { CanvasComponent } from './programs/intervention/canvas/canvas.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { InterventionComponent } from './programs/intervention/intervention/intervention.component';
import { NavbarComponent } from './programs/intervention/navbar/navbar.component';
import { UniqueChoiceComponent } from './programs/intervention/intervention/question/unique-choice/unique-choice.component';
import {QuestionComponent} from './programs/intervention/intervention/question/question.component';
import { MultipleChoiceComponent } from './programs/intervention/intervention/question/multiple-choice/multiple-choice.component';
import { LikertComponent } from './programs/intervention/intervention/question/likert/likert.component';
import { LikertCustomComponent } from './programs/intervention/intervention/question/likert-custom/likert-custom.component';
import { ProgramHistoricComponent } from './programs/add/program-historic/program-historic.component';
import { ProgramChatComponent } from './programs/add/program-chat/program-chat.component';
import { EditoresOnlineComponent } from './programs/add/editores-online/editores-online.component';
import { ChannelService } from './channel_socket/socket.service';
import { InterventionService } from './programs/intervention/intervention.service';
import { PhasesComponent } from './programs/add/step4/phases/phases.component';
import { GamificationComponent } from './programs/add/step4/active-event/gamification/gamification.component';
import { CircleComponent } from './programs/add/step4/active-event/circle/circle.component';
import { AdvancedComponent } from './programs/add/step4/active-event/advanced/advanced.component';
import { ComunicateButtonsComponent } from './programs/add/step1/comunicate-buttons/comunicate-buttons.component';
import { DiscussionGroupsComponent } from './programs/add/step1/discussion-groups/discussion-groups.component';
import { AnalyzedComponent } from './programs/intervention/intervention/analyzed/analyzed.component';
import { StepConfiguracaoComponent } from './programs/add/step-configuracao/step-configuracao.component';
import { StepInterventionComponent } from './programs/add/step-intervention/step-intervention.component';
import { StepSensorComponent } from './programs/add/step-sensor/step-sensor.component';
import { StepPublishComponent } from './programs/add/step-publish/step-publish.component';
import { PublishComponent } from './programs/publish/publish.component';
import { PublishListComponent } from './programs/publish/publish-list/publish-list.component';
import { PublishService } from './programs/publish/publish.service';
import { PublishAddComponent } from './programs/publish/publish-add/publish-add.component';
import { PublishPhasesComponent } from './programs/publish/publish-phases/publish-phases.component';
import { PublishDataComponent } from './programs/publish/publish-data/publish-data.component';
import { PublishExpertsComponent } from './programs/publish/publish-experts/publish-experts.component';
import { PublishParticipantsComponent } from './programs/publish/publish-participants/publish-participants.component';
import { FollowUpComponent } from './programs/follow-up/follow-up.component';
import { FollowUpListComponent } from './programs/follow-up/follow-up-list/follow-up-list.component';


@NgModule({
    imports: [
        CommonModule,
        PrivateRoutingModule,
        TranslateModule,
        ReactiveFormsModule,
        FormsModule,
        SweetAlert2Module.forRoot(),
        NgbModule,
        DragDropModule,
        FontAwesomeModule,
        MatStepperModule,
        CdkStepperModule,
        MatNativeDateModule,
        NgxSpinnerModule,
        NgbModule
    ],
    declarations: [
      PrivateComponent,
      HeaderComponent,
      ParticipantsComponent,
      DashboardComponent,
      ParticipantsListComponent,
      ParticipanstAddComponent,
      PaginationComponent,
      SearchComponent,
      ProgramsComponent,
      ProgramsListComponent,
      ProgramsAddComponent,
      ObserversComponent,
      Step1Component,
      Step2Component,
      Step3Component,
      Step4Component,
      EventComponent,
      ActiveEventComponent,
      TriggerComponent,
      ResultsComponent,
      UserCheckBoxComponent,
      InterventionsComponent,
      CanvasComponent,
      InterventionComponent,
      NavbarComponent,
      UniqueChoiceComponent,
      QuestionComponent,
      MultipleChoiceComponent,
      LikertComponent,
      LikertCustomComponent,
      ProgramHistoricComponent,
      ProgramChatComponent,
      EditoresOnlineComponent,
      PhasesComponent,
      GamificationComponent,
      CircleComponent,
      AdvancedComponent,
      ComunicateButtonsComponent,
      DiscussionGroupsComponent,
      AnalyzedComponent,
      StepConfiguracaoComponent,
      StepInterventionComponent,
      StepSensorComponent,
      StepPublishComponent,
      PublishComponent,
      PublishListComponent,
      PublishAddComponent,
      PublishPhasesComponent,
      PublishDataComponent,
      PublishExpertsComponent,
      PublishParticipantsComponent,
      FollowUpComponent,
      FollowUpListComponent,
      //InterventionService
      ],
  providers: [ChannelService, DAOService, SearchService, ObserversService, DateConverterService, ProgramsAddService, InterventionService, PublishService,
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}]
})


export class PrivateModule { }


