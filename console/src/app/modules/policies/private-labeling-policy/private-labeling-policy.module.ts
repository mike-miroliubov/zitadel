import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { ColorChromeModule } from 'ngx-color/chrome';
import { HasRoleModule } from 'src/app/directives/has-role/has-role.module';

import { DropzoneModule } from '../../../directives/dropzone/dropzone.module';
import { CardModule } from '../../card/card.module';
import { DetailLayoutModule } from '../../detail-layout/detail-layout.module';
import { InfoSectionModule } from '../../info-section/info-section.module';
import { InputModule } from '../../input/input.module';
import { ColorComponent } from './color/color.component';
import { PreviewComponent } from './preview/preview.component';
import { PrivateLabelingPolicyRoutingModule } from './private-labeling-policy-routing.module';
import { PrivateLabelingPolicyComponent } from './private-labeling-policy.component';

@NgModule({
  declarations: [PrivateLabelingPolicyComponent, PreviewComponent, ColorComponent],
  imports: [
    ColorChromeModule,
    PrivateLabelingPolicyRoutingModule,
    CommonModule,
    FormsModule,
    InputModule,
    MatButtonModule,
    MatButtonToggleModule,
    OverlayModule,
    CardModule,
    MatIconModule,
    HasRoleModule,
    MatSlideToggleModule,
    MatTooltipModule,
    TranslateModule,
    DetailLayoutModule,
    DropzoneModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    InfoSectionModule,
  ],
  exports: [PrivateLabelingPolicyComponent],
})
export class PrivateLabelingPolicyModule {}
