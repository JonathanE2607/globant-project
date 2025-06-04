import { useEffect, useState } from "react"
import { getCourses } from "../../services/courseService"

type progressType = {
  id: string,
  title: string,
  description: string,
  active: boolean
}
interface Course {
  id: string
  title: string
  content: string
  image: string
  videoLink: string
  teacherName: string
  numSucces?: number
  numFinish?: number
  progress?: progressType[]
}

const useCourses = () => {
  const [data, setData] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)
  const [progress, setProgress] = useState<progressType[]>([])

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const courses = await getCourses()
        const sideProgress = courses.flatMap((course: Course) => course.progress ?? [])
        setData(courses)
        setProgress(sideProgress)
      } catch (err) {
        console.error("Error al obtener cursos:", err)
        setError("No se pudo cargar la información")
      } finally {
        setLoading(false)
      }
    }

    loadCourses()
  }, [])

  return { data, loading, error, progress }
}

export default useCourses;
