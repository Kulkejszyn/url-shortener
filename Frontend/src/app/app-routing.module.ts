import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UrlCreatorComponent} from "./components/url-creator/url-creator.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {UrlRedirectorComponent} from "./components/url-redirector/url-redirector.component";
import {UrlListComponent} from "./components/url-list/url-list.component";

const routes: Routes = [
	{'path': '', component: UrlCreatorComponent},
	{'path': '404', component: NotFoundComponent, pathMatch: 'full'},
	// {'path': '**', redirectTo: '404'},
	{'path': 's/:shortUrl', component: UrlRedirectorComponent},
	{'path': 'urls', component: UrlListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
