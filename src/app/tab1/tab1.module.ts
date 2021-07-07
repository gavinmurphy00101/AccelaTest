import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CardComponent } from '../Shared/Components/card/card.component';
import { CreatePostComponent } from '../Shared/Components/create-post/create-post.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Tab1Page, CardComponent, CreatePostComponent],
  exports: [CardComponent, CreatePostComponent]
})
export class Tab1PageModule {}
