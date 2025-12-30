import React, { useState, useEffect } from 'react';
import FormularioCalculadora from './componentes/FormularioCalculadora';
import VisualizacaoResultados from './componentes/VisualizacaoResultados';
import ConteudoEducacional from './componentes/ConteudoEducacional';
import { ResumoSimulacao, UnidadeTaxa, UnidadeTempo } from './tipos';
import { calcularJurosCompostos } from './utilitarios/utilitariosFinanceiros';

const App: React.FC = () => {
  const [resultado, setResultado] = useState<ResumoSimulacao | null>(null);

  useEffect(() => {
    // Cálculo inicial automático para preencher a tela no preview
    gerenciarCalculo({
      valorInicial: 1000,
      valorMensal: 1000,
      taxa: 8,
      unidadeTaxa: UnidadeTaxa.ANUAL,
      periodo: 20,
      unidadeTempo: UnidadeTempo.ANOS
    });
  }, []);

  const gerenciarCalculo = (params: {
    valorInicial: number;
    valorMensal: number;
    taxa: number;
    unidadeTaxa: UnidadeTaxa;
    periodo: number;
    unidadeTempo: UnidadeTempo;
  }) => {
    const simulacao = calcularJurosCompostos(
      params.valorInicial,
      params.valorMensal,
      params.taxa,
      params.unidadeTaxa,
      params.periodo,
      params.unidadeTempo
    );
    setResultado(simulacao);
  };

  const gerenciarLimpeza = () => setResultado(null);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20 selection:bg-red-100 selection:text-red-900">
      <header className="bg-white border-b border-slate-100 py-6 mb-16 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-red-800 w-12 h-12 rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-red-800/20">
              <span className="text-white font-black text-2xl leading-none">%</span>
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-slate-800">
              Investi<span className="text-red-800">PRO</span>
            </h1>
          </div>
          <nav className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <span>Simulador Profissional</span>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in relative z-0">
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 tracking-tight">O Poder do Tempo</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Visualize o crescimento exponencial do seu patrimônio com nosso simulador de alta precisão.
          </p>
        </div>

        <div className="space-y-16 relative z-10">
          <FormularioCalculadora aoCalcular={gerenciarCalculo} aoLimpar={gerenciarLimpeza} />
          {resultado && <VisualizacaoResultados resumo={resultado} />}
          <ConteudoEducacional />
        </div>
      </main>

      <footer className="mt-40 border-t border-slate-100 py-20 text-center text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">
        <p>© {new Date().getFullYear()} InvestiPRO. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;