import { Box, Text, Badge, Flex } from "@chakra-ui/react";
import { ArrowUpRight } from "phosphor-react";
import {useMemo} from "react";

const Card = ({variant, children, ...props}) => {
  const flexProps = useMemo(() => {
    switch (variant) {
      default:
      case "primary":
        return {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          bg: "another.wh",
          borderRadius: "big",
          padding: "medium3",
        }
      case "secondary":
        return {
          pt: "medium",
          px: "medium",
          pb: "small",
          flex: "1 1 10px",
          direction: "column",
          bg: "another.bg",
          borderRadius: "medium",
          gap: "small",
        }
    }
  }, [variant])

  return <Flex {...flexProps} {...props}>{children}</Flex>
}


const InformationBox = ({
  label,
  number,
  numberSize="big2",
  textColor="gray.400",
  showBadge=false,
  pointColor,
  isAlert=false,
}) => {
  pointColor || "gray.400";

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
        {pointColor && (
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
          color={textColor}
          whiteSpace="nowrap"
        >
          {label}
        </Text>
      </Flex>
      <Flex alignItems="center" gap="little2">
        <Text
          fontSize={numberSize}
          fontFamily="main"
          fontWeight="medium"
          color={isAlert ? "red.800" : "gray.900"}
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
