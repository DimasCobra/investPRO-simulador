import { ResultadoSimulacao, ResumoSimulacao, UnidadeTempo, UnidadeTaxa } from '../tipos';

export const formatarMoeda = (valor: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor);
};

const arredondar = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

export const calcularJurosCompostos = (
  valorInicial: number,
  valorMensal: number,
  taxaJuros: number,
  unidadeTaxa: UnidadeTaxa,
  periodo: number,
  unidadeTempo: UnidadeTempo
): ResumoSimulacao => {
  
  let taxaMensal = (taxaJuros / 100);
  if (unidadeTaxa === UnidadeTaxa.ANUAL) {
    taxaMensal = Math.pow(1 + taxaMensal, 1 / 12) - 1;
  }

  const totalMeses = unidadeTempo === UnidadeTempo.ANOS ? periodo * 12 : periodo;
  const resultados: ResultadoSimulacao[] = [];
  
  let saldoAtual = 0;
  let investidoAcumulado = 0;
  let jurosAcumulado = 0;

  for (let m = 0; m <= totalMeses; m++) {
    const aporte = (m === 0) ? valorInicial : valorMensal;
    const baseCalculo = saldoAtual + aporte;
    investidoAcumulado = arredondar(investidoAcumulado + aporte);
    
    let jurosNoMes = 0;
    let saldoComJuros = baseCalculo;

    if (m > 0) {
      saldoComJuros = arredondar(baseCalculo * (1 + taxaMensal));
      jurosNoMes = arredondar(saldoComJuros - baseCalculo);
    }

    jurosAcumulado = arredondar(jurosAcumulado + jurosNoMes);
    saldoAtual = saldoComJuros;

    resultados.push({
      mes: m,
      juros: jurosNoMes,
      totalInvestido: investidoAcumulado,
      totalJuros: jurosAcumulado,
      totalAcumulado: saldoAtual
    });
  }

  return {
    totalFinal: saldoAtual,
    totalInvestido: investidoAcumulado,
    totalJuros: jurosAcumulado,
    dados: resultados
  };
};