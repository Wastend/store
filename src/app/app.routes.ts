import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

export const routes: Routes = [
    {path: '',  component: HomePageComponent, title: 'WS-Store', outlet: 'main'},
    {path: 'product',  component: ProductPageComponent, title: 'WS-Product', outlet: 'main'},
    {path: 'categories',component: CategoriesPageComponent, title: 'WS-Categories', outlet: 'main'},
    {path: 'categories/:categoryName',component: CategoryPageComponent, title: 'WS-Category', outlet: 'main'},
    {path: 'about',component: AboutPageComponent, title: 'WS-About-Us', outlet: 'main'},
];