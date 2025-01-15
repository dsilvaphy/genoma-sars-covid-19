# 🧬 Genoma do SARS-COVID-19

Este repositório contém o código para análise da sequência genômica do SARS-COVID-19. A análise inclui gráficos que comparam a frequência de nucleotídeos e de sequências de nucleotídeos no genoma do SARS-COVID-19 e em um genoma gerado aleatoriamente.

## 📂 Estrutura do Repositório

- **`genoma.html`**: Arquivo HTML para visualização dos gráficos no navegador.
- **`genoma.js`**: Arquivo JavaScript com a lógica para análise e geração dos gráficos.
- **`capturas/`**: Pasta contendo exemplo de capturas de tela dos gráficos gerados.

## 🔍 Descrição do Código

1. **Geração de Genoma Aleatório**  
   Um genoma aleatório é gerado com nucleotídeos ('A', 'C', 'G', 'T') distribuídos uniformemente.

2. **Cálculo da Frequência de Nucleotídeos**  
   O script analisa a frequência de cada nucleotídeo no genoma gerado aleatoriamente e no genoma do SARS-COVID-19.

3. **Cálculo da Frequência de Sequências de Nucleotídeos**  
   São analisadas sequências consecutivas de nucleotídeos ('A', 'AA', 'AAA', etc.) em ambos os genomas.

## 📊 Gráficos Gerados

### 1️⃣ Frequência dos Nucleotídeos  
Este gráfico compara a quantidade de cada nucleotídeo no genoma do SARS-COVID-19 e no genoma aleatório. Observa-se que os nucleotídeos "A" e "T" são mais prevalentes no genoma do SARS-COVID-19.

<div align="center">
 <img src="https://github.com/dsilvaphy/genoma-sars-covid-19/blob/main/capturas/freqnucleo.png" width="500" height="400">
</div>

---

### 2️⃣ Frequência de Sequências (Aleatório)  
Gráfico que mostra como sequências de nucleotídeos aparecem no genoma gerado aleatoriamente. As curvas têm comportamento previsível devido à distribuição uniforme dos nucleotídeos.

<div align="center">
 <img src="https://github.com/dsilvaphy/genoma-sars-covid-19/blob/main/capturas/freqseqal.png" width="500" height="400">
</div>

---

### 3️⃣ Frequência de Sequências (SARS-COVID-19)  
Gráfico que mostra a frequência de sequências de nucleotídeos no genoma do SARS-COVID-19. As curvas para "C" e "G" caem mais rapidamente, indicando menor prevalência de sequências longas destes nucleotídeos.

<div align="center">
 <img src="https://github.com/dsilvaphy/genoma-sars-covid-19/blob/main/capturas/freqseqcovid.png" width="500" height="400">
</div>

---

## ℹ️ Informações Adicionais  

- Os dados do genoma do SARS-COVID-19 utilizados no script foram obtidos no site do [National Library of Medicine (NCBI)](https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/virus?SeqType_s=Nucleotide&VirusLineage_ss=SARS-CoV-2,%20taxid:2697049).  

🚀 **Sinta-se à vontade para usar e modificar o código para suas análises!**

## 📄 Licença

Este projeto está licenciado sob a **Creative Commons Attribution-NonCommercial 4.0 International License**. Não é permitido usar o código para fins comerciais.

Veja a licença completa [CC BY-NC 4.0](/creativecommons.org/licenses/by-nc/4.0/deed.pt-br).



