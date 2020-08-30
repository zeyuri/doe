import React from "react"
import { Flex, List, Heading, Stack, Button, Center } from "@chakra-ui/core"
import { ProdutoItem } from "./ProdutoItem"

export function ProdutoList({ list = [] }) {
  const ListaHasItem = list.length > 0
  return (
    <Flex direction="column" justify="space-between" height="99vh" pb="10">
      <Stack spacing="4">
        <Heading size="lg" color="gray.600">
          Lista de Doações
        </Heading>
        <List borderWidth={ListaHasItem ? "1" : "0px"} borderRadius={2}>
          {ListaHasItem ? (
            list.map((produtoItem, i) => (
              <ProdutoItem key={i} {...produtoItem} />
            ))
          ) : (
            <p>
              Sua Lista de doações está vazia{" "}
              <span role="img" aria-label="Emoji de face neutra">
                😐
              </span>
            </p>
          )}
        </List>
        <Center>
          <Button variant="ghost" color="teal.500" textTransform="uppercase">
            Adicionar Mais Itens
          </Button>
        </Center>
      </Stack>
      {ListaHasItem && <Button colorScheme="teal">Confirmar Doação</Button>}
    </Flex>
  )
}

export default ProdutoList
