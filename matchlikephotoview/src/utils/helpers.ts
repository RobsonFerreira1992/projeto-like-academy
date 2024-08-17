import config from '../config'
import moment from 'moment'

export function formatarHoraLocal(value: string) {
  if (value) {
    return moment
      .utc(String(value), 'HH:mm')

      .local()
      .format('HH:mm')
  }
  return ''
}

export default {
  // getConsultoriaStatusStyle(idStatus) {
  //   if (!idStatus) {
  //     return
  //   }

  //   switch (idStatus) {
  //     case config.CONSULTORIA_AGENDADA:
  //       return { backgroundColor: 'rgb(182, 124, 191)' }

  //     case config.CONSULTORIA_DESISTIU_ATEND:
  //       return { backgroundColor: 'rgb(226, 87, 87)' }

  //     case config.CONSULTORIA_ATEND_PAUSADO:
  //       return { backgroundColor: 'rgb(220, 195, 121)' }

  //     case config.CONSULTORIA_AGUARD_REAGEND:
  //       return { backgroundColor: 'rgb(23, 162, 184)' }

  //     case config.CONSULTORIA_ATEND_FINALIZADO:
  //       return { backgroundColor: 'rgb(113, 187, 130)' }

  //     case config.CONSULTORIA_ATEND_INICIADO:
  //       return { backgroundColor: 'rgb(3, 95, 199)' }

  //     case config.CONSULTORIA_AGUARD_AGEND:
  //       return { backgroundColor: 'rgb(124, 182, 255)' }

  //     case config.CONSULTORIA_AGUARD_PLANTAO:
  //       return { backgroundColor: 'rgb(255, 148, 0)' }

  //     case config.CONSULTORIA_CLIENTE_INATIVO:
  //       return { backgroundColor: 'rgb(255, 50, 70)' }

  //     case config.CONSULTORIA_MATERIAL_CONFERIDO:
  //       return { backgroundColor: 'rgb(171, 88, 88)' }

  //     case config.CONSULTORIA_MATERIAL_RECEBIDO:
  //       return { backgroundColor: 'rgb(190, 126, 126)' }

  //     case config.CONSULTORIA_MATERIAL_CONFERIDO_MAIS:
  //       return {
  //         backgroundColor: '#ffab2f',
  //         color: '#622fbd'
  //       }

  //     case config.CONSULTORIA_MATERIAL_REJEITADO:
  //       return { backgroundColor: 'rgb(220, 126, 126)' }
  //   }
  // },

  // obterPrimeirosCaracteres(texto, qtdCaracteres) {
  //   if (!texto) return ''
  //   if (texto.length > qtdCaracteres) {
  //     return `${texto.slice(0, qtdCaracteres)}...`
  //   }
  //   return texto
  // },
  formatarMoeda(value, moeda) {
    if (value || value === 0) {
      if (moeda == 'EUR') {
        return value.toLocaleString('pt-PT', {
          minimumFractionDigits: 2,
          style: 'currency',
          currency: 'EUR'
        })
      } else {
        return value.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          style: 'currency',
          currency: 'BRL'
        })
      }
    }
  },
  obterPrimeiroNome(nomeCompleto: string) {
    if (!nomeCompleto) {
      return ''
    }
    const nomePosicao = nomeCompleto.split(' ')[0]
    if (!nomePosicao) {
      return ''
    }
    const primeiraMaiuscula =
      nomePosicao[0].toUpperCase() + nomePosicao.substr(1).toLowerCase()
    return primeiraMaiuscula
  },
  // obterPrimeiroESegundoNome(nomeCompleto) {
  //   const primeiroNome = obterNomePorPosicao(nomeCompleto, 0)
  //   const segundoNome = obterNomePorPosicao(nomeCompleto, 1)
  //   return `${primeiroNome} ${segundoNome}`
  // },
  // obterNomePorPosicao(nomeCompleto: string, posicao: number) {
  //   if (!nomeCompleto) {
  //     return ''
  //   }
  //   const nomePosicao = nomeCompleto.split(' ')[posicao]
  //   if (!nomePosicao) {
  //     return ''
  //   }
  //   const primeiraMaiuscula =
  //     nomePosicao[0].toUpperCase() + nomePosicao.substr(1).toLowerCase()
  //   return primeiraMaiuscula
  // },
  // arrayInsertAtIndex(array, idx, value) {
  //   return [].concat(array.slice(0, idx), value, array.slice(idx))
  // },
  phoneMask(value: string) {
    if (!value) return ''

    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '($1) $2') //Coloca parênteses em volta dos dois primeiros dígitos
      .replace(/(\d)(\d{4})$/, '$1-$2') //Coloca hífen entre o quarto e o quinto dígito
  },
  dateNascMask(value: string) {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '$1/$2') //Coloca parênteses em volta dos dois primeiros dígitos
      .replace(/(\d{2})(\d)/, '$1/$2') //Coloca hífen entre o quarto e o quinto dígito
  },
  cepMask(value: string) {
    if (value) {
      return value
        .replace(/\D/g, '') //Remove tudo o que não é dígito
        .replace(/^(\d{5})(\d)/, '$1-$2') //Coloca traço entre o quinto e o sexto dígitos
    }
  },
  cpfMask(value: string) {
    if (!value) return ''

    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  },

  revertMask(value: string) {
    return value.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  },
  formatarDataLocal(value: string) {
    if (value) {
      return moment.utc(String(value)).local().format('DD/MM/YYYY')
    }
    return ''
  },
  formatarDataHoraLocal(value: string) {
    if (value) {
      return moment.utc(String(value)).local().format('DD/MM/YYYY HH:mm')
    }
    return ''
  },
  // formatarHoraLocal
  // obterDiaSemana(value) {
  //   if (value) {
  //     return moment.utc(String(value)).local().format('dddd')
  //   }
  //   return ''
  // },
  // groupBy(arrayOfObject, key) {
  //   return arrayOfObject.reduce(function (rv, x) {
  //     ;(rv[x[key]] = rv[x[key]] || []).push(x)
  //     return rv
  //   }, {})
  // },
  // obterExtensaoArquivo(nomeArquivo) {
  //   if (!nomeArquivo) {
  //     return
  //   }

  //   const partesNomeArquivo = nomeArquivo.split('.')
  //   const extensaoArquivo =
  //     '.' + partesNomeArquivo[partesNomeArquivo.length - 1]
  //   return extensaoArquivo
  // },
  // parseNomeCompleto(nomeCompleto) {
  //   let primeiroNome = ''
  //   let restante = ''

  //   if (nomeCompleto) {
  //     const espacoIdx = nomeCompleto.indexOf(' ')

  //     if (espacoIdx >= 0) {
  //       primeiroNome = nomeCompleto.substr(0, espacoIdx)
  //       restante = nomeCompleto.substr(espacoIdx + 1)
  //     } else {
  //       primeiroNome = nomeCompleto
  //     }
  //   }

  //   return {
  //     primeiroNome: primeiroNome,
  //     restante: restante
  //   }
  // },

  // getOptions(itensObj) {
  //   if (!itensObj) {
  //     return []
  //   }

  //   const options = []
  //   for (const key in itensObj) {
  //     options.push({ text: itensObj[key], value: key })
  //   }

  //   return options
  // },

  // getUrlParameter(name) {
  //   name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  //   const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  //   const results = regex.exec(location.search || location.hash)
  //   return results === null
  //     ? ''
  //     : decodeURIComponent(results[1].replace(/\+/g, ' '))
  // },

  // obterDescricaoAmbiente(ambienteValue) {
  //   const item = config.LISTA_AMBIENTES.find((i) => i.value == ambienteValue)
  //   return item?.text
  // },

  // obterDescricaoFuncaoArquiteto(idFuncao) {
  //   const item = config.FUNCOES_ARQUITETO.find((i) => i.id == idFuncao)
  //   return item?.descricao
  // },

  // obterCorFuncaoArquiteto(idFuncao) {
  //   const item = config.FUNCOES_ARQUITETO.find((i) => i.id == idFuncao)
  //   return item?.cor
  // }

  cpfValidator(cpfComOuSemMascara: string | undefined) {
    if (!cpfComOuSemMascara) {
      return false
    }

    //Extraindo somente os números
    const cpf = cpfComOuSemMascara.replace(/[^0-9]/g, '')

    let numeros, digitos, soma, i, resultado, digitos_iguais
    digitos_iguais = 1
    if (cpf.length < 11) return false
    for (i = 0; i < cpf.length - 1; i++)
      if (cpf.charAt(i) != cpf.charAt(i + 1)) {
        digitos_iguais = 0
        break
      }
    if (!digitos_iguais) {
      numeros = cpf.substring(0, 9)
      digitos = cpf.substring(9)
      soma = 0
      for (i = 10; i > 1; i--) soma += numeros.charAt(10 - i) * i
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
      if (resultado != digitos.charAt(0)) return false
      numeros = cpf.substring(0, 10)
      soma = 0
      for (i = 11; i > 1; i--) soma += numeros.charAt(11 - i) * i
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
      if (resultado != digitos.charAt(1)) return false
      return true
    } else return false
  },

  normalizeText(text) {
    return text
      .toLowerCase() // Converter para letras minúsculas
      .normalize('NFD') // Normalizar acentos
      .replace(/[\u0300-\u036f]/g, '') // Remover acentos
      .replace(/[^a-z0-9]/g, ' ') // Remover caracteres não alfanuméricos
  }
}
