import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReadyToDreamPage } from '../pages/ready-to-dream/ready-to-dream';
import { LoginPage } from '../pages/login/login';
import { JournalPage } from '../pages/journal/journal';
import { SettingsPage } from '../pages/settings/settings';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ReadyToDream2Page } from '../pages/ready-to-dream2/ready-to-dream2';
import { AppsPage } from '../pages/apps/apps';
import { FocusPage } from '../pages/focus/focus';
import { RelaxPage } from '../pages/relax/relax';
import { SleepPage } from '../pages/sleep/sleep';
import { DreamPage } from '../pages/dream/dream';
// import { AnimationExamplesPage } from '../pages/animation-examples/animation-examples';
import { ReadyToDream3Page } from '../pages/ready-to-dream3/ready-to-dream3';
import { AnimationExamplesPage } from "../pages/animation-examples/animation-examples";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReadyToDreamPage,
    LoginPage,
    JournalPage,
    SettingsPage,
    SignUpPage,
    ReadyToDream2Page,
    AppsPage,
    FocusPage,
    RelaxPage,
    SleepPage,
    DreamPage,
    AnimationExamplesPage,
    ReadyToDream3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReadyToDreamPage,
    LoginPage,
    JournalPage,
    SettingsPage,
    SignUpPage,
    ReadyToDream2Page,
    AppsPage,
    FocusPage,
    RelaxPage,
    SleepPage,
    DreamPage,
    AnimationExamplesPage,
    ReadyToDream3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    File,
    FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
