import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormatNumberPipe } from '../../shared/pipes/number-format.pipe';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/module.d-CnjH8Dlt';
import { HttpClient } from '@angular/common/http';
@Component({
  standalone: true,
  selector: 'app-balance-sheet',
  imports: [NgbModule,NgxSliderModule, CommonModule, FormatNumberPipe],
  templateUrl: './balance-sheet.component.html',
  styleUrl: './balance-sheet.component.scss'
})
export class BalanceSheetComponent {
  constructor(
    private router : Router,
    private http : HttpClient,
    private modalService : NgbModal,
    ){}
  value: number = 2017;
  highValue: number = 2024;
  options: Options = {
    floor: 1995,
    ceil: 2024,
    step: 1,
    showTicks: true,
    showTicksValues: true,
    tickStep: 1,
    ticksArray: Array.from({ length: 2025 - 1995 + 1 }, (_, i) => 1995 + i),
    translate: (value: number, label: LabelType): string => {
      if (label === LabelType.Low || label === LabelType.High) {
        return `'${value.toString()}`;
      }
      return '';
    },
    animate: true,
    ticksTooltip: (val: number): string => `Year: ${val}`,
    
  };
  definationList = [
    {
      "term": "Assets ($000)",
      "definition": "Assets represent economic resources controlled by an entity expected to provide future benefits, reported in thousands of dollars.",
      "citation": "See ASC 210-10",
      "full_defination": "Assets represent economic resources controlled by an entity expected to provide future benefits, reported in thousands of dollars. (See ASC 210-10)",
      "tab": "key_highlights",
      "term_key": "assets_000"
    },
    {
      "term": "Cash and Equivalents",
      "definition": "Cash and Cash Equivalents include currency, bank deposits, and highly liquid investments with original maturities of three months or less.",
      "citation": "See ASC 230-10-20",
      "full_defination": "Cash and Equivalents include currency, bank deposits, and highly liquid investments with original maturities of three months or less. (See ASC 230-10-20)",
      "tab": "key_highlights",
      "term_key": "cash_and_equivalents"
    },
    {
      "term": "Short Term Investments",
      "definition": "Short Term Investments are marketable securities and other investments expected to be converted to cash within one year or operating cycle.",
      "citation": "See ASC 320-10",
      "full_defination": "Short Term Investments are marketable securities and other investments expected to be converted to cash within one year or operating cycle. (See ASC 320-10)",
      "tab": "key_highlights",
      "term_key": "short_term_investments"
    },
    {
      "term": "Cash & Short-term Investments",
      "definition": "Cash & Short-term Investments includes cash, cash equivalents, and marketable securities expected to be liquidated within one year.",
      "citation": "See ASC 305-10",
      "full_defination": "Cash & Short-term Investments includes cash, cash equivalents, and marketable securities expected to be liquidated within one year. (See ASC 305-10)",
      "tab": "key_highlights",
      "term_key": "cash_and_short_term_investments"
    },
    {
      "term": "Accounts Receivable",
      "definition": "Accounts Receivable are amounts due from customers for goods or services delivered or used but not yet paid for.",
      "citation": "See ASC 310-10",
      "full_defination": "Accounts Receivable are amounts due from customers for goods or services delivered or used but not yet paid for. (See ASC 310-10)",
      "tab": "key_highlights",
      "term_key": "accounts_receivable"
    },
    {
      "term": "Inventory",
      "definition": "Inventory consists of goods held for sale in the ordinary course of business or in production for such sale.",
      "citation": "See ASC 330-10",
      "full_defination": "Inventory consists of goods held for sale in the ordinary course of business or in production for such sale. (See ASC 330-10)",
      "tab": "key_highlights",
      "term_key": "inventory"
    },
    {
      "term": "Gross Property, Plant & Equipment",
      "definition": "Gross Property, Plant & Equipment is the total cost of all property, plant, and equipment before accumulated depreciation.",
      "citation": "See ASC 360-10",
      "full_defination": "Gross Property, Plant & Equipment is the total cost of all property, plant, and equipment before accumulated depreciation. (See ASC 360-10)",
      "tab": "key_highlights",
      "term_key": "gross_property_plant_equipment"
    },
    {
      "term": "Accumulated Depreciation",
      "definition": "Accumulated Depreciation is the total depreciation expense charged on property, plant, and equipment to date.",
      "citation": "See ASC 360-10",
      "full_defination": "Accumulated Depreciation is the total depreciation expense charged on property, plant, and equipment to date. (See ASC 360-10)",
      "tab": "key_highlights",
      "term_key": "accumulated_depreciation"
    },
    {
      "term": "Net Property, Plant & Equipment",
      "definition": "Net Property, Plant & Equipment equals gross property, plant, and equipment less accumulated depreciation.",
      "citation": "See ASC 360-10",
      "full_defination": "Net Property, Plant & Equipment equals gross property, plant, and equipment less accumulated depreciation. (See ASC 360-10)",
      "tab": "key_highlights",
      "term_key": "net_property_plant_equipment"
    },
    {
      "term": "Long-term Investments",
      "definition": "Long-term Investments are investments not intended to be liquidated within one year or operating cycle.",
      "citation": "See ASC 320-10",
      "full_defination": "Long-term Investments are investments not intended to be liquidated within one year or operating cycle. (See ASC 320-10)",
      "tab": "key_highlights",
      "term_key": "long_term_investments"
    },
    {
      "term": "Goodwill",
      "definition": "Goodwill represents the excess of purchase price over fair value of net identifiable assets acquired in a business combination.",
      "citation": "See ASC 350-20",
      "full_defination": "Goodwill represents the excess of purchase price over fair value of net identifiable assets acquired in a business combination. (See ASC 350-20)",
      "tab": "key_highlights",
      "term_key": "goodwill"
    },
    {
      "term": "Other Intangibles",
      "definition": "Other Intangibles are non-physical assets such as patents, trademarks, and customer relationships, excluding goodwill.",
      "citation": "See ASC 350-30",
      "full_defination": "Other Intangibles are non-physical assets such as patents, trademarks, and customer relationships, excluding goodwill. (See ASC 350-30)",
      "tab": "key_highlights",
      "term_key": "other_intangibles"
    },
    {
      "term": "Other Long-Term Assets",
      "definition": "Other Long-Term Assets are assets not classified elsewhere and expected to provide benefits beyond one year.",
      "citation": "See ASC 210-10",
      "full_defination": "Other Long-Term Assets are assets not classified elsewhere and expected to provide benefits beyond one year. (See ASC 210-10)",
      "tab": "key_highlights",
      "term_key": "other_long_term_assets"
    },
    {
      "term": "Total Assets",
      "definition": "Total Assets represent the sum of all current and long-term assets owned by an entity.",
      "citation": "See ASC 210-10",
      "full_defination": "Total Assets represent the sum of all current and long-term assets owned by an entity. (See ASC 210-10)",
      "tab": "key_highlights",
      "term_key": "total_assets"
    }
  ];
  popoverTitle: string = '';
  popoverContent: string = '';
  getPopoverContent(termKey: string) {
    const item = this.definationList.find((d) => d.term_key === termKey);
    if (!item) return null;
  
    return {
      title: item.term,
      content: item.full_defination,
    };
  }

