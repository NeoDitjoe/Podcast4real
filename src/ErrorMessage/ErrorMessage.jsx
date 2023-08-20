
const ErrorMessage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2 style={{color:"orange"}}>Oops! Something went wrong.</h2>
            <p>There was a problem fetching the data.</p>
            <p>Please check your internet connection and try again.</p>
            <button style={{color:"white", padding:'1%'}} onClick={() => window.location.reload()}>Refresh Page</button>
      </div>
    );
}


export default ErrorMessage;