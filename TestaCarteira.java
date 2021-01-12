

/**
 * 
 * Usando qualquer ferramenta de codificação, crie um algoritmo seguindo os passos abaixo para encontrar o valor do saldo ao final 
 * do processo (atente-se para utilizar . como separador decimal):
 * O saldo da sua conta é R$ 1000,00
 * 
 * Você decide comprar uma calça por R$ 99,90
 * Você recebe o seu salário de R$ 2500,00
 * Você está caminhando na rua e decide dar R$ 0,10 para um morador de rua
 * Você compra um ar condicionado cujo valor é 25% do seu saldo atual
 * Você decide antecipar o pagamento de uma dívida usando metade do seu saldo
 * Qual o valor do seu saldo?
 */

public class TestaCarteira {

	public static void main(String[] args) {
		Carteira carteira = new Carteira(1000);
		carteira.utilizarSaldo(99.9); //comprar calça
		carteira.receberSalario(2500); // Salario
		carteira.utilizarSaldo(0.1); //Doar para morador de rua.
		carteira.utilizarPorcentagemDoSaldo(25);
		System.out.println(carteira.toString());
	}

}
