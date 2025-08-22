import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    { question: 'How do you currently market and sell your rice?', answer:' Rice is typically marketed through traditional markets, local wholesalers, cooperatives, and, in some cases, directly to consumers. Some farmers also use online platforms and social media to reach a broader audience.' },
    { question: 'What challenges do you face in marketing your rice?', answer: 'Common challenges include fluctuating market prices, competition from larger producers, lack of access to premium markets, transportation issues, and inadequate storage facilities.' },
    { question: 'How satisfied are you with the current market prices for your rice?', answer: 'Satisfaction with market prices varies. Many farmers feel that prices are not reflective of their production costs, leading to lower profit margins. Some are content if they have access to consistent buyers.' },
    { question: 'Do you belong to any farmer cooperatives or marketing groups? If yes, how has it helped you?', answer: 'Membership in cooperatives can help by providing better access to markets, collective bargaining power, and shared resources for marketing and distribution, leading to potentially higher profits.' },
    { question: 'What factors influence your decision on where to sell your rice?', answer: ' Decisions are influenced by factors such as market prices, demand, proximity to markets, reliability of buyers, and transportation costs.' },
    { question: 'How do you obtain market information (e.g., prices, demand, trends)?', answer: 'Farmers obtain market information through local markets, cooperatives, government agencies, digital platforms, and word of mouth within the farming community.' },
    { question: 'What barriers do you face in accessing larger or more profitable markets?', answer: 'Barriers include lack of access to transportation, insufficient market information, inability to meet large-scale demand, and competition from established suppliers.' },
    { question: 'Are you familiar with modern marketing techniques such as online selling and branding?', answer: 'Some farmers are familiar with these techniques, but adoption rates vary. Those who use online selling and branding often find it helpful in reaching a wider audience and improving their brand recognition.' },
    { question: 'Do you use any digital tools or platforms for marketing your rice? If yes, which ones?', answer: ' Some farmers use digital platforms like social media, e-commerce websites, and agricultural apps to market their rice. Common platforms include Facebook, WhatsApp, and local online marketplaces.' },
    { question: 'What kind of support or training would you find most beneficial for improving your rice marketing efforts?', answer: 'Training in digital marketing, branding, supply chain management, and access to market information would be beneficial. Additionally, support in accessing financial services for better marketing strategies is often needed.' },
  ];

  selectedFaq: any = null;

  showAnswer(faq: any) {
    this.selectedFaq = faq;
  }

  hideAnswer() {
    this.selectedFaq = null;
  }
}
