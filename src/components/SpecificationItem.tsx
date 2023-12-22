import { SpecificationItemProps } from "@/interfaces"
import { HorizontalLine } from "."

const SpecificationItem = ({ label, value }: SpecificationItemProps) => {
    return (
        <div className='flex flex-col my-2 gap-2'>
            <div className='flex justify-between'>
                <p className='text-gray-900 font-medium text-sm'>{label}</p>
                <p className='text-gray-900 font-regular text-sm'>{value}</p>
            </div>
            <HorizontalLine />
        </div>
    )
}
export default SpecificationItem
