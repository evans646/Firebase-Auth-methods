import { Customers } from "./Customters";
import data from "../Data/Customers.json";



const CustomersData = data;

export const Main=()=>{
    return(
        <main>
          <div className="cards">
          <div className="card-single">
            <div>
              <h1>50</h1>
              <span>Customers</span>
            </div>
            <div>
              <span className="fas fa-users"></span>
            </div>
          </div>
          <div className="card-single">
            <div>
              <h1>12</h1>
              <span>Projects</span>
            </div>
            <div>
              <span className="fas fa-clipboard-list"></span>
            </div>
          </div>
          <div className="card-single">
            <div>
              <h1>15</h1>
              <span>Orders</span>
            </div>
            <div>
              <span className="fas fa-shopping-cart"></span>
            </div>
          </div>
          <div className="card-single">
            <div>
              <h1>$20K</h1>
              <span>Total Income</span>
            </div>
            <div>
              <span className="fas fa-wallet"></span>
            </div>
          </div>
        </div>

        <div className="recent-grid">
          <div className="projects">
            <div className="card">
              <div className="card-header">
                <h2>Recent Projects</h2>
                <button>
                  Add new Project <span className="fas fa-plus"></span>{" "}
                </button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Project Title</td>
                        <td>Department</td>
                        <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Website</td>
                        <td>Frontend</td>
                        <td>
                          <span className="status purple"></span>
                          Review
                        </td>
                      </tr>
                      <tr>
                        <td>Website</td>
                        <td>Frontend</td>
                        <td>
                          <span className="status orange"></span>
                          Pending
                        </td>
                      </tr>
                      <tr>
                        <td>Website</td>
                        <td>Frontend</td>
                        <td>
                          <span className="status pink"></span>
                          In Progress
                        </td>
                      </tr>
                      <tr>
                        <td>Website</td>
                        <td>Frontend</td>
                        <td>
                          <span className="status purple"></span>
                          Review
                        </td>
                      </tr>
                      <tr>
                        <td>Website</td>
                        <td>Frontend</td>
                        <td>
                          <span className="status pink"></span>
                          In Progress
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
         <Customers Customers={CustomersData}/>
        </div>
      </main>
    )
};