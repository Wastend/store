import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';

export const routes: Routes = [
    {path: '',  component: HomePageComponent},
    {path: 'product',  component: ProductPageComponent},
    {path: 'categories',  component: CategoriesPageComponent},
];