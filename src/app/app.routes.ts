import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductsparentComponent } from './components/productsparent/productsparent.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { InsertproductComponent } from './components/insertproduct/insertproduct.component';
import { AdminComponent } from './components/admin/admin.component';
import { OrderComponent } from './components/order/order.component';
import { userguardGuard } from './Guards/userguard.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, title:'E-commerce' },
    { path: 'home', component: HomeComponent, title:'Home'  },
    { path: 'products', component: ProductsparentComponent , title:'Products' },
    { path: 'product/:id', component: ProductdetailsComponent },
    { path: 'movies', component: MoviesComponent , title:'Movies', canActivate:[userguardGuard]},
    { path: 'about', component: AboutComponent, title:'About' ,canActivate:[userguardGuard] },
    { path: 'contact', component: ContactusComponent, title:'Contact'  },
    { path: 'cart', component: CartComponent , title:'Cart' },
    { path: 'login', component: LoginComponent, title:'Login'  },
    { path: 'signup', component: SignupComponent , title:'Signup' },
    { path: 'order', component: OrderComponent , title:'Signup' },
    { path: 'admin', component: AdminComponent , children:[
        { path: 'insertproduct', component: InsertproductComponent, title:'insertproduct'  },

    ] },    

    { path: '**', component: PageNotFoundComponent, title:'Error pagee' },
];
