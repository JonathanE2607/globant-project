import Card from "../../../componentsMUI/Data display/Card"
import { TYPES_CARD } from "../../../utils/typesCard"

type CatalogTypes = {
}

const Catalog = () => {

    return (
        <div className="bg-black">
                <div className="bg-black flex">
                    <Card
                        variant={TYPES_CARD.OFFER}
                        content="AWS Certified Solutions Architecture"
                        imageURL="https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01-768x427.png"
                        numSucces={1}
                        numFinish={7}
                        teacherName="Lina Linares"
                        linkTo="/course/content"
                    />

                    <Card
                        variant={TYPES_CARD.OFFER}
                        content="AWS Certified Solutions Architecture"
                        imageURL="https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01-768x427.png"
                        numSucces={5}
                        numFinish={7}
                        teacherName="Lina Linares"
                        linkTo="/course/content"
                    />

                    <Card
                        variant={TYPES_CARD.OFFER}
                        content="AWS Certified Solutions Architecture"
                        imageURL="https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01-768x427.png"
                        numSucces={5}
                        numFinish={7}
                        teacherName="Lina Linares"
                        linkTo="/course/content"
                    />
                </div>
        </div>
    )
}

export default Catalog