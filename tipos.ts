export enum UnidadeTempo {
  MESES = 'mês(es)',
  ANOS = 'ano(s)'
}

export enum UnidadeTaxa {
  MENSAL = 'mensal',
  ANUAL = 'anual'
}

export interface ResultadoSimulacao {
  mes: number;
  juros: number;
  totalInvestido: number;
  totalJuros: number;
  totalAcumulado: number;
}

export interface ResumoSimulacao {
  totalFinal: number;
  totalInvestido: number;
  totalJuros: number;
  dados: ResultadoSimulacao[];
}