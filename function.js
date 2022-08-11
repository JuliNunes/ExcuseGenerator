// VERSÃO BR
const entrada = [
	'Velho, foi mal,',
	'Se liga no que aconteceu,',
	'Mano, olha isso,',
	'Desculpa, não vou conseguir ir,',
	'My bad, não vou aparecer,',
	'Você não vai acreditar nisso,',
	'Por favor não fica com raiva, não vou poder ir mais,',
	'Isso vai parecer uma desculpa, mas se liga,',
	'Hoje não vai da mano,',
];

const culpado = [
	'meu cachorro',
	'minha mãe',
	'meu irmão',
	'meu tio',
	'meu chefe',
	'meu gato',
	'minha sogra',
	'a dançarina do faustão',
	'meu amigo',
	'minha amiga',
];

const motivo = [
	'pegou fogo.',
	'morreu na minha frente.',
	'caiu da escada.',
	'me passou aids.',
	'ta na prisão.',
	'cagou na minha cama.',
	'roubou meu dinheiro.',
	'me deu um filho.',
	'me pediu em casamento',
	'me deu um tiro',
];

function generator() {
	let entry = entrada[Math.floor(Math.random() * entrada.length)];
	let scapegoat = culpado[Math.floor(Math.random() * culpado.length)];
	let reason = motivo[Math.floor(Math.random() * motivo.length)];

	result = `${entry} ${scapegoat} ${reason}`;
	document.getElementById('desculpa').value = result;
}
