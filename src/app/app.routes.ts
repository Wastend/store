import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

export const routes: Routes = [
    {path: '',  component: HomePageComponent, title: 'WS-Store'},
    {path: 'product',  component: ProductPageComponent, title: 'WS-Product'},
    {path: 'categories',component: CategoriesPageComponent, title: 'WS-Categories'},
    {path: 'categories/:categoryName',component: CategoryPageComponent, title: 'WS-Category'},
    {path: 'about',component: AboutPageComponent, title: 'WS-About-Us'},
];