export type BlockType = {
    business?: string;
    dataType?: DataTypeValue;
    id: number;
    viewType?: string;
    imgId: number;
  };

  export type DataTypeValue = 'income' | 'bill_avr' | 'production'