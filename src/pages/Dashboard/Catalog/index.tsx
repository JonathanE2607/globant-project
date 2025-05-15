import Card from "../../../componentsMUI/Data display/Card"
import SearchComponent from "../../../componentsMUI/Forms/Input"
import { TYPES_CARD } from "../../../utils/typesCard"
import Layout from "../Layout"

type CatalogTypes = {
}

const Catalog = () => {

    return (
        <div className="bg-black">
            <Layout>
                <SearchComponent />
                <div className="bg-black">
                  <Card variant={TYPES_CARD.OFFER} content="AWS Certified Solutions Architecture" />
                </div>
            </Layout>
        </div>
    )
}

export default Catalog