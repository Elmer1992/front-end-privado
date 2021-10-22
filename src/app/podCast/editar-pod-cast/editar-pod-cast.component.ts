import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pod-cast',
  templateUrl: './editar-pod-cast.component.html',
  styleUrls: ['./editar-pod-cast.component.css']
})
export class EditarPodCastComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
    //  console.log(params.id);
    //  alert(params.id);
    })
  }

}
