

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

public class Carteira {
	
	private double valor;
	
	public Carteira(double valor) {
		this.valor = valor;
	}
	
	public Carteira() {
		valor = 0.0;
	}
	
	public double getSaldo() {
		return valor;
	}
	
	public void receberSalario(double valorDoSalario) {
		valor += valorDoSalario;
	}
	
	public void utilizarSaldo(double valorUtilizado) {
		valor -= valorUtilizado;
	}
	
	public void utilizarPorcentagemDoSaldo(double utilizarTantosPorcentos) {
		valor -= valor * (utilizarTantosPorcentos / 100); 
	}

	@Override
	public String toString() {
		return String.format("Seu saldo atual é de R$%.2f", valor);
	}

}
