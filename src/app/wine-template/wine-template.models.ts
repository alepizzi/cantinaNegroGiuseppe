export interface IWineList {
  [key: string]: IWine;
}
export interface IWine {
  id: string;
  name: string;
  grape?: string;
  grapeDebris?: string;
  ITDistillation?: string;
  DEDistillation?: string;
  ENDistillation?: string;
  FRDistillation?: string;
  ITStill?: string;
  DEStill?: string;
  ENStill?: string;
  FRStill?: string;
  ITFermentation?: string;
  DEFermentation?: string;
  ENFermentation?: string;
  FRFermentation?: string;
  ITAging: string;
  DEAging: string;
  ENAging: string;
  FRAging: string;
  ITCharacteristics1: string;
  DECharacteristics1: string;
  ENCharacteristics1: string;
  FRCharacteristics1: string;
  ITCharacteristics2: string;
  DECharacteristics2: string;
  ENCharacteristics2: string;
  FRCharacteristics2: string;
  ITCharacteristics3: string;
  DECharacteristics3: string;
  ENCharacteristics3: string;
  FRCharacteristics3: string;
  ITNotes: string;
  DENotes: string;
  ENNotes: string;
  FRNotes: string;
  photo: string;
  photo15?: string;
  photo3?: string;
  photo5?: string;
  downloadPDF: string;
  downloadZIP?: string;
  format?: IWineFormat[];
}

export interface IWineFormat {
  value: string;
}
