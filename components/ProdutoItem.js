import React from "react"
import {
  Box,
  Skeleton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/core"

/**
 *
 * @param {{name: string, unidades: number, isLoading: boolean}} props
 */

export function ProdutoItem({ name, unidades, isLoading = false }) {
  return (
    <Box
      as="li"
      d="flex"
      py="5"
      px="3"
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth="1px"
      _first={{ borderTopWidth: "1px" }}
    >
      <Skeleton isLoaded={!isLoading}>
        <p>{name}</p>
      </Skeleton>
      <Skeleton isLoaded={!isLoading} flexBasis="25%">
        <NumberInput defaultValue={unidades} min={1} max={99} size="sm">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Skeleton>
    </Box>
  )
}
export default ProdutoItem
