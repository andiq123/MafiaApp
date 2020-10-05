import { MaterialsModule } from './../mc/materials/materials.module';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { MsgsectionComponent } from './msgsection/msgsection.component';
import { MessageComponent } from './msgsection/message/message.component';
import { CommonModule } from '@angular/common';
import { ComposesectionComponent } from './composesection/composesection.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatComponent,
    MsgsectionComponent,
    MessageComponent,
    ComposesectionComponent,
  ],
  imports: [MaterialsModule, CommonModule, FormsModule],
  exports: [ChatComponent],
})
export class ChatModule {}
