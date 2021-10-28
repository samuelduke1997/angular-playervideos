import { MenuModule } from './../componentes/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaInicialRoutingModule } from './pagina-inicial-routing.module';
import { PaginaInicialComponent } from './pagina-inicial.component';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';

@NgModule({
  declarations: [PaginaInicialComponent],
  imports: [
    CommonModule,
    PaginaInicialRoutingModule,
    CabecalhoModule,
    MenuModule,
  ],
})
export class PaginaInicialModule {}
