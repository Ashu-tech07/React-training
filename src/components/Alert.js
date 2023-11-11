import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        let string = word.toLowerCase();
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div style={{height:'30px'}}>
        {props.alert && 
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{height:'40px'}}>
              <p className='pt-0'> <strong>{capitalize(props.alert.type)} : </strong>{props.alert.msg}.</p>
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
        
        </div>
    )
}

export default Alert;
