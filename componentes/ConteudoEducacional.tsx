import * as React from 'react';

const ConteudoEducacional = () => {
  return (
    <div className="mt-32 border-t border-slate-100 pt-20 animate-fade-in pb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-slate-900 mb-12 tracking-tight text-center">
          Dominando a Matemática da Riqueza
        </h2>
        
        {/* Passo a Passo */}
        <section className="mb-20">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-red-800 mb-8 border-l-4 border-red-800 pl-4">
            Guia de Utilização
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: 'Capital', d: 'Insira o "Valor Inicial" que você já possui para começar.' },
              { t: 'Aportes', d: 'Defina o "Valor Mensal" que pretende poupar regularmente.' },
              { t: 'Rendimento', d: 'Escolha a "Taxa de Juros" e se ela é mensal ou anual.' },
              { t: 'Horizonte', d: 'Determine o "Período" total (meses ou anos) da simulação.' },
              { t: 'Execução', d: 'Clique em "Calcular" para processar a curva exponencial.' }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-red-800 font-black text-lg mb-2 block">0{i + 1}.</span>
                <h4 className="font-bold text-slate-800 mb-1">{step.t}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Diferença Simples vs Compostos */}
        <section className="mb-20 bg-slate-900 rounded-[3rem] p-10 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-6">Simples vs. Compostos</h3>
            <p className="text-slate-400 mb-8 max-w-2xl">
              Enquanto os juros simples incidem apenas sobre o capital inicial (linear), os juros compostos incidem sobre o montante acumulado, gerando o efeito "bola de neve".
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold text-red-400 mb-3">Juros Simples</h4>
                <ul className="text-sm space-y-2 opacity-80">
                  <li>• Crescimento linear (reta)</li>
                  <li>• Calculado apenas sobre o aporte</li>
                  <li>• Comum em descontos e multas curtas</li>
                </ul>
              </div>
              <div className="p-6 bg-red-800/20 rounded-2xl border border-red-800/30">
                <h4 className="font-bold text-red-500 mb-3">Juros Compostos</h4>
                <ul className="text-sm space-y-2 opacity-80">
                  <li>• Crescimento exponencial (curva)</li>
                  <li>• Juros sobre juros acumulados</li>
                  <li>• O motor do mercado financeiro</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fórmula e Aplicações */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm text-center flex flex-col justify-center">
            <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mb-6">A Equação do Montante</h4>
            <p className="text-5xl font-black text-red-900 mb-8 tracking-tighter">M = C (1 + i)<sup>t</sup></p>
            <div className="grid grid-cols-2 gap-3 text-[10px] uppercase font-bold text-slate-400">
              <div className="p-3 bg-slate-50 rounded-xl">M = Montante</div>
              <div className="p-3 bg-slate-50 rounded-xl">C = Capital</div>
              <div className="p-3 bg-slate-50 rounded-xl">i = Taxa</div>
              <div className="p-3 bg-slate-50 rounded-xl">t = Tempo</div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800">Onde eles se aplicam?</h3>
            {[
              { t: 'Investimentos', d: 'CDBs, Tesouro Direto e Dividendos usam a força do tempo para multiplicar seu patrimônio.', c: 'text-green-600' },
              { t: 'Financiamentos', d: 'Bancos utilizam essa lógica para garantir retornos sobre o capital emprestado.', c: 'text-red-900' },
              { t: 'Dívidas', d: 'Cartão de crédito e cheque especial podem virar uma "bola de neve" se não pagos em dia.', c: 'text-red-500' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className={`mt-1 font-black ${item.c}`}>—</div>
                <div>
                  <h5 className="font-bold text-slate-800">{item.t}</h5>
                  <p className="text-sm text-slate-500">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <blockquote className="bg-red-50 p-12 rounded-[3rem] text-center border border-red-100 italic">
          <p className="text-2xl font-serif text-slate-700 mb-6">
            "Os juros compostos são a oitava maravilha do mundo. Aquele que entende, ganha; aquele que não entende, paga."
          </p>
          <cite className="not-italic font-black uppercase tracking-widest text-xs text-red-800">
            — Atribuído a Albert Einstein
          </cite>
        </blockquote>
      </div>
    </div>
  );
};

export default ConteudoEducacional;