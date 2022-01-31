import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPollComponent } from './modal-poll/modal-poll.component';

@NgModule({
    declarations: [
        ModalPollComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ModalPollComponent
    ]
})

export class SharedUiModule { }