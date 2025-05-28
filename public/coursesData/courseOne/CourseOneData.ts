interface TimelineItem {
  title: string
  description: string
  active?: boolean
}

const timelineItems: TimelineItem[] = [
  {
    title: "What a component is...",
    description: "Just now",
    active: true,
  },
  {
    title: "What role components play in React...",
    description: "59 minutes ago",
    active: true,
  },
  {
    title: "How to write your React component...",
    description: "12 hours ago",
    active: true,
  },
  {
    title: "Modified A data in page X",
    description: "Today, 11:59 AM",
  },
  {
    title: "Deleted a page in project",
    description: "Feb 2, 2025",
  },
]

interface courseType {
  title: string,
  content: string,
  testFunction: string
}

const courseData: courseType = {
  title: "create your first interface",
  content: "Traditionally when creating web pages, web developers marked up their content and then added interaction by sprinkling on some JavaScript. This worked great when interaction was a nice-to-have on the web. Now it is expected for many sites and all apps. React puts interactivity first while still using the same technology: a React component is a JavaScript function that you can sprinkle with markup. Here’s what that looks like (you can edit the example below):",
  testFunction:
    `interface ContentType{ title: string }
      const Component = ({title}: ContentType) => {
         return title
      }`
}

export { courseData, timelineItems };