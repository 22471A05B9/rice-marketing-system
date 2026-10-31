import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Listing {
  id: number;
  farmer: string;
  village: string;
  variety: string;
  pricePerKg: number;
  stockKg: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <header class="top">
      <h1>Rice Marketing Hub</h1>
      <p>Farmers list their rice. Buyers browse and send an enquiry. Sample data, no backend.</p>
    </header>

    <main>
      <section class="filters">
        <input type="search" placeholder="Search farmer or village"
               [ngModel]="query()" (ngModelChange)="query.set($event)" aria-label="Search">
        <select [ngModel]="variety()" (ngModelChange)="variety.set($event)" aria-label="Variety">
          @for (v of varieties; track v) { <option [value]="v">{{ v }}</option> }
        </select>
        <span class="count">{{ enquiries().length }} enquiries</span>
      </section>

      <section class="grid">
        @for (l of visible(); track l.id) {
          <article class="item">
            <h2>{{ l.variety }}</h2>
            <p class="price">₹{{ l.pricePerKg }} per kg</p>
            <p>{{ l.farmer }}, {{ l.village }}</p>
            <p>{{ l.stockKg }} kg available</p>
            <button (click)="toggle(l.id)" [class.on]="enquiries().includes(l.id)">
              {{ enquiries().includes(l.id) ? 'Remove enquiry' : 'Send enquiry' }}
            </button>
          </article>
        } @empty {
          <p>No rice matches your search. Clear the filters to see all listings.</p>
        }
      </section>

      <section class="add">
        <h2>Add a listing</h2>
        <div class="row">
          <input placeholder="Farmer name" [(ngModel)]="draft.farmer" name="farmer">
          <input placeholder="Village" [(ngModel)]="draft.village" name="village">
          <select [(ngModel)]="draft.variety" name="variety">
            @for (v of varieties.slice(1); track v) { <option [value]="v">{{ v }}</option> }
          </select>
          <input type="number" min="1" placeholder="Price per kg (₹)" [(ngModel)]="draft.pricePerKg" name="price">
          <input type="number" min="1" placeholder="Stock (kg)" [(ngModel)]="draft.stockKg" name="stock">
          <button (click)="add()">Add listing</button>
        </div>
        @if (error()) { <p class="err">{{ error() }}</p> }
      </section>
    </main>
  `,
  styles: [`
    .top { background: #2f5233; color: #f6f1e1; padding: 28px 20px; }
    .top h1 { margin: 0 0 6px; font-size: 2rem; }
    .top p { margin: 0; opacity: .85; }
    main { max-width: 960px; margin: 0 auto; padding: 20px; }
    .filters, .row { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
    input, select, button { font: inherit; padding: 9px 12px; border: 1px solid #b9ae8a; border-radius: 6px; background: #fff; }
    button { background: #c9a227; border-color: #c9a227; cursor: pointer; font-weight: 700; color: #23301f; }
    button.on { background: #2f5233; border-color: #2f5233; color: #fff; }
    button:focus-visible, input:focus-visible, select:focus-visible { outline: 3px solid #2f5233; outline-offset: 2px; }
    .count { margin-left: auto; font-weight: 700; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; margin: 20px 0; }
    .item { background: #fffdf5; border: 1px solid #d8cfae; border-radius: 8px; padding: 14px; }
    .item h2 { margin: 0 0 4px; font-size: 1.2rem; }
    .item p { margin: 4px 0; }
    .price { font-weight: 700; color: #2f5233; }
    .add { border-top: 2px solid #d8cfae; padding-top: 14px; }
    .err { color: #a3281c; font-weight: 700; }
  `]
})
export class AppComponent {
  varieties = ['All', 'Sona Masuri', 'Basmati', 'Ponni', 'Red Rice'];
  listings = signal<Listing[]>([
    { id: 1, farmer: 'Sample Farmer A', village: 'Sample Village 1', variety: 'Sona Masuri', pricePerKg: 52, stockKg: 800 },
    { id: 2, farmer: 'Sample Farmer B', village: 'Sample Village 2', variety: 'Basmati', pricePerKg: 85, stockKg: 400 },
    { id: 3, farmer: 'Sample Farmer C', village: 'Sample Village 3', variety: 'Ponni', pricePerKg: 48, stockKg: 1200 }
  ]);
  query = signal('');
  variety = signal('All');
  enquiries = signal<number[]>([]);
  error = signal('');
  draft = { farmer: '', village: '', variety: 'Sona Masuri', pricePerKg: 0, stockKg: 0 };

  visible = computed(() => {
    const q = this.query().trim().toLowerCase();
    return this.listings().filter(
      (l) =>
        (this.variety() === 'All' || l.variety === this.variety()) &&
        (!q || l.farmer.toLowerCase().includes(q) || l.village.toLowerCase().includes(q))
    );
  });

  toggle(id: number): void {
    this.enquiries.update((e) => (e.includes(id) ? e.filter((x) => x !== id) : [...e, id]));
  }

  add(): void {
    const d = this.draft;
    if (!d.farmer.trim() || !d.village.trim() || d.pricePerKg <= 0 || d.stockKg <= 0) {
      this.error.set('Fill in farmer, village, price and stock before adding.');
      return;
    }
    this.error.set('');
    const id = Math.max(0, ...this.listings().map((l) => l.id)) + 1;
    this.listings.update((all) => [...all, { id, ...d, farmer: d.farmer.trim(), village: d.village.trim() }]);
    this.draft = { farmer: '', village: '', variety: 'Sona Masuri', pricePerKg: 0, stockKg: 0 };
  }
}
