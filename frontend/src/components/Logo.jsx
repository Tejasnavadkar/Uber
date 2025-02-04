import PropTypes from "prop-types"  // to remove proptype validation err


const Logo = ({className}) =>{
    return (
        <>
          <img className={className} src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber" /> 
        </>
    )
}

Logo.propTypes = {
    className:PropTypes.string
}


export default Logo