import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'appcursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  nomePortal:string;


  constructor(private CursosService: CursosService){
    this.nomePortal = "Hallucinations";
  
    this.cursos = this.CursosService.getCursos();
  }


}



// string, number, any
