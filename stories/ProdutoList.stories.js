import * as React from "react"
import { ProdutoList } from "../components/ProdutoList"

export default {
  title: "Produto List",
}

const Story = (args) => <ProdutoList {...args} />

export const Default = Story.bind({})

Default.args = {
  list: [
    { name: "Pacote de Arroz 5 Kg", unidades: 2 },
    { name: "Feijão carioca 1KG", unidades: 5 },
  ],
}

export const ListaVazia = Story.bind({})

ListaVazia.args = {}
