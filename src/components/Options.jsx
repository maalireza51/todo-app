import { ActionOption } from './ActionOption'
import { ColorItems } from './ColorItems'
import { PendingCount } from './PendingCount'
import { StatusItems } from './StatusItems'

export const Options = () => {
    return (
        <div className='Options'>
            <h3>Options</h3>
            <div className='OptionItems'>
                <ActionOption />
                <PendingCount />
                <StatusItems />
                <ColorItems />
            </div>
        </div>
    )
}
