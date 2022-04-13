import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {NavigationComponent} from "./components/navigation/navigation.component";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDialogModule} from "@angular/material/dialog";
import {PopupComponent} from "./components/modals/popup/popup.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { UrlRedirectorComponent } from './components/url-redirector/url-redirector.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {UrlCreatorComponent} from "./components/url-creator/url-creator.component";
import {UrlListComponent} from "./components/url-list/url-list.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {MatTableModule} from "@angular/material/table";

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		PopupComponent,
		UrlCreatorComponent,
		UrlListComponent,
		NotFoundComponent,
  UrlRedirectorComponent,
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		DragDropModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		MatInputModule,
		MatSelectModule,
		MatRadioModule,
		ReactiveFormsModule,
		CdkAccordionModule,
		MatExpansionModule,
		MatDialogModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatTableModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
