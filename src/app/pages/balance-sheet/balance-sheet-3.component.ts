import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { NgbModule, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormatNumberPipe } from '../../shared/pipes/number-format.pipe';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-balance-sheet',
  imports: [NgbModule,NgxSliderModule, CommonModule, FormatNumberPipe],
  templateUrl: './balance-sheet.component.html',
  styleUrl: './balance-sheet.component.scss'
})
export class BalanceSheetComponent implements OnInit {
 

  constructor(private router : Router, private http: HttpClient, private modalService: NgbModal){}
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
  balanceSheetTable = [
    {
      table_label: 'Assets ($000)',
      headers: [] as { year: string }[],
      data: [] as any[],
      children: [] as any[] // Will be filled dynamically from API
    },
  ]
  getRouterURL(){
    return this.router.url;
  }
  navigate(url : string){
    this.router.navigate([url]);
  }

  mockApiResponse = [
    {
      "balance_sheet": {
        "September 28,2024 September 30,2023": {
          "ASSETS": {
            "Current assets": {
                "_items": [
                    {
                        "line_item": "Cash and cash equivalents",
                        "us_gaap_name": "us-gaap:CashAndCashEquivalentsAtCarryingValue",
                        "values": {
                            "2024": 29943000000.0,
                            "2023": 29965000000.0
                        }
                    },
                    {
                        "line_item": "Marketable securities",
                        "us_gaap_name": "us-gaap:MarketableSecuritiesCurrent",
                        "values": {
                            "2024": 35228000000.0,
                            "2023": 31590000000.0
                        }
                    },
                    {
                        "line_item": "Accounts receivable, net",
                        "us_gaap_name": "us-gaap:AccountsReceivableNetCurrent",
                        "values": {
                            "2024": 33410000000.0,
                            "2023": 29508000000.0
                        }
                    },
                    {
                        "line_item": "Vendor non-trade receivables",
                        "us_gaap_name": "us-gaap:NontradeReceivablesCurrent",
                        "values": {
                            "2024": 32833000000.0,
                            "2023": 31477000000.0
                        }
                    },
                    {
                        "line_item": "Inventories",
                        "us_gaap_name": "us-gaap:InventoryNet",
                        "values": {
                            "2024": 7286000000.0,
                            "2023": 6331000000.0
                        }
                    },
                    {
                        "line_item": "Other current assets",
                        "us_gaap_name": "us-gaap:OtherAssetsCurrent",
                        "values": {
                            "2024": 14287000000.0,
                            "2023": 14695000000.0
                        }
                    },
                    {
                        "line_item": "Total current assets",
                        "us_gaap_name": "us-gaap:AssetsCurrent",
                        "values": {
                            "2024": 152987000000.0,
                            "2023": 143566000000.0
                        }
                    }
                ]
            },
            "Non-current assets": {
                "_items": [
                    {
                        "line_item": "Marketable securities",
                        "us_gaap_name": "us-gaap:MarketableSecuritiesNoncurrent",
                        "values": {
                            "2024": 91479000000.0,
                            "2023": 100544000000.0
                        }
                    },
                    {
                        "line_item": "Property, plant and equipment, net",
                        "us_gaap_name": "us-gaap:PropertyPlantAndEquipmentNet",
                        "values": {
                            "2024": 45680000000.0,
                            "2023": 43715000000.0
                        }
                    },
                    {
                        "line_item": "Other non-current assets",
                        "us_gaap_name": "us-gaap:OtherAssetsNoncurrent",
                        "values": {
                            "2024": 74834000000.0,
                            "2023": 64758000000.0
                        }
                    },
                    {
                        "line_item": "Total non-current assets",
                        "us_gaap_name": "us-gaap:AssetsNoncurrent",
                        "values": {
                            "2024": 211993000000.0,
                            "2023": 209017000000.0
                        }
                    },
                    {
                        "line_item": "Total assets",
                        "us_gaap_name": "us-gaap:Assets",
                        "values": {
                            "2024": 364980000000.0,
                            "2023": 352583000000.0
                        }
                    }
                ]
            },
            "Current liabilities": {
                "_items": [
                    {
                        "line_item": "Accounts payable",
                        "us_gaap_name": "us-gaap:AccountsPayableCurrent",
                        "values": {
                            "2024": 68960000000.0,
                            "2023": 62611000000.0
                        }
                    },
                    {
                        "line_item": "Other current liabilities",
                        "us_gaap_name": "us-gaap:OtherLiabilitiesCurrent",
                        "values": {
                            "2024": 78304000000.0,
                            "2023": 58829000000.0
                        }
                    },
                    {
                        "line_item": "Deferred revenue",
                        "us_gaap_name": "us-gaap:ContractWithCustomerLiabilityCurrent",
                        "values": {
                            "2024": 8249000000.0,
                            "2023": 8061000000.0
                        }
                    },
                    {
                        "line_item": "Commercial paper",
                        "us_gaap_name": "us-gaap:CommercialPaper",
                        "values": {
                            "2024": 9967000000.0,
                            "2023": 5985000000.0
                        }
                    },
                    {
                        "line_item": "Term debt",
                        "us_gaap_name": "us-gaap:LongTermDebtCurrent",
                        "values": {
                            "2024": 10912000000.0,
                            "2023": 9822000000.0
                        }
                    },
                    {
                        "line_item": "Total current liabilities",
                        "us_gaap_name": "us-gaap:LiabilitiesCurrent",
                        "values": {
                            "2024": 176392000000.0,
                            "2023": 145308000000.0
                        }
                    }
                ]
            },
            "Non-current liabilities": {
                "_items": [
                    {
                        "line_item": "Term debt",
                        "us_gaap_name": "us-gaap:LongTermDebtNoncurrent",
                        "values": {
                            "2024": 85750000000.0,
                            "2023": 95281000000.0
                        }
                    },
                    {
                        "line_item": "Other non-current liabilities",
                        "us_gaap_name": "us-gaap:OtherLiabilitiesNoncurrent",
                        "values": {
                            "2024": 45888000000.0,
                            "2023": 49848000000.0
                        }
                    },
                    {
                        "line_item": "Total non-current liabilities",
                        "us_gaap_name": "us-gaap:LiabilitiesNoncurrent",
                        "values": {
                            "2024": 131638000000.0,
                            "2023": 145129000000.0
                        }
                    },
                    {
                        "line_item": "Total liabilities",
                        "us_gaap_name": "us-gaap:Liabilities",
                        "values": {
                            "2024": 308030000000.0,
                            "2023": 290437000000.0
                        }
                    }
                ]
            },
            "Shareholders equity": {
                "_items": [
                    {
                        "line_item": "Common stock and additional paid-in capital, $0.00001par value:50,400,000shares authorized;15,116,786and15,550,061shares issued and outstanding, respectively",
                        "us_gaap_name": "us-gaap:CommonStockParOrStatedValuePerShare",
                        "values": {
                            "2024": 1e-05,
                            "2023": 1e-05
                        }
                    },
                    {
                        "line_item": "Common stock and additional paid-in capital, $0.00001par value:50,400,000shares authorized;15,116,786and15,550,061shares issued and outstanding, respectively",
                        "us_gaap_name": "us-gaap:CommonStockSharesAuthorized",
                        "values": {
                            "2024": 50400000000.0,
                            "2023": 50400000000.0
                        }
                    },
                    {
                        "line_item": "Common stock and additional paid-in capital, $0.00001par value:50,400,000shares authorized;15,116,786and15,550,061shares issued and outstanding, respectively",
                        "us_gaap_name": "us-gaap:CommonStockSharesIssued",
                        "values": {
                            "2024": 15116786000.0,
                            "2023": 15550061000.0
                        }
                    },
                    {
                        "line_item": "Common stock and additional paid-in capital, $0.00001par value:50,400,000shares authorized;15,116,786and15,550,061shares issued and outstanding, respectively",
                        "us_gaap_name": "us-gaap:CommonStockSharesOutstanding",
                        "values": {
                            "2024": 15116786000.0,
                            "2023": 15550061000.0
                        }
                    },
                    {
                        "line_item": "Common stock and additional paid-in capital, $0.00001par value:50,400,000shares authorized;15,116,786and15,550,061shares issued and outstanding, respectively",
                        "us_gaap_name": "us-gaap:CommonStocksIncludingAdditionalPaidInCapital",
                        "values": {
                            "2024": 83276000000.0,
                            "2023": 73812000000.0
                        }
                    },
                    {
                        "line_item": "Accumulated deficit",
                        "us_gaap_name": "us-gaap:RetainedEarningsAccumulatedDeficit",
                        "values": {
                            "2024": -19154000000.0,
                            "2023": -214000000.0
                        }
                    },
                    {
                        "line_item": "Accumulated other comprehensive loss",
                        "us_gaap_name": "us-gaap:AccumulatedOtherComprehensiveIncomeLossNetOfTax",
                        "values": {
                            "2024": -7172000000.0,
                            "2023": -11452000000.0
                        }
                    },
                    {
                        "line_item": "Total shareholders' equity",
                        "us_gaap_name": "us-gaap:StockholdersEquity",
                        "values": {
                            "2024": 56950000000.0,
                            "2023": 62146000000.0
                        }
                    },
                    {
                        "line_item": "Total liabilities and shareholders' equity",
                        "us_gaap_name": "us-gaap:LiabilitiesAndStockholdersEquity",
                        "values": {
                            "2024": 364980000000.0,
                            "2023": 352583000000.0
                        }
                    }
                ]
            }
        }
    }
}
},
  ];

