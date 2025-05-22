"use client"


interface TimelineItem {
  title: string
  timestamp: string
  active?: boolean
}

export default function SideBarProgreess() {
  const timelineItems: TimelineItem[] = [
    {
      title: "What a component is...",
      timestamp: "Just now",
      active: true,
    },
    {
      title: "What role components play in React...",
      timestamp: "59 minutes ago",
      active: true,
    },
    {
      title: "How to write your React component...",
      timestamp: "12 hours ago",
      active: true,
    },
    {
      title: "Modified A data in page X",
      timestamp: "Today, 11:59 AM",
    },
    {
      title: "Deleted a page in project",
      timestamp: "Feb 2, 2025",
    },
  ]

  return (
    <div className="bg-black text-white p-6 rounded-lg w-full max-w-md">
      <h1 className="text-4xl font-bold mb-6">Progress</h1>
      <div className="space-y-1">
        {timelineItems.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex items-start">
              <div className="flex flex-col items-center mr-4">
                <div className={`rounded-full w-5 h-5 z-10 ${item.active ? "bg-green-500" : "bg-gray-500"}`}
 />
                {index < timelineItems.length - 1 && (
                  <div className="w-0.5 bg-gray-600 h-full absolute top-5 left-2.5 -z-10" />
                )}
              </div>
              <div className="pb-6">
                <p className="font-medium text-white">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}