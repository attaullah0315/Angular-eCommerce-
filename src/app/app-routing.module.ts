import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { sellerAuthGuard } from './seller-auth.guard';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './components/seller-update-product/seller-update-product.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'Seller', component: SellerAuthComponent },
  
  {path: 'seller-home', component: SellerHomeComponent, canActivate: [sellerAuthGuard]},

  {path: 'seller-add-product', component: SellerAddProductComponent, canActivate: [sellerAuthGuard]},

  {path: 'seller-update-product/:id', component: SellerUpdateProductComponent, canActivate: [sellerAuthGuard]},

  {path: 'search/:query', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
