

const  header = () => {

    return (
        <nav className="navbar navbar-default">
         <div className="container-fluid">
  
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
     
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      
      <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
     
    </div>
  </div>
</nav>
    );

}

export default header;