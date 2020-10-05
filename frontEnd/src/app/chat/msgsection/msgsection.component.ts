import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-msgsection',
  templateUrl: './msgsection.component.html',
  styleUrls: ['./msgsection.component.css'],
})
export class MsgsectionComponent implements OnInit {
  @Input() users: { name: string; msg: string };
  constructor() {}

  ngOnInit(): void {}
}
