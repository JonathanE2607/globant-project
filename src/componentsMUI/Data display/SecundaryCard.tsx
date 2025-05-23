import { TYPES_BUTTON } from "../../utils/typesButton"
import { TYPES_SECUNDARY_CARD } from "../../utils/typesSecundaryCard"
import ButtonUI from "../Forms/Button"
import ImageUI from "../UI/Image"

interface SecondaryCardProps {
  title: string
  description: string
  imageSrc?: string
  buttonText?: string
  variant: TYPES_SECUNDARY_CARD
  source: string
  linkSecundaryCard: string
}

export default function SecondaryCard({
  title,
  description,
  variant,
  source,
  linkSecundaryCard
}: SecondaryCardProps) {
  let secundaryCardElement: React.ReactElement = <></>;

  switch (variant) {
    
    case TYPES_SECUNDARY_CARD.LEFT:
      secundaryCardElement = (
        <div className="flex overflow-hidden rounded-xl border-gray-400 border-2 text-white shadow-md shadow-gray-400 max-w-6xl min-h-64">
          <div className="w-2/5 p-4">
            <ImageUI source={source} alternative="Image About this" sizes="" styles="" />
          </div>
          <div className="flex w-3/5 flex-col justify-between p-6">
            <div>
              <h2 className="mb-4 text-xl font-bold">{title}</h2>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
            <div className="mt-4">
              <ButtonUI content={linkSecundaryCard} variant={TYPES_BUTTON.ABOUT} />
            </div>
          </div>
        </div>
      )
      break;
    case TYPES_SECUNDARY_CARD.RIGHT:
      secundaryCardElement = (
        <div className="flex overflow-hidden rounded-xl border-2 shadow-md shadow-gray-400 border-gray-400 text-white max-w-6xl min-h-64">
          <div className="flex w-3/5 flex-col justify-between p-6">
            <div>
              <h2 className="mb-4 text-xl font-bold">{title}</h2>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
            <div className="mt-4">
              <ButtonUI content="More info" variant={TYPES_BUTTON.ABOUT} />
            </div>
          </div>
          <div className="w-2/5 p-4 justify-center">
            <ImageUI
              source={source}
              alternative="Image About this"
              sizes=""
              styles="" />
          </div>
        </div>
      )
      break;
  }
  return secundaryCardElement
}
