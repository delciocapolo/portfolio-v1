import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import packageIcons from '../helpers/package-icons';
import { InterfaceHeaderHomePageNameIcons } from '../pages/home-page/@types/homePage';
import { linksMedia } from '../helpers/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgIcon, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders: [provideIcons(packageIcons)],
})
export class FooterComponent implements OnInit{
  public readonly LOGO_NAME: string = 'Delcio Capolo';
  public currentYear: number | undefined = undefined;
  public contactEmail: string = "delciocapolo096@gmail.com";
  public contactPhone: string = "+244952464553";
  public headerHomePageNameIcons: InterfaceHeaderHomePageNameIcons[] = linksMedia;
  
  ngOnInit(): void {
    this.currentYear = Date.now();
  }
}
