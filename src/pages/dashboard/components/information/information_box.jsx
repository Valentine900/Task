import { Box, Text, Badge, Flex } from "@chakra-ui/react";
import { ArrowUpRight } from "phosphor-react";

const colorMap = {
  1: "main.400",
  2: "another.delayed",
  3: "another.failure",
  4: "another.processed",
};

const InformationBox = ({
  label,
  number,
  numberSize,
  textColor,
  showBadge,
  pointColorCode,
  showPoint,
  numberRed,
}) => {
  const pointColor = colorMap[pointColorCode] || "gray.400";

  return (
    <Flex
      pt="medium"
      px="medium"
      pb="small"
      flex="1 1 10px"
      direction="column"
      bg="another.bg"
      borderRadius="medium"
      gap="small"
    >
      <Flex alignItems="center" gap="little">
        {showPoint && (
          <Box
            width="8px"
            height="8px"
            bg={pointColor}
            borderRadius="50%"
            flexShrink="0"
          />
        )}
        <Text
          fontSize="small"
          fontFamily="main"
          fontWeight="normal"
          color={textColor ? "gray.400" : "gray.500"}
          whiteSpace="nowrap"
        >
          {label}
        </Text>
      </Flex>
      <Flex alignItems="center" gap="little2">
        <Text
          fontSize={numberSize ? "big2" : "small2"}
          fontFamily="main"
          fontWeight="medium"
          color={numberRed ? "red.800" : "gray.900"}
        >
          {number}
        </Text>
        {showBadge && (
          <Badge fontSize="verySmall" bg="green.100" color="green.800">
            <ArrowUpRight size={13} />
            4%
          </Badge>
        )}
      </Flex>
    </Flex>
  );
};

export default InformationBox;
