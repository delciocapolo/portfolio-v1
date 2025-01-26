import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import * as hugeicons from '@ng-icons/huge-icons';

@Component({
  selector: 'app-header',
  imports: [NgIcon, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  viewProviders: [provideIcons({ ...hugeicons })],
})
export class HeaderComponent {
  public readonly LOGO_NAME: string = 'Delcio Capolo';
  public taskbarItems: InterfaceTaskBarItem[] = [
    { id: 3, name: 'Artigos', url: '/articles' },
    { id: 2, name: 'Lab. Criativo', url: '/creative' },
    { id: 1, name: 'Sobre mim', url: '/about-me' },
    { id: 3, name: 'Contactar-me', url: 'mailto:delciocapolo096@gmail.com' },
  ];
}
