import avatar1 from "@/assets/Ellipse 59.png";
import avatar2 from "@/assets/Ellipse 58.png";
import avatar3 from "@/assets/Ellipse 57.png";
import avatar4 from "@/assets/Ellipse 56.png";
import avatar5 from "@/assets/Ellipse 55.png";
import {
  NetworkX,
  TreeStructure,
  CardsThree,
  UserCircle,
  SquaresFour,
  UserList,
  GearSix,
  CheckCircle,
} from "@phosphor-icons/react";

export const users = [
  {
    avatarSrc: avatar1,
    userName: "Alfredo Baptista",
    stats: [
      { value: "27", isRed: true },
      { value: "5", isRed: true },
      { value: "22" },
    ],
  },
  {
    avatarSrc: avatar2,
    userName: "James Siphron",
    stats: [{ value: "17" }, { value: "0" }, { value: "17" }],
  },
  {
    avatarSrc: avatar3,
    userName: "Ahmad Septimus",
    stats: [
      { value: "19", isRed: true },
      { value: "2", isRed: true },
      { value: "11" },
    ],
  },
  {
    avatarSrc: avatar4,
    userName: "Kaiya Mango",
    stats: [
      { value: "21", isRed: true },
      { value: "4", isRed: true },
      { value: "15" },
    ],
  },
  {
    avatarSrc: avatar5,
    userName: "James Aminoff",
    stats: [{ value: "12" }, { value: "0" }, { value: "12" }],
  },
];

export const customersData = {
  inProgress: 24,
  delayed: 8,
  failed: 3,
  processed: 15,
};

// export const tasksData = [
//   {
//     label: "Due Today",
//     number: "27",
//   },
//   {
//     label: "Overdue",
//     number: "5",
//   },
//   {
//     label: "Done Today",
//     number: "22",
//   },
//   {
//     label: "Average on Time",
//     number: "30%",
//     showBadge: true,
//   },
// ];

export const tasksData = {
  dueToday: 27,
  dueTodayDiff: 0,
  overdue: 5,
  overdueDiff: 0,
  doneToday: 22,
  doneTodayDiff: 0,
  average: 30,
  averageDiff: 4,
};

export const teamData = [
  {
    label: "Due Today",
    number: "5",
  },
  {
    label: "Overdue",
    number: "107",
  },
  {
    label: "Done Today",
    number: "96",
  },
  {
    label: "Average on Time",
    number: "11",
  },
];

export const reports = [
  {
    reportName: "Suspicious Activity Report",
    reportDescription: "Gaard International Trust Co. Limited",
    reportDate: "24.08.2024, 14:27",
  },
  {
    reportName: "Customer History",
    reportDescription: "Korsgaard Internstional Trust Co. Limited",
    reportDate: "24.08.2024, 12:31",
  },
  {
    reportName: "Daily tasks report",
    reportDescription: "",
    reportDate: "24.08.2024, 10:15",
  },
  {
    reportName: "Customer History",
    reportDescription: "Kierra Stanton",
    reportDate: "23.08.2024, 16:17",
  },
  {
    reportName: "Customer History",
    reportDescription: "Global Nexus Solutions Ltd.",
    reportDate: "23.08.2024, 15:38",
  },
];

export const notifications = [
  {
    notificationIcon: NetworkX,
    notificationName: "Customer Interaction Log reassigned",
    notificationTime: "16:28",
    yesterday: false,
  },
  {
    notificationIcon: TreeStructure,
    notificationName: "EU Initial check rule error",
    notificationTime: "16:17",
    notificationColor: true,
    iconColor: true,
    yesterday: false,
  },
  {
    notificationIcon: CardsThree,
    notificationName: "Source of Funds Verification added to backlog",
    notificationTime: "16:04",
    yesterday: false,
  },
  {
    notificationIcon: NetworkX,
    notificationName: "Periodic Review status changed",
    notificationTime: "15:43",
    yesterday: false,
  },
  {
    notificationIcon: UserCircle,
    notificationName: "Korsgard International passed Due diligence",
    notificationTime: "15:37",
    yesterday: false,
  },
  {
    notificationIcon: CardsThree,
    notificationName: "Screening mapping added to backlog",
    notificationTime: "13:11",
    yesterday: false,
  },
  {
    notificationIcon: UserCircle,
    notificationName: "Madison Trust Co. Limited passed Basic Lookup",
    notificationTime: "12:25",
    yesterday: false,
  },
  {
    notificationIcon: NetworkX,
    notificationName: "Account Holder Authentication status changed",
    notificationTime: "10:17",
    yesterday: false,
  },
  {
    notificationIcon: UserCircle,
    notificationName: "Omar Gouse passed Enhanced DD",
    notificationTime: "15:28",
    yesterday: true,
  },
  {
    notificationIcon: NetworkX,
    notificationName: "Customer Identity Verification status changed",
    notificationTime: "15:14",
    yesterday: true,
  },
  {
    notificationIcon: NetworkX,
    notificationName: "Source of Funds Verification status changed",
    notificationTime: "14:45",
    yesterday: true,
  },
  {
    notificationIcon: CardsThree,
    notificationName: "Potential match compare added to backlog",
    notificationTime: "14:38",
    yesterday: true,
  },
];

export const navLinks = [
  {
    to: "/",
    icon: SquaresFour,
    label: "Dashboard",
  },
  {
    to: "/customers",
    icon: UserList,
    label: "Customers",
  },
  {
    to: "/*",
    icon: CardsThree,
    label: "Tasks",
  },
  {
    to: "/*",
    icon: null,
    label: "My tasks",
  },
  {
    to: "/*",
    icon: null,
    label: "Backlog",
  },

  {
    isDivider: true,
  },

  {
    to: "/*",
    icon: TreeStructure,
    label: "Rules",
  },
  {
    to: "/*",
    icon: NetworkX,
    label: "Manual tasks",
  },
  {
    isDivider: true,
  },
  {
    to: "/*",
    icon: GearSix,
    label: "Settings",
  },
  {
    to: "/*",
    icon: CheckCircle,
    label: "System health",
  },
];
