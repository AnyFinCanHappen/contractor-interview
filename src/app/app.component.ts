import { Component } from '@angular/core';
import { FlooplanConfig, SiteConfig } from './models/siteconfig.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  siteConfig: SiteConfig = {
    description: 'My Site Config',
    key: 'site',
    floorplans: [
      {
        description: 'Floorplan 1',
        key: 'site.fp1',
        code: 'fp1'
      },
      {
        description: 'Floorplan 2',
        key: 'site.fp2',
        code: 'fp2'
      }
    ]
  };

  siteConfigPropertyList: Array<keyof SiteConfig> = ['description', 'key'];
  floorplanPropertyList: Array<keyof FlooplanConfig> = ['description', 'code', 'key'];

}
