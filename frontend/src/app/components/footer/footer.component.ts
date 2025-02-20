import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import packageIcons from '../helpers/package-icons';
import { InterfaceHeaderHomePageNameIcons } from '../pages/home-page/@types/homePage';
import { linksMedia } from '../helpers/data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders: [provideIcons(packageIcons)],
})
export class FooterComponent {
  public headerHomePageNameIcons: InterfaceHeaderHomePageNameIcons[] =
    linksMedia;
}
