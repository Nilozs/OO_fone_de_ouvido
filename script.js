class FoneDeOuvido {

    constructor() {
        this.volume = 0
        this.cor = 'padrão'
        this.tamanho = 'padrão'
    }

    AumentarVolume(volumeAdicionado) {
        this.volume += volumeAdicionado
        
        if (this.volume > 100) {
            this.volume = 100
        }

    }

    DiminuirVolume(volumeDiminuido) {
        this.volume -= volumeDiminuido

        if (this.volume < 0) {
            this.volume = 0
        }
    }

    TodosAtributos() {
        return `Volume: ${this.volume}, Cor: ${this.cor}, Tamanho: ${this.tamanho}`
    }

    DefinirCor(corDefinida) {
        this.cor = corDefinida
    }

    DefinirTamanho(tamanhoDefinido) {
        this.tamanho = tamanhoDefinido
    }
}

x = new FoneDeOuvido()

x.AumentarVolume(10)
x.AumentarVolume(40)
x.DiminuirVolume(30)
x.DefinirCor('azul')
x.DefinirTamanho('5cm')

console.log(x.TodosAtributos());
