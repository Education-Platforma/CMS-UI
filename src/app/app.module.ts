import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './components/teacher/student-registration/student-registration.component';
import { AttendanceComponent } from './components/teacher/attendance/attendance.component';
import { AddMarkComponent } from './components/teacher/add-mark/add-mark.component';
import { EventsComponent } from './components/teacher/events/events.component';
import { SolutionsComponent } from './components/teacher/solutions/solutions.component';
import { ChoosePanelComponent } from './components/auth/choose-panel/choose-panel.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ConfirmCodeComponent } from './components/auth/confirm-code/confirm-code.component';
import { NewPasswordComponent } from './components/auth/new-password/new-password.component';
import { HomeComponent } from './components/user/home/home.component';
import { HomeworkComponent } from './components/user/homework/homework.component';
import { ResultComponent } from './components/user/result/result.component';
import { ResultInnerComponent } from './components/user/result-inner/result-inner.component';
import { QuestionListComponent } from './components/user/question-list/question-list.component';
import { AskQuestionComponent } from './components/user/ask-question/ask-question.component';
import { AnswerComponent } from './components/user/answer/answer.component';
import { StartQuizComponent } from './components/user/start-quiz/start-quiz.component';
import { QuizOptionComponent } from './components/user/quiz-option/quiz-option.component';
import { QuizScoreComponent } from './components/user/quiz-score/quiz-score.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { NavbarComponent } from './components/UI/navbar/navbar.component';
import { HomeworkPopUpComponent } from './components/UI/homework-pop-up/homework-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentRegistrationComponent,
    HomeworkComponent,
    AttendanceComponent,
    ResultComponent,
    AddMarkComponent,
    EventsComponent,
    SolutionsComponent,
    ChoosePanelComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ConfirmCodeComponent,
    NewPasswordComponent, 
    HomeworkComponent,
    ResultComponent,
    ResultInnerComponent,
    QuestionListComponent,
    AskQuestionComponent,
    AnswerComponent,
    StartQuizComponent,
    QuizOptionComponent,
    QuizScoreComponent,
    ProfileComponent,
    NavbarComponent,
    HomeworkPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
