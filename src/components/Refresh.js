import './Refresh.css'

function Refresh(){
    return(
        <div className='Refresh'>
            <h2 className='Refresh-header'>No Cars Left</h2>
            <button className='Refresh-button' onClick={()=>window.location.reload()}>Refresh</button>
        </div>
    )
}

export default Refresh