  showPopover(termKey: string,table_label:string ="",row_label:string ="") {
    const data = this.getPopoverContent(termKey);
    this.popoverTitle = "";
    this.popoverContent = "";
    let title_extras = "";
    if (data) {
      if(table_label.indexOf("($000)")>-1){
        title_extras = " ($000)"
      }else if(row_label.indexOf("(x)")>-1){
        title_extras = " (x)"
      }
      this.popoverTitle = data.title + title_extras;
      this.popoverContent = data.content;
    }
  }
  financials = [
    {
      table_label : 'Assets ($000)',
      headers : [
        {year:'2017 FY'},
        {year:'2018 FY'},
        {year:'2019 FY'},
        {year:'2020 FY'},
        {year:'2021 FY'},
        {year:'2022 FY'},
        {year:'2023 FY'},
        {year:'2024 FY'},
      ],
      data : [
        { row_head_label: 'Cash and Equivalents', row_head_key: 'cash_and_equivalents', show10kFile : true, data: [25458888, 36458888, 36458888, 25458888, 36458888, 25458888, 55458888, 96458888] },
        { 
          row_head_label: 'Short Term Investments', 
          row_head_key: 'short_term_investments', 
          data: [25458888, 36458888, 36458888, 25458888, 36458888, 25458888, 55458888, 96458888],
          children : [
            {row_head_label : 'Cash & Short-term Investments', row_head_key : 'cash_and_short_term_investments', data : [30986000,41250000,55021000,84396000,96049000,70026000,86780000,101202000]}
          ] 
        },
        { row_head_label: 'Accounts Receivable', row_head_key: 'accounts_receivable', data: [66458888, 66458888, 66458888, 66458888, 72458888, 25458888, 66458888, 86458888] },
        { 
          row_head_label: 'Other Receivables', 
          row_head_key: 'other_receivables', 
          data: [55458888, 66458888, 66458888, 66458888, 66458888, 66458888, 66458888, 66458888], 
          children : [
            { row_head_label : 'Total Receivables', row_head_key : 'total_receivables', data : [11835000,16259000,20540000,24309000,32649000,37502000,46356000,48904000] }
          ] 
        },
        { row_head_label: 'Inventory', row_head_key: 'inventory', data: [25458888, 36458888, 66458888, 25458888, 66458888, 96458888, 66458888, 96458888] },
        { 
          row_head_label: 'Restricted Cash', 
          row_head_key: 'restricted_cash', 
          data: [66458888, 66458888, 25458888, 1000000, 66458888, 66458888, 66458888, 96458888],
          children : [
            { row_head_label : 'Total Current Assets', row_head_key : 'total_current_assets', data : [60197000,75101000,96334000,132733000,161580000,146791000,172351000,190867000] }
          ]  
        },
        { row_head_label: 'Gross Property, Plant & Equipment', row_head_key: 'gross_property_plant_equipment', data: [66458888, 66458888, 25458888, 1000000, 66458888, 66458888, 66458888, 96458888] },
        { 
          row_head_label: 'Accumulated Depreciation', 
          row_head_key: 'accumulated_depreciation', 
          data: [66458888, 66458888, 25458888, 1000000, 66458888, 66458888, 66458888, 96458888],
          children : [
            { row_head_label : 'Net Property, Plant & Equipment', row_head_key : 'net_property_plant_equipment', data : [48866000,61797000,97846000,150667000,216363000,252838000,276690000,328806000            ] }
          ]
        },
        { row_head_label: 'Long-term Investments', row_head_key: 'long_term_investments', data: [441000,722000,2169000,5700000,4003000,2815000,3568000,4889000
        ] },
        { row_head_label: 'Goodwill', row_head_key: 'goodwill', data: [66458888, 66458888, 25458888, 1000000, 66458888, 66458888, 66458888, 96458888] },
        { row_head_label: 'Other Intangibles', row_head_key: 'other_intangibles', data: [66458888, 66458888, 25458888, 1000000, 66458888, 66458888, 66458888, 96458888] },
        { row_head_label: 'Other Long-Term Assets', row_head_key: 'other_long_term_assets', data: [66458888, 66458888, 25458888, 1000000, 66458888, 66458888, 66458888, 96458888] },
        { row_head_label: 'Total Assets', row_head_key: 'total_assets', data: [131310000,162648000,225248000,321195000,420549000,462675000,527854000,624894000,
        ] }
      ]
    },
  ]
  getRouterURL(){
    return this.router.url;
  }
  navigate(url : string){
    this.router.navigate([url]);
  }
  @ViewChild('docViewer', { static: false }) docViewer!: ElementRef<HTMLIFrameElement>;
  modelRef : any;
  openCapIQPopup(popupRef : any,r:any){
    this.http.get('assets/10k-file.htm', { responseType: 'text' })
    .subscribe(html => {
      this.modelRef = this.modalService.open(popupRef,{size:'xl'});
      setTimeout(()=>{
        this.loadDocument(html,popupRef);
      },200)
    });
  }
  loadDocument(html: string,popupRef:any) {
    const iframe = this.docViewer.nativeElement;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(html);
      doc.close();

      setTimeout(() => {
        const target = doc.querySelector(
          '[name="us-gaap:CashAndCashEquivalentsAtCarryingValue"][contextref="c-13"]'
        );
        if (target) {
          (target as HTMLElement).style.backgroundColor = 'yellow';
          (target as HTMLElement).style.transition = 'background-color 0.5s ease';
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          console.warn('Target element not found.');
        }
      }, 100);
    }
  }

}
