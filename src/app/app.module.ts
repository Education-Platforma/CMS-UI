import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/teacher/home/home.component';
import { HomeComponent as UserHome } from './components/user/home/home.component';
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
import { ResultInnerComponent } from './components/user/result-inner/result-inner.component';
import { QuestionListComponent } from './components/user/question-list/question-list.component';
import { AskQuestionComponent } from './components/user/ask-question/ask-question.component';
import { AnswerComponent } from './components/user/answer/answer.component';
import { QuizOptionComponent } from './components/user/quiz-option/quiz-option.component';
import { QuizScoreComponent } from './components/user/quiz-score/quiz-score.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { NavbarComponent } from './components/UI/navbar/navbar.component';
import { HomeworkPopUpComponent } from './components/UI/homework-pop-up/homework-pop-up.component';
import { LoginNavbarComponent } from './components/UI/login-navbar/login-navbar.component';
import { LoginMenuComponent } from './components/auth/login-menu/login-menu.component';
import { SecondaryNavbarComponent } from './components/UI/secondary-navbar/secondary-navbar.component';
import { TeacherLoginComponent } from './components/teacher/teacher-login/teacher-login.component';
import { SmallCardComponent } from './components/UI/small-card/small-card.component';
import { FormComponent } from './components/auth/form/form.component';
import { HomeworkComponent as UserHomework } from './components/user/homework/homework.component';
import { StudentLoginComponent } from './components/user/student-login/student-login.component';
import { StudentProfileComponent } from './components/user/student-profile/student-profile.component';
import { PrimaryNavbarComponent } from './components/UI/primary-navbar/primary-navbar.component';
import { QuizStartComponent } from './components/user/quiz-start/quiz-start.component';
import { ResultComponent as StudentResultComponent } from './components/user/result/result.component';
import { ResultComponent as TeacherResultComponent } from './components/teacher/result/result.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/UI/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { CreateTeacherComponent } from './components/auth/create-teacher/create-teacher.component';
import { CreateClassComponent } from './components/admin/create-class/create-class.component';
import { SelectComponent } from './components/UI/select/select.component';
import { TeacherQuestionsComponent } from './components/teacher/teacher-questions/teacher-questions.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';import { NzButtonModule } from 'ng-zorro-antd/button';
import { StudentEventComponent } from './components/user/student-event/student-event.component';
import { CreateQuizComponent } from './components/teacher/create-quiz/create-quiz.component';

registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentRegistrationComponent,
    TeacherResultComponent,
    // HomeworkComponent,
    AttendanceComponent,
    StudentResultComponent,
    AddMarkComponent,
    EventsComponent,
    SolutionsComponent,
    ChoosePanelComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ConfirmCodeComponent,
    NewPasswordComponent,
    // HomeworkComponent,
    // ResultComponent,
    ResultInnerComponent,
    QuestionListComponent,
    AskQuestionComponent,
    AnswerComponent,
    QuizOptionComponent,
    QuizScoreComponent,
    ProfileComponent,
    NavbarComponent,
    HomeworkPopUpComponent,
    LoginNavbarComponent,
    LoginMenuComponent,
    UserHome,
    SecondaryNavbarComponent,
    TeacherLoginComponent,
    SmallCardComponent,
    FormComponent,
    UserHomework,
    StudentLoginComponent,
    StudentProfileComponent,
    PrimaryNavbarComponent,
    QuizStartComponent,
    NotFoundComponent,
    CreateTeacherComponent,
    CreateClassComponent,
    SelectComponent,
    TeacherQuestionsComponent,
    StudentEventComponent,
    CreateQuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
