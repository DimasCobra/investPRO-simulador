import * as React from 'react';
import { UnidadeTaxa, UnidadeTempo } from '../tipos';

const { useState } = React;

interface FormularioCalculadoraProps {
  aoCalcular: (params: {
    valorInicial: number;
    valorMensal: number;
    taxa: number;
    unidadeTaxa: UnidadeTaxa;
    periodo: number;
    unidadeTempo: UnidadeTempo;
  }) => void;
  aoLimpar: () => void;
}

const FormularioCalculadora = ({ aoCalcular, aoLimpar }: FormularioCalculadoraProps) => {
  const [valorInicial, setValorInicial] = useState('10.001,00');
  const [valorMensal, setValorMensal] = useState('1.000,00');
  const [taxa, setTaxa] = useState('8');
  const [unidadeTaxa, setUnidadeTaxa] = useState(UnidadeTaxa.ANUAL);
  const [periodo, setPeriodo] = useState('20');
  const [unidadeTempo, setUnidadeTempo] = useState(UnidadeTempo.ANOS);

  const converterParaNumero = (val: string): number => {
    if (!val) return 0;
    const limpo = val.replace(/\./g, '').replace(',', '.');
    return parseFloat(limpo) || 0;
  };

  const formatarEntradaMoeda = (val: string) => {
    const limpo = val.replace(/\D/g, '');
    const numero = (parseInt(limpo) / 100) || 0;
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
    }).format(numero);
  };

  const gerenciarMudancaMoeda = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(formatarEntradaMoeda(e.target.value));
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase text-slate-500 tracking-wider">Valor inicial (R$)</label>
          <div className="flex bg-white border border-slate-200 rounded-2xl overflow-hidden focus-within:ring-4 focus-within:ring-red-800/5 transition-all">
            <span className="bg-slate-50 px-5 py-4 text-slate-400 font-bold border-r border-slate-100">R$</span>
            <input 
              type="text" 
              value={valorInicial} 
              onChange={gerenciarMudancaMoeda(setValorInicial)} 
              className="flex-1 px-5 py-4 outline-none font-bold text-slate-700 bg-white" 
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase text-slate-500 tracking-wider">Valor mensal (R$)</label>
          <div className="flex bg-white border border-slate-200 rounded-2xl overflow-hidden focus-within:ring-4 focus-within:ring-red-800/5 transition-all">
            <span className="bg-slate-50 px-5 py-4 text-slate-400 font-bold border-r border-slate-100">R$</span>
            <input 
              type="text" 
              value={valorMensal} 
              onChange={gerenciarMudancaMoeda(setValorMensal)} 
              className="flex-1 px-5 py-4 outline-none font-bold text-slate-700 bg-white" 
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase text-slate-500 tracking-wider">Taxa de juros (%)</label>
          <div className="flex bg-white border border-slate-200 rounded-2xl overflow-hidden focus-within:ring-4 focus-within:ring-red-800/5 transition-all">
            <span className="bg-slate-50 px-5 py-4 text-slate-400 font-bold border-r border-slate-100">%</span>
            <input 
              type="text" 
              value={taxa} 
              onChange={(e) => setTaxa(e.target.value)} 
              className="flex-1 px-5 py-4 outline-none font-bold text-slate-700 bg-white" 
            />
            <select 
              value={unidadeTaxa} 
              onChange={(e) => setUnidadeTaxa(e.target.value as UnidadeTaxa)} 
              className="bg-slate-50 px-4 font-bold border-l border-slate-100 outline-none cursor-pointer text-slate-600"
            >
              <option value={UnidadeTaxa.ANUAL}>anual</option>
              <option value={UnidadeTaxa.MENSAL}>mensal</option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase text-slate-500 tracking-wider">Período</label>
          <div className="flex bg-white border border-slate-200 rounded-2xl overflow-hidden focus-within:ring-4 focus-within:ring-red-800/5 transition-all">
            <input 
              type="number" 
              value={periodo} 
              onChange={(e) => setPeriodo(e.target.value)} 
              className="flex-1 px-6 py-4 outline-none font-bold text-slate-700 bg-white" 
            />
            <select 
              value={unidadeTempo} 
              onChange={(e) => setUnidadeTempo(e.target.value as UnidadeTempo)} 
              className="bg-slate-50 px-4 font-bold border-l border-slate-100 outline-none cursor-pointer text-slate-600"
            >
              <option value={UnidadeTempo.ANOS}>ano(s)</option>
              <option value={UnidadeTempo.MESES}>mês(es)</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-8 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-6">
        <button 
          onClick={() => aoCalcular({ 
            valorInicial: converterParaNumero(valorInicial), 
            valorMensal: converterParaNumero(valorMensal), 
            taxa: converterParaNumero(taxa), 
            unidadeTaxa, 
            periodo: parseInt(periodo) || 0, 
            unidadeTempo 
          })} 
          className="w-full sm:w-auto px-12 py-4 bg-red-800 text-white font-black rounded-2xl shadow-xl shadow-red-800/20 active:scale-95 transition-all hover:bg-red-900"
        >
          Calcular
        </button>
        <button 
          onClick={aoLimpar} 
          className="text-slate-400 font-bold hover:text-slate-600 transition-colors uppercase text-xs tracking-widest"
        >
          Limpar campos
        </button>
      </div>
    </div>
  );
};

export default FormularioCalculadora;