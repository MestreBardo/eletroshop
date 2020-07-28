import { FormsModule } from '@angular/forms';
import { InicioRoutingModule } from './inicio-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ShowcaseCardComponent } from './showcase/showcase-card/showcase-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonFilterPipe } from './showcase/pokemon-filter.pipe';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [InicioComponent, ShowcaseComponent, ShowcaseCardComponent, PokemonFilterPipe],
  imports: [
    CommonModule,
    InicioRoutingModule,
    FormsModule,
    SharedModule,
    CarouselModule.forRoot()
  ]
})
export class InicioModule { }
