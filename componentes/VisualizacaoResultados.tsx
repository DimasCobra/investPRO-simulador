import * as React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ResumoSimulacao } from '../tipos';
import { formatarMoeda } from '../utilitarista/utilitariosFinanceiros';

const { useState } = React;

interface VisualizacaoResultadosProps {
  resumo: ResumoSimulacao;
}

const VisualizacaoResultados = ({ resumo }: VisualizacaoResultadosProps) => {
  const [visao, setVisao] = useState<'grafico' | 'tabela'>('grafico');

  if (!resumo || !resumo.dados) return null;

  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-2xl font-black text-red-900 tracking-tight">Análise do Rendimento</h3>
        <div className="flex bg-slate-200 p-1 rounded-xl w-full sm:w-auto">
          <button 
            onClick={() => setVisao('grafico')} 
            className={`flex-1 sm:flex-none px-6 py-2 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${visao === 'grafico' ? 'bg-red-800 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Gráfico
          </button>
          <button 
            onClick={() => setVisao('tabela')} 
            className={`flex-1 sm:flex-none px-6 py-2 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${visao === 'tabela' ? 'bg-red-800 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Tabela
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-900 text-white p-8 rounded-[2rem] shadow-xl shadow-red-900/10 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-[10px] uppercase font-black opacity-60 mb-2 tracking-[0.2em]">Total Final</p>
            <p className="text-3xl font-black">{formatarMoeda(resumo.totalFinal)}</p>
          </div>
          <div className="absolute -right-4 -bottom-4 text-white opacity-5 text-8xl font-black italic select-none">$$</div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
          <p className="text-[10px] uppercase font-black text-slate-400 mb-2 tracking-[0.2em]">Total Investido</p>
          <p className="text-2xl font-black text-slate-800">{formatarMoeda(resumo.totalInvestido)}</p>
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
          <p className="text-[10px] uppercase font-black text-slate-400 mb-2 tracking-[0.2em]">Juros Ganhos</p>
          <p className="text-2xl font-black text-green-600">{formatarMoeda(resumo.totalJuros)}</p>
        </div>
      </div>

      {visao === 'grafico' ? (
        <div className="h-[450px] bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={resumo.dados} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#991b1b" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#991b1b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="mes" tick={{ fontSize: 10, fontWeight: '800', fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip 
                formatter={(value: number) => [formatarMoeda(value), 'Total']}
                labelFormatter={(label) => `Mês ${label}`}
                contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', padding: '16px' }}
                itemStyle={{ fontWeight: 'bold' }}
              />
              <Area 
                type="monotone" 
                dataKey="totalAcumulado" 
                stroke="#991b1b" 
                fillOpacity={1} 
                fill="url(#colorAcc)" 
                strokeWidth={5} 
                isAnimationActive={true} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
            <table className="w-full text-left">
              <thead className="sticky top-0 bg-slate-50 text-[10px] uppercase font-black text-slate-400 z-10">
                <tr>
                  <th className="px-10 py-6">Mês</th>
                  <th className="px-10 py-6">Investido</th>
                  <th className="px-10 py-6">Juros do Mês</th>
                  <th className="px-10 py-6">Saldo Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {resumo.dados.map(r => (
                  <tr key={r.mes} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-10 py-5 font-bold text-slate-400">Mês {r.mes}</td>
                    <td className="px-10 py-5 text-slate-600 font-medium">{formatarMoeda(r.totalInvestido)}</td>
                    <td className="px-10 py-5 text-green-600 font-bold">{formatarMoeda(r.juros)}</td>
                    <td className="px-10 py-5 font-black text-red-900">{formatarMoeda(r.totalAcumulado)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualizacaoResultados;