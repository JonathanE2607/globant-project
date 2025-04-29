import { MdOutlineDashboard } from "react-icons/md";

const IconUI = ({ customIcon, colorIcon }: { customIcon: string, colorIcon: string }) => {
    return (
        <div className={`w-16 h-16 bg-${customIcon} rounded-xl flex justify-center `}>
            <MdOutlineDashboard className={`w-12 h-12 text-${colorIcon} mt-2`} />
        </div>
    )
}

export default IconUI;