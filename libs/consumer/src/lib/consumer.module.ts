import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesterModule } from '@nx-repro/tester';

@NgModule({
  imports: [CommonModule, TesterModule]
})
export class ConsumerModule {}
