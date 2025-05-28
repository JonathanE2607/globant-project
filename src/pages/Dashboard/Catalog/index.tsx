import Card from "../../../componentsMUI/Data display/Card"
import { TYPES_CARD } from "../../../utils/typesCard"
import courses from "../../../../public/coursesData/courseOne/courses.json"

type CatalogTypes = {
}

const Catalog = () => {

    return (
        <div className="bg-black">
                <div className="bg-black flex">
                    { courses.map((course) =>(
                      <Card
                        variant={TYPES_CARD.OFFER}
                        content={course.title}
                        imageURL={course.image}
                        numSucces={1}
                        numFinish={7}
                        teacherName={course.teacherName}
                        linkTo={`/course/content/${course.id}`}
                    />
                    ))}
                </div>
        </div>
    )
}

export default Catalog