  ngOnInit() {
    this.mapBalanceSheetFromVariable();
    console.log('balanceSheetTable:', this.balanceSheetTable[0]);
    console.log(this.balanceSheetTable[0].children);
    console.log('iframe:', this.docViewer);
  }

  mapBalanceSheetFromVariable() {
    const data = this.mockApiResponse;
          const balanceSheetObj = Array.isArray(data)
            ? data.find((item: any) => item.balance_sheet)
            : null;
    if (!balanceSheetObj) return;

    const periods = Object.keys(balanceSheetObj.balance_sheet);
    if (!periods.length) return;
    const sheet = (balanceSheetObj.balance_sheet as any)[periods[0]].ASSETS;

    // Collect all years
    const allYearsSet = new Set<string>();
    Object.values(sheet).forEach((section: any) => {
      section._items?.forEach((item: any) => {
        Object.keys(item.values).forEach(year => {
          if (year !== "None") allYearsSet.add(year);
        });
      });
    });
    const allYears = Array.from(allYearsSet).sort();

    // Set headers
    this.balanceSheetTable[0].headers = allYears.map(year => ({ year }));

    // Build children
    this.balanceSheetTable[0].children = Object.entries(sheet).map(([sectionName, sectionValue]: [string, any]) => ({
      row_head_label: sectionName,
      row_head_key: sectionName.toLowerCase().replace(/[^a-z0-9]+/g, '_'),
      data: [],
      children: (sectionValue._items || []).map((item: any) => ({
        row_head_label: item.line_item,
        row_head_key: item.us_gaap_name,
        data: allYears.map(year => item.values[year] ?? 0)
      }))
    }));
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
