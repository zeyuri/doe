import React from "react"
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
  Button,
} from "@chakra-ui/core"
import { useForm } from "react-hook-form"

export function ProdutoForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      flexDirection="column"
      alignItems="flex-end"
    >
      <Stack spacing={2} direction="row" mb="2">
        <FormControl id="email">
          <FormLabel color="gray.500" fontSize="xs">
            Nome
          </FormLabel>
          <Input
            id="nome"
            name="nome"
            placeholder="Pacote de Arroz 5 Kg"
            ref={register}
          />
        </FormControl>
        <Box flexBasis="10%">
          <FormLabel htmlFor="unidade" color="gray.500" fontSize="xs">
            Unidades
          </FormLabel>
          <NumberInput min={1} defaultValue={1} id="unidade">
            <NumberInputField name="unidade" ref={register} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
      </Stack>
      <Button type="submit" colorScheme="teal" size="sm">
        Adicionar
      </Button>
    </Flex>
  )
}

export default ProdutoForm
