export const NAV_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="1"
          y="1"
          width="6"
          height="6"
          rx="1.5"
          fill="currentColor"
          opacity=".9"
        />
        <rect
          x="9"
          y="1"
          width="6"
          height="6"
          rx="1.5"
          fill="currentColor"
          opacity=".4"
        />
        <rect
          x="1"
          y="9"
          width="6"
          height="6"
          rx="1.5"
          fill="currentColor"
          opacity=".4"
        />
        <rect
          x="9"
          y="9"
          width="6"
          height="6"
          rx="1.5"
          fill="currentColor"
          opacity=".4"
        />
      </svg>
    ),
  },
  {
    id: "classes",
    label: "Classes",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="1"
          y="3"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M5 3V2M11 3V2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path d="M1 7h14" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: "tasks",
    label: "Tasks",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 8.5l2.5 2.5L10 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="1"
          y="1"
          width="14"
          height="14"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
  {
    id: "reports",
    label: "Reports",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="2"
          y="1"
          width="12"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M5 5h6M5 8h6M5 11h4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M2.5 13c.5-2.3 2.6-3.5 5.5-3.5s5 1.2 5.5 3.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "settings",
    label: "Settings",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export const TIMELINES = [
  { label: "Last 7 days", sub: "Past week" },
  { label: "Last 30 days", sub: "Past month" },
  { label: "Last 3 months", sub: "Quarterly" },
  { label: "Last 6 months", sub: "Half-year" },
  { label: "This year", sub: "Jan – now" },
  { label: "Custom range", sub: "Pick dates" },
];

export const REPORT_TYPES = [
  {
    id: "All Classes",
    label: "All Classes",
    desc: "Holistic overview across every class — attendance, scores, and task completion rates at a glance.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="1"
          y="1"
          width="9"
          height="9"
          rx="2.5"
          fill="#378add"
          opacity=".2"
          stroke="#378add"
          strokeWidth="1.4"
        />
        <rect
          x="12"
          y="1"
          width="9"
          height="9"
          rx="2.5"
          fill="#378add"
          opacity=".2"
          stroke="#378add"
          strokeWidth="1.4"
        />
        <rect
          x="1"
          y="12"
          width="9"
          height="9"
          rx="2.5"
          fill="#378add"
          opacity=".2"
          stroke="#378add"
          strokeWidth="1.4"
        />
        <rect
          x="12"
          y="12"
          width="9"
          height="9"
          rx="2.5"
          fill="#378add"
          opacity=".1"
          stroke="#378add"
          strokeWidth="1.4"
          strokeDasharray="2 1.5"
        />
      </svg>
    ),
  },
  {
    id: "Task Based",
    label: "Task Based",
    desc: "Deep-dive into individual tasks — submissions, due dates, completion status, and overdue counts.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="2"
          y="2"
          width="18"
          height="18"
          rx="4"
          stroke="#378add"
          strokeWidth="1.4"
          fill="#378add"
          fillOpacity=".1"
        />
        <path
          d="M7 11l3 3 5-5"
          stroke="#378add"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export const MOCK_DATA = {
  "All Classes": {
    stats: [
      { label: "Total classes", value: "12", delta: "+2 this term", up: true },
      {
        label: "Total students",
        value: "348",
        delta: "+24 enrolled",
        up: true,
      },
      {
        label: "Avg score",
        value: "78%",
        delta: "-1.2% vs last period",
        up: false,
      },
      {
        label: "Tasks completed",
        value: "204",
        delta: "86% completion rate",
        up: true,
      },
    ],
    headers: ["Class name", "Students", "Avg score", "Tasks", "Completion"],
    rows: [
      {
        cells: ["Mathematics 101", "32", "82%", "18", "94%"],
        completionIdx: 4,
      },
      {
        cells: ["English Literature", "28", "75%", "14", "87%"],
        completionIdx: 4,
      },
      {
        cells: ["Physics Advanced", "24", "71%", "22", "79%"],
        completionIdx: 4,
      },
      {
        cells: ["Computer Science", "30", "88%", "20", "96%"],
        completionIdx: 4,
      },
      {
        cells: ["History & Culture", "26", "77%", "12", "91%"],
        completionIdx: 4,
      },
    ],
    bars: [
      ["Mathematics 101", 94, "#185fa5"],
      ["Computer Science", 96, "#0f6e56"],
      ["History & Culture", 91, "#185fa5"],
      ["English Literature", 87, "#185fa5"],
      ["Physics Advanced", 79, "#ba7517"],
    ],
  },
  "Task Based": {
    stats: [
      {
        label: "Total tasks",
        value: "86",
        delta: "Across all classes",
        up: true,
      },
      { label: "Completed", value: "204", delta: "+18 this week", up: true },
      { label: "Pending", value: "44", delta: "Due within 7 days", up: false },
      { label: "Overdue", value: "12", delta: "Requires attention", up: false },
    ],
    headers: ["Task name", "Class", "Due date", "Status", "Submissions"],
    rows: [
      {
        cells: [
          "Assignment 1 — Math Quiz",
          "Mathematics 101",
          "Apr 12",
          "Completed",
          "32 / 32",
        ],
        statusIdx: 3,
      },
      {
        cells: [
          "Essay Draft",
          "English Literature",
          "Apr 18",
          "Pending",
          "21 / 28",
        ],
        statusIdx: 3,
      },
      {
        cells: [
          "Lab Report",
          "Physics Advanced",
          "Apr 20",
          "Overdue",
          "18 / 24",
        ],
        statusIdx: 3,
      },
      {
        cells: [
          "Coding Project",
          "Computer Science",
          "Apr 25",
          "Completed",
          "30 / 30",
        ],
        statusIdx: 3,
      },
      {
        cells: [
          "Timeline Poster",
          "History & Culture",
          "Apr 28",
          "Pending",
          "14 / 26",
        ],
        statusIdx: 3,
      },
    ],
  },
};

/** Seed list shown on the reports home (name, type, period, generated date). */
export const INITIAL_SAVED_REPORTS = [
  {
    id: "seed-1",
    name: "Spring term overview",
    type: "All Classes",
    timeline: "Last 30 days",
    generatedAt: "Apr 18, 2026",
    reportId: "RPT-3102",
  },
  {
    id: "seed-2",
    name: "Assignment pipeline Q1",
    type: "Task Based",
    timeline: "Last 3 months",
    generatedAt: "Apr 22, 2026",
    reportId: "RPT-7841",
  },
  {
    id: "seed-3",
    name: "Weekly class pulse",
    type: "All Classes",
    timeline: "Last 7 days",
    generatedAt: "Apr 28, 2026",
    reportId: "RPT-5520",
  },
];

export const STATUS_STYLE = {
  Completed: { bg: "#eaf3de", color: "#3b6d11", dot: "#639922" },
  Pending: { bg: "#faeeda", color: "#854f0b", dot: "#ef9f27" },
  Overdue: { bg: "#fcebeb", color: "#a32d2d", dot: "#e24b4a" },
};

export function completionStyle(v) {
  const n = parseInt(v, 10);
  if (n >= 90) return { bg: "#eaf3de", color: "#3b6d11" };
  if (n >= 75) return { bg: "#faeeda", color: "#854f0b" };
  return { bg: "#fcebeb", color: "#a32d2d" };
}
