# Simulador de Juros Compostos - InvestiPRO

Este simulador oferece precisão contábil utilizando o regime de **Aporte Antecipado**, onde o juro do primeiro mês (mês zero) incide sobre o capital inicial.

## 🚀 Como rodar localmente (VSCode)

1. **Abra o terminal** em uma pasta vazia e execute:
   ```bash
   npm create vite@latest . -- --template react-ts
   npm install recharts lucide-react
   ```
2. **Substitua os arquivos:** Copie os códigos gerados nesta conversa e cole nos respectivos arquivos dentro do seu projeto.
3. **Inicie o servidor:**
   ```bash
   npm run dev
   ```

## 🛠️ Como fazer o commit no GitHub

1. **Inicialize o Git:** `git init`
2. **Adicione os arquivos:** `git add .`
3. **Faça o commit:** `git commit -m "feat: simulador com precisão contábil e juros mês zero"`
4. **Suba para o GitHub:**
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
   git branch -M main
   git push -u origin main
   ```

## 🔍 Precisão Matemática Confirmada
- **Taxa Equivalente:** Convertida via fórmula geométrica: $(1 + i)^{1/12} - 1$.
- **Períodos:** Um período de 23 meses resulta em 24 aportes (1 inicial + 23 recorrentes), totalizando R$ 24.000,00 investidos se o aporte for de R$ 1.000,00.
- **Resultados:** R$ 183.456,24 em 10 anos (1k inicial + 1k mensal @ 8% aa).

# InvestiPRO - Simulador de Juros Compostos

## 🚀 Como rodar localmente (VSCode)

1. Certifique-se de que todos os arquivos (especialmente o `package.json`) estão na pasta raiz.
2. Abra o terminal no VSCode (`Ctrl + '`).
3. Verifique se está na pasta correta:
   - Digite `ls` (Mac/Linux) ou `dir` (Windows). O `package.json` deve aparecer.
4. Instale as dependências:
   ```bash
   npm install
   ```
5. Inicie o simulador:
   ```bash
   npm run dev
   ```
6. Acesse o link que aparecerá no terminal (ex: `http://localhost:5173`).

## 📤 Como fazer commit no GitHub

1. Inicialize o repositório: `git init`
2. Adicione os arquivos: `git add .`
3. Primeiro commit: `git commit -m "feat: estrutura inicial do simulador"`
4. Conecte ao seu repo: `git remote add origin https://github.com/SEU_USUARIO/investPRO.git`
5. Envie: `git push -u origin main`

# InvestiPRO - Simulador de Juros Compostos

Este simulador foi desenvolvido com foco em precisão contábil brasileira e experiência de usuário profissional.

## 📂 Estrutura de Pastas (Organizada)

- `componentes/`: Interfaces de UI (Formulário, Resultados, Conteúdo Educacional).
- `utilitarios/`: Lógica matemática e formatadores.
- `tipos.ts`: Definições globais de interfaces.
- `App.tsx`: Orquestrador da aplicação.

## 🚀 Como rodar localmente (VSCode)

1. Certifique-se de estar na pasta raiz do projeto.
2. No terminal do VSCode, instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse o endereço informado (geralmente `http://localhost:5173`).

## 📤 Como fazer commit no GitHub

1. Inicialize o repositório:
   ```bash
   git init
   ```
2. Adicione todos os arquivos:
   ```bash
   git add .
   ```
3. Crie o primeiro commit:
   ```bash
   git commit -m "feat: estrutura consolidada em português brasileiro"
   ```
4. Conecte ao seu repositório remoto:
   ```bash
   git remote add origin https://github.com/DimasCobra/investPRO-simulador.git
   ```
5. Envie para o GitHub:
   ```bash
   git push -u origin main
   ```

---
**Nota:** Se encontrar erros de importação no VSCode após colar os arquivos, delete as pastas antigas `components` e `utils` (em inglês) para evitar conflitos de cache do TypeScript.

# InvestiPRO - Produção & Deploy

## 🚀 Como resolver o erro "HttpError: Not Found" no Deploy

Se o seu GitHub Action falhou com a mensagem `HttpError: Not Found`, siga estes passos:

1. **Ative o GitHub Actions como fonte**:
   - Vá em **Settings** > **Pages**.
   - Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
   
2. **Re-execute o Deploy**:
   - Vá na aba **Actions**.
   - Clique no workflow que falhou à esquerda.
   - Clique no botão cinza **Re-run jobs** > **Re-run all jobs**.

## 🛠 Comandos para Atualizar o Site

Sempre que fizer uma mudança no código, use esta sequência no terminal do VSCode:

```bash
# 1. Prepara os arquivos
git add .

# 2. Grava a mudança
git commit -m "fix: ajuste de base path e configuracoes de deploy"

# 3. Envia para o GitHub (isso dispara o deploy automatico)
git push origin main
```

## 🔗 Link do Projeto
Após o ícone verde aparecer na aba Actions, acesse:
[https://DimasCobra.github.io/investPRO-simulador/](https://DimasCobra.github.io/investPRO-simulador/)

---
© 2025 InvestiPRO - Engenharia Financeira