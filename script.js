// Dados iniciais como na sua imagem
const initialTransactions = [
  {
    description: "compra viagem",
    amount: 150000, // R$ 1.500,00 (em centavos, se o app usar assim; ajuste se for direto)
    date: "02/09/2025",
    type: "income" // ou "outcome" se for saída
  }
];

// Se não houver dados salvos, use os iniciais
if (!localStorage.getItem('transactions')) {
  localStorage.setItem('transactions', JSON.stringify(initialTransactions));
}
