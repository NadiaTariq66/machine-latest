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

  mockApiResponse =[
    {
        "ASSETS": {
            "Current assets": {
                "_items": [
                    {
                        "line_item": "Cash and equivalents",
                        "us_gaap_name": "us-gaap:CashAndCashEquivalentsAtCarryingValue",
                        "values": {
                            "2024": 5524000000.0,
                            "2023": 12814000000.0
                        }
                    },
                    {
                        "line_item": "Short-term investments",
                        "us_gaap_name": "us-gaap:ShortTermInvestments",
                        "values": {
                            "2024": 31000000.0,
                            "2023": 2000000.0
                        }
                    },
                    {
                        "line_item": "Accounts receivable, net",
                        "us_gaap_name": "us-gaap:AccountsReceivableNetCurrent",
                        "values": {
                            "2024": 10919000000.0,
                            "2023": 11155000000.0
                        }
                    },
                    {
                        "line_item": "Inventories",
                        "us_gaap_name": "us-gaap:InventoryNet",
                        "values": {
                            "2024": 4181000000.0,
                            "2023": 4099000000.0
                        }
                    },
                    {
                        "line_item": "Prepaid expenses and other",
                        "us_gaap_name": "us-gaap:PrepaidExpenseAndOtherAssets",
                        "values": {
                            "2024": 4927000000.0,
                            "2023": 4932000000.0
                        }
                    },
                    {
                        "line_item": "Total current assets",
                        "us_gaap_name": "us-gaap:AssetsCurrent",
                        "values": {
                            "2024": 25582000000.0,
                            "2023": 33002000000.0
                        }
                    }
                ]
            },
            "Non-current assets": {
                "_items": [
                    {
                        "line_item": "Investments",
                        "us_gaap_name": "us-gaap:LongTermInvestments",
                        "values": {
                            "2024": 279000000.0,
                            "2023": 304000000.0
                        }
                    },
                    {
                        "line_item": "Property and equipment, net",
                        "us_gaap_name": "us-gaap:PropertyPlantAndEquipmentNet",
                        "values": {
                            "2024": 5134000000.0,
                            "2023": 4989000000.0
                        }
                    },
                    {
                        "line_item": "Intangible assets, net",
                        "us_gaap_name": "us-gaap:IntangibleAssetsNetExcludingGoodwill",
                        "values": {
                            "2024": 60068000000.0,
                            "2023": 55610000000.0
                        }
                    },
                    {
                        "line_item": "Goodwill",
                        "us_gaap_name": "us-gaap:Goodwill",
                        "values": {
                            "2024": 34956000000.0,
                            "2023": 32293000000.0
                        }
                    },
                    {
                        "line_item": "Other assets",
                        "us_gaap_name": "us-gaap:OtherAssetsNoncurrent",
                        "values": {
                            "2024": 9142000000.0,
                            "2023": 8513000000.0
                        }
                    },
                    {
                        "line_item": "Total assets",
                        "us_gaap_name": "us-gaap:Assets",
                        "values": {
                            "2024": 135161000000.0,
                            "2023": 134711000000.0
                        }
                    }
                ]
            }
        },
        "LIABILITIES_AND_EQUITY": {
            "Liabilities": {
                "Current liabilities": {
                    "_items": [
                        {
                            "line_item": "Current portion of long-term debt",
                            "us_gaap_name": "us-gaap:LongTermDebtAndCapitalLeaseObligationsCurrent",
                            "values": {
                                "2024": 6804000000.0,
                                "2023": 7191000000.0
                            }
                        },
                        {
                            "line_item": "Accounts payable and accrued liabilities",
                            "us_gaap_name": "us-gaap:AccountsPayableAndAccruedLiabilitiesCurrent",
                            "values": {
                                "2024": 31945000000.0,
                                "2023": 30650000000.0
                            }
                        },
                        {
                            "line_item": "Total current liabilities",
                            "us_gaap_name": "us-gaap:LiabilitiesCurrent",
                            "values": {
                                "2024": 38749000000.0,
                                "2023": 37841000000.0
                            }
                        }
                    ]
                },
                "Non-current liabilities": {
                    "_items": [
                        {
                            "line_item": "Long-term debt and finance lease obligations",
                            "us_gaap_name": "us-gaap:LongTermDebtAndCapitalLeaseObligations",
                            "values": {
                                "2024": 60340000000.0,
                                "2023": 52194000000.0
                            }
                        },
                        {
                            "line_item": "Deferred income taxes",
                            "us_gaap_name": "us-gaap:DeferredIncomeTaxLiabilitiesNet",
                            "values": {
                                "2024": 2579000000.0,
                                "2023": 1952000000.0
                            }
                        },
                        {
                            "line_item": "Other long-term liabilities",
                            "us_gaap_name": "us-gaap:OtherLiabilitiesNoncurrent",
                            "values": {
                                "2024": 30129000000.0,
                                "2023": 32327000000.0
                            }
                        }
                    ]
                }
            },
            "Equity": {
                "_items": [
                    {
                        "line_item": "Common stock",
                        "us_gaap_name": "us-gaap:CommonStockValueOutstanding",
                        "values": {
                            "2024": 18000000.0,
                            "2023": 18000000.0
                        }
                    },
                    {
                        "line_item": "Common stock held in treasury",
                        "us_gaap_name": "us-gaap:TreasuryStockValue",
                        "values": {
                            "2024": -8201000000.0,
                            "2023": -6533000000.0
                        }
                    },
                    {
                        "line_item": "Additional paid-in capital",
                        "us_gaap_name": "us-gaap:AdditionalPaidInCapitalCommonStock",
                        "values": {
                            "2024": 21333000000.0,
                            "2023": 20180000000.0
                        }
                    },
                    {
                        "line_item": "Accumulated deficit",
                        "us_gaap_name": "us-gaap:RetainedEarningsAccumulatedDeficit",
                        "values": {
                            "2024": -7900000000.0,
                            "2023": -1000000000.0
                        }
                    },
                    {
                        "line_item": "Accumulated other comprehensive loss",
                        "us_gaap_name": "us-gaap:AccumulatedOtherComprehensiveIncomeLossNetOfTax",
                        "values": {
                            "2024": -1925000000.0,
                            "2023": -2305000000.0
                        }
                    },
                    {
                        "line_item": "Total stockholders' equity",
                        "us_gaap_name": "us-gaap:StockholdersEquity",
                        "values": {
                            "2024": 3325000000.0,
                            "2023": 10360000000.0
                        }
                    },
                    {
                        "line_item": "Noncontrolling interest",
                        "us_gaap_name": "us-gaap:MinorityInterest",
                        "values": {
                            "2024": 39000000.0,
                            "2023": 37000000.0
                        }
                    },
                    {
                        "line_item": "Total equity",
                        "us_gaap_name": "us-gaap:StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest",
                        "values": {
                            "2024": 3364000000.0,
                            "2023": 10397000000.0
                        }
                    }
                ]
            },
            "Total liabilities and equity": {
                "us_gaap_name": "us-gaap:LiabilitiesAndStockholdersEquity",
                "values": {
                    "2024": 135161000000.0,
                    "2023": 134711000000.0
                }
            }
        }
    }
]
  financials : any = [];
  ngOnInit() {
    this.mapBalanceSheetFromVariable();
    this.financials = this.convertMockApiToFinancialsFullyGeneric(this.mockApiResponse);
    console.log("Financials:",this.financials);
  }

  mapBalanceSheetFromVariable() {
    const data = this.mockApiResponse;
    if (!Array.isArray(data) || !data.length) return;
    const balanceSheetObj = data[0];
    if (!balanceSheetObj) return;

    // Helper to collect all years from a section
    function collectYearsFromSection(sectionObj: any) {
      const yearsSet = new Set<string>();
      if (!sectionObj) return yearsSet;
      if (sectionObj._items) {
        sectionObj._items.forEach((item: any) => {
          Object.keys(item.values).forEach(year => {
            if (year !== "None") yearsSet.add(year);
          });
        });
      } else {
        // For equity, which is just _items array
        Object.values(sectionObj).forEach((subSection: any) => {
          if (subSection && subSection._items) {
            subSection._items.forEach((item: any) => {
              Object.keys(item.values).forEach(year => {
                if (year !== "None") yearsSet.add(year);
              });
            });
          }
        });
      }
      return yearsSet;
    }

    // --- ASSETS ---
    const assets = balanceSheetObj.ASSETS;
    const assetYears = new Set<string>();
    Object.values(assets).forEach((section: any) => {
      section._items?.forEach((item: any) => {
        Object.keys(item.values).forEach(year => {
          if (year !== "None") assetYears.add(year);
        });
      });
    });
    const allAssetYears = Array.from(assetYears).sort();
    const assetTable = {
      table_label: 'Assets ($000,000)',
      headers: allAssetYears.map(year => ({ year })),
      data: [],
      children: Object.entries(assets).map(([sectionName, sectionValue]: [string, any]) => ({
        row_head_label: sectionName,
        row_head_key: sectionName.toLowerCase().replace(/[^a-z0-9]+/g, '_'),
        data: [],
        children: (sectionValue._items || []).map((item: any) => ({
          row_head_label: item.line_item,
          row_head_key: item.us_gaap_name,
          data: allAssetYears.map(year => item.values[year] ?? 0)
        }))
      }))
    };

    // --- LIABILITIES AND EQUITY ---
    const liabilitiesAndEquity = balanceSheetObj.LIABILITIES_AND_EQUITY;
    const yearsSet = new Set<string>();

    // Collect all years from both Liabilities and Equity
    Object.values(liabilitiesAndEquity.Liabilities || {}).forEach((section: any) => {
      section._items?.forEach((item: any) => {
        Object.keys(item.values).forEach(year => yearsSet.add(year));
      });
    });
    (liabilitiesAndEquity.Equity?._items || []).forEach((item: any) => {
      Object.keys(item.values).forEach(year => yearsSet.add(year));
    });
    const allYears = Array.from(yearsSet).sort();

    // Liabilities children
    const liabilitiesChildren = Object.entries(liabilitiesAndEquity.Liabilities || {}).map(
      ([sectionName, sectionValue]: [string, any]) => ({
        row_head_label: sectionName,
        children: (sectionValue._items || []).map((item: any) => ({
          row_head_label: item.line_item,
          row_head_key: item.us_gaap_name,
          data: allYears.map(year => item.values[year] ?? 0)
        }))
      })
    );

    // Equity children
    const equityChildren = (liabilitiesAndEquity.Equity?._items || []).map((item: any) => ({
        row_head_label: item.line_item,
        row_head_key: item.us_gaap_name,
        data: allYears.map(year => item.values[year] ?? 0)
    }));

    // Final Table
    const liabilitiesAndEquityTable = {
      table_label: 'Liabilities and Equity',
      headers: allYears.map(year => ({ year })),
      data: [],
      children: [
        {
          row_head_label: 'Liabilities',
          children: liabilitiesChildren
        },
        {
          row_head_label: 'Equity',
          children: equityChildren
        }
      ]
    };

    // --- SET TABLES ---
    this.balanceSheetTable = [assetTable, liabilitiesAndEquityTable];
    console.log('Equity Children:', equityChildren);
    console.log('All Equity Years:', allYears);
    console.log('Equity Items:', liabilitiesAndEquity.Equity?._items);

    liabilitiesAndEquity.Equity?._items.forEach(item => {
      console.log('Item:', item.line_item, 'Values:', item.values);
    });
  }



   @ViewChild('docViewer', { static: false }) docViewer!: ElementRef<HTMLIFrameElement>;
  modelRef : any;
  current_gap = "";
  current_context = ""
  openCapIQPopup(popupRef : any,r:any, year : any){
    console.log("Row:",r);
    this.current_gap = "";
    if(r && r['row_head_key']){
        this.current_gap = r['row_head_key'];
    }
    if(year == '2024'){
        this.current_context = 'c-13';
    }else{
        this.current_context = 'c-14';
    }
    console.log(this.current_context);

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
          `[name="${this.current_gap}"][contextref="${this.current_context}"]`
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

  convertMockApiToFinancials(mockApiResponse: any) {
    const result: any[] = [];
    const table: any = {
      table_label: 'Assets ($000)',
      headers: [],
      data: []
    };

    const assetsData = mockApiResponse[0]?.ASSETS;
    if (!assetsData) return result;

    // Step 1: Collect all unique years from the values
    const yearSet = new Set<string>();
    for (const categoryData of Object.values(assetsData) as { _items: any[] }[]) {
      for (const item of categoryData._items) {
        Object.keys(item.values || {}).forEach((year) => yearSet.add(year));
      }
    }

    const sortedYears = Array.from(yearSet).sort();

    // Step 2: Generate headers
    table.headers = sortedYears.map((year) => ({ year: `${year} FY` }));

    // Step 3: Convert each item into row format
    const generateRow = (item: any) => {
      return {
        row_head_label: item.line_item,
        row_head_key: item.line_item.toLowerCase().replace(/[^a-z0-9]/gi, '_'),
        data: sortedYears.map((y) => item.values?.[y] ?? null)
      };
    };

    // Step 4: Loop through both Current and Non-current assets
    for (const [_, categoryData] of Object.entries(assetsData)) {
      const items = (categoryData as any)._items;
      for (const item of items) {
        const row = generateRow(item);
        table.data.push(row);
      }
    }

    result.push(table);
    return result;
  }
convertMockApiToFinancialsFullyGeneric(mockApiResponse: any) {
  const result: any[] = [];

  const topLevelData = mockApiResponse[0];
  if (!topLevelData) return result;

  // Step 1: Extract all years
  const yearSet = new Set<string>();

  function extractYearsRecursive(node: any) {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) {
      node.forEach(extractYearsRecursive);
    } else if (node._items) {
      node._items.forEach((item: any) => {
        Object.keys(item.values || {}).forEach((year) => yearSet.add(year));
      });
    } else if (node.values) {
      Object.keys(node.values).forEach((year) => yearSet.add(year));
    } else {
      Object.values(node).forEach(extractYearsRecursive);
    }
  }

  Object.values(topLevelData).forEach(extractYearsRecursive);

  const sortedYears = Array.from(yearSet).sort();
  const headers = sortedYears.map((year) => ({ year: `${year} FY` }));

  // Step 2: Recursive row builder
  function buildRowsRecursive(dataNode: any): any[] {
    const rows: any[] = [];

    for (const [label, value] of Object.entries(dataNode) as any) {
      if (value._items) {
        const children = value._items.map((item: any) => ({
          row_head_label: item.line_item,
          row_head_key: item.line_item.toLowerCase().replace(/[^a-z0-9]/gi, '_'),
          data: sortedYears.map((y) => item.values?.[y] ?? null)
        }));

        rows.push({
          row_head_label: label,
          row_head_key: label.toLowerCase().replace(/[^a-z0-9]/gi, '_'),
          children
        });
      } else if (value.values) {
        rows.push({
          row_head_label: label,
          row_head_key: label.toLowerCase().replace(/[^a-z0-9]/gi, '_'),
          data: sortedYears.map((y) => value.values?.[y] ?? null)
        });
      } else {
        // Further nested group
        const children = buildRowsRecursive(value);
        if (children.length > 0) {
          rows.push({
            row_head_label: label,
            row_head_key: label.toLowerCase().replace(/[^a-z0-9]/gi, '_'),
            children
          });
        }
      }
    }

    return rows;
  }

  // Step 3: Create table per top-level section (Assets, Liabilities and Equity)
  for (const [sectionLabel, sectionData] of Object.entries(topLevelData)) {
    const table: any = {
      table_label: sectionLabel.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()) + ' ($000)',
      headers,
      data: buildRowsRecursive(sectionData)
    };

    result.push(table);
  }

  return result;
}





}
