import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cokcpit',
  templateUrl: './cokcpit.component.html',
  styleUrls: ['./cokcpit.component.css']
})
export class CokcpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent});
  }

}
