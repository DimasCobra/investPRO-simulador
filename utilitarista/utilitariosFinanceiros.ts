import { ResultadoSimulacao, ResumoSimulacao, UnidadeTempo, UnidadeTaxa } from '../tipos';

export const formatarMoeda = (valor: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor);
};

// Arredondamento apenas para fins de exibição
const arredondarDisplay = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

export const calcularJurosCompostos = (
  valorInicial: number,
  valorMensal: number,
  taxaJuros: number,
  unidadeTaxa: UnidadeTaxa,
  periodo: number,
  unidadeTempo: UnidadeTempo
): ResumoSimulacao => {
  
  // Conversão de taxa (Geométrica: Anual -> Mensal)
  let taxaMensal = (taxaJuros / 100);
  if (unidadeTaxa === UnidadeTaxa.ANUAL) {
    taxaMensal = Math.pow(1 + taxaMensal, 1 / 12) - 1;
  }

  const totalMeses = unidadeTempo === UnidadeTempo.ANOS ? periodo * 12 : periodo;
  const resultados: ResultadoSimulacao[] = [];
  
  let saldoAtual = valorInicial;
  let investidoAcumulado = valorInicial;
  let jurosAcumulado = 0;

  // Mês 0 (Estado Inicial)
  resultados.push({
    mes: 0,
    juros: 0,
    totalInvestido: arredondarDisplay(investidoAcumulado),
    totalJuros: 0,
    totalAcumulado: arredondarDisplay(saldoAtual)
  });

  for (let m = 1; m <= totalMeses; m++) {
    // Cálculo com precisão total (sem arredondar o saldoAtual no meio do loop)
    const jurosNoMes = saldoAtual * taxaMensal;
    
    saldoAtual = saldoAtual + jurosNoMes + valorMensal;
    investidoAcumulado = investidoAcumulado + valorMensal;
    jurosAcumulado = jurosAcumulado + jurosNoMes;

    resultados.push({
      mes: m,
      juros: arredondarDisplay(jurosNoMes),
      totalInvestido: arredondarDisplay(investidoAcumulado),
      totalJuros: arredondarDisplay(jurosAcumulado),
      totalAcumulado: arredondarDisplay(saldoAtual)
    });
  }

  return {
    totalFinal: arredondarDisplay(saldoAtual),
    totalInvestido: arredondarDisplay(investidoAcumulado),
    totalJuros: arredondarDisplay(jurosAcumulado),
    dados: resultados
  };
};