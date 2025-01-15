// Sequência completa do genoma do SARS-CoV-2
const covidSeq = `
ATTAAAGGTTTATACCTTCCCAGGTAACAAACCAACCAACTTTCGATCTCTTGTAGATCTGTTCTCTAAACGAACTTTAA
AATCTGTGTGGCTGTCACTCGGCTGCATGCTTAGTGCACTCACGCAGTATAATTAATAACTAATTACTGTCGTTGACAGG
ACACGAGTAACTCGTCTATCTTCTGCAGGCTGCTGGAACCGTGGGGTTTTTACAGGTTCGTTTCGGAAGAGACAGGTACG
TTTTGCCTGTTTTACAGGTTCGGTTCGGATGGAAAGGTTTGGATTATACTACCCCGTTTTTCAGTGCGGCCCGCCTGAAC
TTTCCGAAGAGGTTTTCGGTAATGAATTTCGTGTCCGTATTTGCATGTTTACGCGAGGTCGTGTTTCAGTCGTTTCGCTG
TGGGCTCCGCCTGCTGACTTTTCTTCCCTGCCCTCAGTGCTGCTGCTGCCTCAGTGTGCCAGCGTCAGGTCAACCTCGGC
TCAACGCGCCGGCCTTTCTTCTCGAAGACGCGGACTCCCTGCGATTTGCGGCTTCCCTGCCGGCCACCAACCTCCCTCGC
TGCGGAGAGCGTCCCGGGGATCTCTGGTTCATCTTCTCAGACCCAGACAGGAGGCTTGCTAGTTACAGTGGTTTGCCTTC
GGTCTCCCTTTGTTTTTGCCTTCCTGGGGATGGCGGGTTTTGTCTGCCCTCTTCTCGGCGGGTTTTTGGTGGCTTGACCG
GCCTGCTGCTGTTTGTCGGCGTTTTCGCTGCTGCTGCTGCTGCTGCTGCTGCAGGGTCTCGCTGCGCTGCTGCCGTTTAC
GTTCCGTGCTGCGCGCTGCTGCTGCTGCTGCTGCTGCTGTTGTTTGTCTCGGCGTTCGGGTTTCTGCTGCTGCTGTTGTT
GGCTTCTTTGTCGCGTTTCTTCTGCTGCTGCTGCTGCTGCTGTTGGGTTTTGCTGCTGCTGCTGCTGCTGCTGTTGTTGT
`.replace(/\n/g, ''); // Remove quebras de linha

// Função para gerar sequência aleatória
function geraSequenciaAleatoria(tamanho) {
    const nucleotideos = ["A", "C", "G", "T"];
    let sequencia = "";
    for (let i = 0; i < tamanho; i++) {
        sequencia += nucleotideos[Math.floor(Math.random() * 4)];
    }
    return sequencia;
}

// Função para calcular a frequência de nucleotídeos
function calculaFrequenciaNucleotideos(sequencia) {
    const frequencia = { A: 0, C: 0, G: 0, T: 0 };
    for (const nuc of sequencia) {
        if (frequencia[nuc] !== undefined) {
            frequencia[nuc]++;
        }
    }
    return [frequencia.A, frequencia.C, frequencia.G, frequencia.T];
}

// Função para calcular frequência de sequências consecutivas
function calculaFrequenciaSequencias(sequencia, nucleotideo) {
    const frequencias = [];
    let count = 0;

    for (let i = 0; i < sequencia.length; i++) {
        if (sequencia[i] === nucleotideo) {
            count++;
        } else if (count > 0) {
            frequencias[count] = (frequencias[count] || 0) + 1;
            count = 0;
        }
    }
    if (count > 0) frequencias[count] = (frequencias[count] || 0) + 1;

    return frequencias;
}

// Gera sequência aleatória
const randomSeq = geraSequenciaAleatoria(covidSeq.length);

// Calcula frequências de nucleotídeos
const freqNucRandom = calculaFrequenciaNucleotideos(randomSeq);
const freqNucCOVID = calculaFrequenciaNucleotideos(covidSeq);

// Calcula frequências de sequências
const nucleotideos = ["A", "C", "G", "T"];
const freqSeqRandom = nucleotideos.map(nuc => calculaFrequenciaSequencias(randomSeq, nuc));
const freqSeqCOVID = nucleotideos.map(nuc => calculaFrequenciaSequencias(covidSeq, nuc));

// Configurações dos gráficos
const layoutFreq = {
    title: "Frequência dos Nucleotídeos",
    xaxis: { title: "Nucleotídeos" },
    yaxis: { title: "Frequência" }
};

const layoutSeq = {
    xaxis: { title: "Número de Nucleotídeos Consecutivos", dtick: 1 },
    yaxis: { title: "Frequência", type: "log" }
};

// Plot dos gráficos com Plotly
Plotly.newPlot("frequencia-de-nucleotideos", [
    { x: nucleotideos, y: freqNucRandom, type: "bar", name: "Aleatório" },
    { x: nucleotideos, y: freqNucCOVID, type: "bar", name: "COVID-19" }
], layoutFreq);

Plotly.newPlot("frequencia-de-sequencias-random", nucleotideos.map((nuc, i) => ({
    x: Array.from({ length: freqSeqRandom[i].length }, (_, index) => index),
    y: freqSeqRandom[i].map(v => v || 0),
    mode: "lines",
    name: nuc
})), {
    ...layoutSeq,
    title: "Frequência de Sequências (Aleatório)"
});

Plotly.newPlot("frequencia-de-sequencias-covid", nucleotideos.map((nuc, i) => ({
    x: Array.from({ length: freqSeqCOVID[i].length }, (_, index) => index),
    y: freqSeqCOVID[i].map(v => v || 0),
    mode: "lines",
    name: nuc
})), {
    ...layoutSeq,
    title: "Frequência de Sequências (COVID-19)"
});
