// src/hooks/useCourses.ts
import { useEffect, useState } from "react"
import { getCourses } from "../../services/courseService"

interface Course {
  id: string
  title: string
  content: string
  image: string
  videoLink: string
  teacherName: string
  numSucces?: number
  numFinish?: number
}

const useCourses = () => {
  const [data, setData] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const courses = await getCourses()
        setData(courses)
      } catch (err) {
        console.error("Error al obtener cursos:", err)
        setError("No se pudo cargar la información")
      } finally {
        setLoading(false)
      }
    }

    loadCourses()
  }, [])

  return { data, loading, error }
}

export default useCourses;
