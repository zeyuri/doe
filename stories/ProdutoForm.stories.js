import * as React from "react"
import { ProdutoForm } from "../components/ProdutoForm"

export default {
  title: "Produto Form",
}

const Story = (args) => <ProdutoForm {...args} />

export const Default = Story.bind({})
