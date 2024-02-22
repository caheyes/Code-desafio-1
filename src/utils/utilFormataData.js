const UtilFormataData = {
  formatarDataNomeMes(dataString) {
    const meses = [
      'jan',
      'fev',
      'mar',
      'abr',
      'mai',
      'jun',
      'jul',
      'ago',
      'set',
      'out',
      'nov',
      'dez',
    ];

    const partes = dataString.split(/\/|:|\s/);
    const dia = partes[0];
    const mes = meses[parseInt(partes[1], 10) - 1];
    const ano = partes[2];
    // const hora = partes[3];
    // const minuto = partes[4];
    // const segundo = partes[5];

    return `${dia} de ${mes}, ${ano}`;
  },
};

export default UtilFormataData;
