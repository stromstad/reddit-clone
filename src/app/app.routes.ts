import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleListComponent } from './article-list/article-list.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'articles/reddit-r-all'
    },
    {
        path: 'about', 
        component: AboutComponent
    },
    {
        path: 'articles/:sourceKey',
        component: ArticleListComponent
    }
];

export const appRoutes = 
    RouterModule.forRoot(routes);