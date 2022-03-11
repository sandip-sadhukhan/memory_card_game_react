import { Center, Text } from "@chakra-ui/react";
import React from "react";

interface CopyRightText {
  text: string;
}

const CopyRight: React.FC<CopyRightText> = (props: CopyRightText) => {
  return (
    <Center>
      <Text color="gray.600" pt={4} fontSize={14}>
        {props.text}
      </Text>
    </Center>
  );
};

export default CopyRight;
