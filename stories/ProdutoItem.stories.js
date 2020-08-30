import * as React from "react"
import { ProdutoItem } from "../components/ProdutoItem"

export default {
  title: "Produto Item",
}

const Story = (args) => <ProdutoItem {...args} />

export const Default = Story.bind({})

Default.args = {
  name: "Pacote de Arroz 5 Kg",
  unidades: 2,
}

export const Loading = Story.bind({})

Loading.args = {
  ...Default.args,
  isLoading: true,
}
