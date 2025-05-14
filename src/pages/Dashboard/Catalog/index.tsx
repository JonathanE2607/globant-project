import Card from "../../../componentsMUI/Data display/Card"
import { TYPES_CARD } from "../../../utils/typesCard"
import Layout from "../Layout"

type CatalogTypes = {

}

const Catalog = () => {

    return (
        <div className="bg-zinc-900">
            <Layout>
                <Card linkCard="Link here" content="Hello" variant={TYPES_CARD.BLUE} />
            </Layout>
        </div>
    )
}

export default Catalog