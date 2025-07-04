import { Heading, Box, Select, Text, Stack, Flex } from "@chakra-ui/react";
import InformationBox from "./components/information/information_box";
import {
  users,
  customersData,
  tasksData,
  teamData,
  reports,
  notifications,
} from "@/app/data";
import UserCard from "./components/team/user_card";
import ReportCard from "./components/reports/report_item";
import NotificationItem from "./components/notifications/notification_item";
import Container from "@/components/ui/container";

function Dashboard() {
  return (
    <Flex direction="column" gap="24px">
      <Flex padding="2px 0">
        <Heading
          fontSize="big2"
          fontWeight="medium"
          marginTop="big2"
          fontFamily="main"
          lineHeight="big"
        >
          Dashboard
        </Heading>
      </Flex>
      <Flex gap="big2">
        <Stack flexGrow="1" maxWidth="1100px" gap="big2">
          {/*Costumers*/}

          <Container title="Customers" showSelect={true}>
            <Flex gap="medium3">
              {customersData.map((item) => (
                <InformationBox
                  key={item.id}
                  label={item.label}
                  number={item.number}
                  numberRed={item.numberRed}
                  numberSize={item.numberSize}
                  textColor={item.textColor}
                  showBadge={item.showBadge}
                  pointColorCode={item.pointColorCode}
                  showPoint={item.showPoint}
                />
              ))}
            </Flex>
          </Container>

          {/*Tasks*/}

          <Container title="Tasks" showSelect={true}>
            <Flex gap="medium3">
              {tasksData.map((item) => (
                <InformationBox
                  key={item.id}
                  label={item.label}
                  number={item.number}
                  numberRed={item.numberRed}
                  numberSize={item.numberSize}
                  textColor={item.textColor}
                  showBadge={item.showBadge}
                  pointColorCode={item.pointColorCode}
                  showPoint={item.showPoint}
                />
              ))}
            </Flex>
          </Container>

          {/*Team*/}

          <Container>
            <Flex
              alignItems="center"
              gap="big2"
              mt="negativeMedium"
              borderBottom="1px solid"
              borderColor="gray.100"
            >
              <Heading
                fontSize="medium"
                fontFamily="main"
                fontWeight="medium"
                color="gray.900"
                padding="16px 0px"
                borderBottom="1px solid"
                borderColor="gray.500"
                marginBottom="-negativeSmall"
              >
                Risk team
              </Heading>
              <Heading
                fontSize="medium"
                fontFamily="main"
                fontWeight="medium"
                color="gray.400"
                py="medium3"
                px="nothing"
              >
                Due diligence team
              </Heading>
              <Box ml="auto">
                <Select.Root>
                  <Select.Trigger
                    border="none"
                    display="flex"
                    alignItems="center"
                  >
                    <Select.ValueText
                      color="gray.900"
                      fontWeight="normal"
                      fontSize="verySmall2"
                    >
                      Today
                    </Select.ValueText>
                    <Box ml="little">
                      <Select.Indicator />
                    </Box>
                  </Select.Trigger>
                </Select.Root>
              </Box>
            </Flex>
            <Flex mt="medium3" gap="medium3">
              {teamData.map((item) => (
                <InformationBox
                  key={item.id}
                  label={item.label}
                  number={item.number}
                  numberRed={item.numberRed}
                  numberSize={item.numberSize}
                  textColor={item.textColor}
                  showBadge={item.showBadge}
                  pointColorCode={item.pointColorCode}
                  showPoint={item.showPoint}
                />
              ))}
            </Flex>
            <Flex
              color="gray.400"
              fontFamily="main"
              fontSize="little"
              textTransform="uppercase"
              fontWeight="normal"
              alignItems="center"
              pt="nothing"
              px="medium"
              pb="little"
              mt="big2"
              gap="medium"
            >
              <Text flexGrow="1">Name</Text>
              <Text width="80px" flexShrink="0">
                Due Today
              </Text>
              <Text width="80px" flexShrink="0">
                Overdue
              </Text>
              <Text width="80px" flexShrink="0">
                Done Today
              </Text>
            </Flex>
            <Stack gap="small">
              {users.map((user, index) => (
                <UserCard
                  key={index}
                  avatarSrc={user.avatarSrc}
                  userName={user.userName}
                  stats={user.stats}
                />
              ))}
            </Stack>
          </Container>

          {/*Reports */}

          <Container title="Reports">
            <Stack>
              {reports.map((report, index) => (
                <ReportCard
                  key={index}
                  reportName={report.reportName}
                  reportDescription={report.reportDescription}
                  reportDate={report.reportDate}
                />
              ))}
            </Stack>
          </Container>
        </Stack>

        {/*Notifications */}

        <Flex
          flexGrow="1"
          flexDirection="column"
          maxWidth="1100px"
          bg="another.wh"
          borderRadius="big"
          padding="medium3"
          height="100%"
        >
          <Heading fontSize="medium">Notifications</Heading>
          <Flex alignItems="center" gap="small2" py="medium3" px="nothing">
            <Box flex="1" height="1px" bg="gray.50" />
            <Text
              color="gray.400"
              fontFamily="main"
              fontWeight="normal"
              fontSize="small"
            >
              Today
            </Text>
            <Box flex="1" height="1px" bg="gray.50" />
          </Flex>
          <Stack gap="medium">
            {notifications
              .filter((item) => item.yesterday === false)
              .map((item) => (
                <NotificationItem
                  key={item.id}
                  notificationIcon={item.notificationIcon}
                  notificationName={item.notificationName}
                  notificationTime={item.notificationTime}
                  notificationColor={item.notificationColor}
                  iconColor={item.iconColor}
                />
              ))}
          </Stack>
          <Flex alignItems="center" gap="small2" py="medium" px="nothing">
            <Box flex="1" height="1px" bg="gray.50" />
            <Text
              color="gray.400"
              fontFamily="main"
              fontWeight="normal"
              fontSize="small"
            >
              Yesterday
            </Text>
            <Box flex="1" height="1px" bg="gray.50" />
          </Flex>
          <Stack gap="12px">
            {notifications
              .filter((item) => item.yesterday === true)
              .map((item) => (
                <NotificationItem
                  key={item.id}
                  notificationIcon={item.notificationIcon}
                  notificationName={item.notificationName}
                  notificationTime={item.notificationTime}
                  notificationColor={item.notificationColor}
                  iconColor={item.iconColor}
                />
              ))}
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
