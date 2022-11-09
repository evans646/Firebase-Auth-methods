

export const Customers=({Customers})=>{
    return(
        <div className="customers">
        <div className="card">
          <div className="card-header">
            <h2>New Customers</h2>
            <button>
              See all <span className="fas fa-arrow-right"></span>
            </button>
          </div>
          <div className="card-body">
           {Customers.map((customer,i )=> (
                <div className="customer" key={i}>
                <div className="info">
                <img src={customer.picture} height="40px" width="40px" alt="customer"/>
                  <div>
                    <h4>{customer.name}</h4>
                    <small>{customer.status}</small>
                  </div>
                </div>
                <div className="contact">
                  <span className="fas fa-user-circle"></span>
                  <span className="fas fa-comment"></span>
                  <span className="fas fa-phone-alt"></span>
                </div>
                </div> 
             ))}
          </div>
        </div>
      </div>
    )
};
