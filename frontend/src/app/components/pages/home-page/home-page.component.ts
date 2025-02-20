import { TitleCasePipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import {
  InterfaceExperienceList,
  InterfaceHeaderHomePageNameIcons,
  InterfaceProjectsCard,
  InterfaceSkillCard,
} from './@types/homePage';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { PairAndPadStartPipe } from './pipes/padStartHandler/pair-and-pad-start.pipe';
import { FooterComponent } from '@app/components/footer/footer.component';
import { PeriodIfEmptyPipe } from './pipes/emptyHandler/period-if-empty.pipe';
import packageIcons from '@app/components/helpers/package-icons';
import { linksMedia } from '@app/components/helpers/data';

@Component({
  selector: 'app-home-page',
  imports: [
    NgIcon,
    HeaderComponent,
    FooterComponent,
    TitleCasePipe,
    PeriodIfEmptyPipe,
    PairAndPadStartPipe,
    NgOptimizedImage,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  viewProviders: [provideIcons(packageIcons)],
})
export class HomePageComponent {
  public owner: string = 'Délcio Capolo';
  public headerHomePageNameIcons: InterfaceHeaderHomePageNameIcons[] =
    linksMedia;

  public skillsCards1: InterfaceSkillCard[] = [
    {
      content: 'Git',
      iconName: 'diGitPlain',
    },
    {
      content: 'Typescript',
      iconName: 'diTypescriptPlain',
    },
    {
      content: 'Docker',
      iconName: 'diDockerPlain',
    },
    {
      content: 'NestJs',
      iconName: 'diNestjsLine',
    },
    {
      content: 'Swagger',
      iconName: 'diSwaggerPlain',
    },
    {
      content: 'MySQL',
      iconName: 'diMysqlPlainWordmark',
    },
  ];

  public skillsCards2: InterfaceSkillCard[] = [
    {
      content: 'Laravel',
      iconName: 'diLaravelLine',
    },
    {
      content: 'Angular',
      iconName: 'diAngularPlain',
    },
    {
      content: 'Bash Script',
      iconName: 'diBashPlain',
    },
    {
      content: 'AWS Services',
      iconName: 'diAmazonwebservicesPlainWordmark',
    },
    {
      content: 'Flutter',
      iconName: 'diFlutterPlain',
    },
    {
      content: 'PostgreSQL',
      iconName: 'diPostgresqlPlain',
    },
  ];

  public experienceList: InterfaceExperienceList[] = [
    {
      companyLogo: '/experience-logos/medicare.png',
      companyName: 'Medicare Angola',
      companyLink: 'https://medicare.ao/',
      start_period: '2024-02-12',
      ends_period: null,
      textExperience:
        'Durante minha gestão na Medicare, ocupei a função de Arquiteto de Software, onde desempenhei um papel fundamental na formação da arquitetura de projetos de software de missão crítica. Responsável por projetar sistemas escaláveis e eficientes, forneci liderança técnica a uma equipe multifuncional.',
    },
    {
      companyLogo: '/experience-logos/buka.png',
      companyName: 'Buka',
      companyLink: 'https://bukaapp.net/',
      start_period: '2023-11-06',
      ends_period: '2024-01-20',
      textExperience:
        'Durante minha gestão na Medicare, ocupei a função de Arquiteto de Software, onde desempenhei um papel fundamental na formação da arquitetura de projetos de software de missão crítica. Responsável por projetar sistemas escaláveis e eficientes, forneci liderança técnica a uma equipe multifuncional.',
    },
  ];

  public aboutMeContent: string[] =
    "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.<>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.<>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.".split(
      '<>'
    );
  public projectList: Array<InterfaceProjectsCard> = [
    {
      urlImage:
        'https://xuffprxbazgwqermnvqs.supabase.co/storage/v1/object/sign/small-files/p1.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbWFsbC1maWxlcy9wMS5zdmciLCJpYXQiOjE3NDAwNDgyMTEsImV4cCI6MTc3MTU4NDIxMX0.KbpV4QKIt51qVrV_ENYzMX6zj-In_w7FX9yNcyQYynU',
      titleProject: 'Crypto Screener Application',
      description: `I'm Evren Shah Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it tospecimen book.`,
      urlCase: '#',
    },
    {
      urlImage:
        'https://xuffprxbazgwqermnvqs.supabase.co/storage/v1/object/sign/small-files/p2.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbWFsbC1maWxlcy9wMi5zdmciLCJpYXQiOjE3NDAwNDgyNDksImV4cCI6MTc3MTU4NDI0OX0._bil-o5MT7oz_7fG0EdK0yn5Zp3Aju5PQKD89QrJhLo',
      titleProject: 'Crypto Screener Application',
      description: `I'm Evren Shah Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it tospecimen book.`,
      urlCase: '#',
    },
    {
      urlImage:
        'https://xuffprxbazgwqermnvqs.supabase.co/storage/v1/object/sign/small-files/p3.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbWFsbC1maWxlcy9wMy5zdmciLCJpYXQiOjE3NDAwNDgyNjAsImV4cCI6MTc3MTU4NDI2MH0.W5vchE-3A18lK0BJf8UXW994sTMu0P61C-QKkY0CekI',
      titleProject: 'Crypto Screener Application',
      description: `I'm Evren Shah Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it tospecimen book.`,
      urlCase: '#',
    },
  ];

  public testimonialsList = Array.from({ length: 3 });
}
